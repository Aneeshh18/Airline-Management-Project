const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        } catch(error){
            console.log("Something went wrong in the respository layer");
            throw {error};
        }
    }

    async deleteCity(cityid){
        try{
            const city = await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        } catch(error){
            console.log("Something went wrong in the respository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try{
            const city = await City.update(data, {
                where:{
                    cityid
                }
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the respository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityid);
            return city;
        }catch(error){
            console.log("Something went wrong in the respository layer");
            throw {error};
        }
    }

}


module.exports = CityRepository;