axios = require('axios')

function getItinerary(req, res, next) {
    axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=il&p=' + req.params.id)
      .then(function (response) {
        res.send(response.data)
      })
      .catch(function (error) {
        res.send({errors: error})
      })
      .finally(function () {
        next()
    });
}

module.exports = { getItinerary }