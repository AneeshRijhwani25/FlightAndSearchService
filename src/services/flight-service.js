const {FlightRepository ,AirplaneRepository}= require('../repository/index');
const{compareTime}=require('../utils/helper');
class FlightService {
    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository= new FlightRepository();
    }
    async createFlight(data){
        try {
            if (!compareTime(data.arrivalTime,data.departureTime)) {
                throw {error: "Arrival Time cannot be less than Departure Time"}
            }
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log('Somthing went wrong in service layer');
            throw {error};  
        }
    }
    async getAllFlightData(data){
        try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log('Somthing went wrong in service layer');
            throw {error}; 
        }
    }
    async getFlight(flightId){
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log('Somthing went wrong in service layer');
            throw {error}; 
        }
    }

    async updateFlight(flightId,data){
        try {
            const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
        } catch (error) {
            console.log('Somthing went wrong in service layer');
            throw {error}; 
        }
    }
}
module.exports=FlightService;