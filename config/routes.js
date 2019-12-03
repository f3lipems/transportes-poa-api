const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use(router)

    // Linhas Routes
    const lines_service = require('../api/bus_lines/bus_lines_service')
    router.route('/linhas').get(lines_service.getLines)
    
    // Lotações Routes
    const micro_bus_service = require('../api/micro_bus_line/micro_bus_line_service')
    router.route('/lotacao').get(micro_bus_service.getLines)
    
    // Itinerário Routes
    const itinerary = require('../api/itinerary/itinerary_service')
    router.route('/itinerario/:id').get(itinerary.getItinerary)
    
}