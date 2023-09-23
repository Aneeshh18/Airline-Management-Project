const {FlightRepository, AirplaneRepository }= require('../repository/index');
const {compareTime } = require('../utils/helper');

class FlightsService {


    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    
    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Arrival time cannot be less than departure time' } 
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer of flight");
            throw {error};
        }
    }

    async getAllFlightData(data){
        try{
            
           const flights = await this.flightRepository.getAllFlights(data);
           return flights;
        } catch (error) {
            console.log("Something went wrong at service layer of flight");
            throw {error};
        }
    }
}


module.exports = FlightsService;