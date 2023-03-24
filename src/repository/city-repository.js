
const {City} =require('../models/index')

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch(error){
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
    
    async deleteCity({cityid}){
        try{
            await City.destroy({
                where: {
                    cityid:id}
                });
                return true;
            } 
        catch(error){
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
    async updateCity(cityid,data){
        try {
            const city = await City.update(data,{
                where:{
                    id:cityid
                }
            });
            return city;
        }
        catch (error) {
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }


    }
    async getcity(cityid){
        try {
            const city = await City.findByPk(cityid);
            return city;
        }
        catch (error) {
            console.log("Somthing went wrong in the repository layer");
            throw{error};
        }
    }
}
module.exports=CityRepository;