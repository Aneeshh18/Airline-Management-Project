const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        } catch(error){
            throw {error};
        }
    }

    async dleteCity(cityid){
        try{
            const city = await City.destroy({
                where:{
                    id:cityId
                }
            });
        } catch(error){
            throw {error};
        }
    }
}


module.exports = CityRepository;