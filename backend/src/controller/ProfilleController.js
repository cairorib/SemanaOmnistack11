const connection = require('../database/connection');

module.exports ={
  index:async (request,response)=>{
  //async index(request, response){

    const ong_id = request.headers.authorization;

    const incidents = await connection('incidents')
    .where('ong_id', ong_id)
    .select()
    //.select('*');

    return response.json(incidents);
  }

}