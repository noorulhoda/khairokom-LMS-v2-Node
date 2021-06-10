const CountryController  = require('../controllers/country.controller');

module.exports = (app) =>{
  app.get('/api/country',
    CountryController.all)

  app.get('/api/country/:id',
   CountryController.findById)

   app.get('/api/country/withName/:name',
   CountryController.findByName)
}