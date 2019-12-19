import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCard } from '../../service/base';
import CardUsers from '../Users/CardUsers'

class Blog extends React.Component{
    constructor (props){
        super(props)    
        this.state = {
            res:{
                name:"",
                image:"",
                parrafo:""
            }
        }
    }

    componentDidMount(){
        getCard()
        .then(response =>{
            this.state({
                res: response.data.data[0] 
            }).catch(error=>{
                console.error(error);
            });

            ) 
        }
    }
}

export default 