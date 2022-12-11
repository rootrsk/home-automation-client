import instance from "./instance"

export default  API = ({url,method,body,params,headers})=>{
    try {
        const response = instance({
            url,
            body,
            params,
            method,
            headers
        })
        return {
            data: response.data,
            error:null
        }
    } catch (error) {
        return {
            data:null,
            error:error.message,
        }
    }
}