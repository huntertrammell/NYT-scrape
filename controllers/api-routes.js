
var db = require('../models/index');
var request = require('request');
var cheerio = require('cheerio');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(app) {

  app.get("/api/articles/:articleId/:likeCount", (req, res) => {
    db.Article.update({ _id: ObjectId(req.params.articleId) }, 
    {$set: {likes: req.params.likeCount}})
      .then(response => {
        res.send(response);
      });
      
  });

  app.get("/api/articles", function(req, res) {
    db.Article.find({})
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  app.get("/api/empty", (req, res) => {
    db.Article.collection.drop().then(() => {
      res.send("DB Emptied");
    });
  });

  app.get('/api/comments/remove/:articleId/:id', (req, res) => {
    console.log(req.params)
    db.Article.update({ _id: ObjectId(req.params.articleId) }, 
    {$pull: {comments: {_id: ObjectId(req.params.id)}}})
      .then(response => {
        res.send(response);
      });
      
  });

  app.post('/api/comments/:id', function (req, res){
    console.log(req.body)
    const articleId = req.params.id;
    const result = {
      _id: ObjectId(),
      user: req.body.user,
      comment: req.body.comment,
      time: req.body.time
    };
    db.Article.findOneAndUpdate({'_id': ObjectId(articleId)}, {$push: {'comments':result}})
    .then(function(result){
      console.log("Comment Added:"+ result)
    })
    .catch(function(err) {
      res.json(err);
    });
  })

  app.get("/api/scrape", function(req, res) {
    request("https://www.nytimes.com/section/technology", function(error, response, html) {
      const $ = cheerio.load(html);
      $("#stream-panel div ol li").each(function(i, element) {
        let result = {};
        result.title = $(element)
          .find("h2")
          .text()
          .trim()

        result.link = $(element)
          .find('a')
          .attr("href")

        result.summary = $(element)
          .find("a")
          .children("p")
          .text()
          .trim()
        
        result.img = $(element)
          .find('figure')
          .attr('itemid')
        
        result.author = $(element)
          .find('div')
          .children('p')
          .children('span')
          .text()
        
        result.date = $(element)
          .find('a')
          .attr("href")
          .substr(1, 10)

        db.Article.countDocuments({title: result.title}, function(err, exists){
          if (exists === 0){
            db.Article.create(result)
            .then(function(dbArticle) {
              console.log("Article Added");
            })
            .catch(function(err) {
            });
          } else {
            console.log("Article already scraped to DB")
          }
        })
      });
    });
  });
};