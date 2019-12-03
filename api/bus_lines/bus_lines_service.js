axios = require('axios')

function getLines(req, res, next) {
    axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o')
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

module.exports = { getLines }