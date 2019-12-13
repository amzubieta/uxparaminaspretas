import axios from 'axios';


const config ={
    baseURL:"https://my-json-server.typicode.com/amzubieta/demo",
    responseType:"json"
}

const protocolo = axios.create(config)

export function getCard(){
    const url = '/db'
    return protocolo.get(url)
}
