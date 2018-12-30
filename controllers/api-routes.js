
var db = require('../models/index');
var request = require('request');
var cheerio = require('cheerio');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(app) {

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

  app.get("/scrape", function(req, res) {
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
          .find("p")
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

        console.log(result);
        db.Article.create(result)
          .then(function(dbArticle) {
            res.send("Scrape Is Finished");
          })
          .catch(function(err) {
          });
      });
    });
  });
};