import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCard } from '../../service/base';
import CardUsers from '../Users/CardUsers'

class User extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            res: {
                name: "",
                image: "",
                start_date: "",
                address: "",
                url: ""
            }
        }
    }

    componentDidMount(){
        getCard()
        .then(response =>{
            this.setState({
                res:response.data.data[0]
            })
        }).catch(error => {
        console.error(error)
        });
    }
    render(){
        const { name, image, start_date, address, url } = this.state.res;
        console.log(this.state.res);
        
        return(
            
            <div>
                <CardUsers
                nombreEvento={name}
                avatar={image}
                data={start_date}
                lugar={address.name}
                rua={address.address}
                numero={address.address_num}
                link={url}
                />
            </div>
        );
    }
        
}

export default User;
