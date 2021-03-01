import axios from 'axios'

class RestClient {

    static getRequest(url)
    {
       return  axios.get(url).then(response=>{
           console.log(response.data)
            return response.data
        }).catch(error=>{
            return null;
        });
    }

    static postRequest(url,JsonData,config){

        return axios.post(url,JsonData,config).then(response=>{
            console.log(response.data)
            return response.data
        }).catch(error=>{
            return null;
        })
    }

}

export default RestClient