import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle } from 'reactstrap';
import './styles.css';

const CardUsers = (props) => {

    return (
        <div>
            <div className="titulo1" id='eventos'>
                <h2>Próximos Eventos</h2>
            </div>

            <div className="contenedor">
                <Card className="card">
                    <CardTitle>{props.title}</CardTitle>
                    <CardImg className="card-img" variant="top" src={props.img} alt={props.alt} />
                    <CardBody>
                        <CardText>
                            {props.nombreEvento}
                        </CardText>
                        <CardText>
                            {props.data}
                        </CardText>
                        <CardText>
                            {props.lugar}
                        </CardText>
                        <CardText>
                            {props.rua}
                        </CardText>
                        <CardText>
                            {props.numero}
                        </CardText>
                    </CardBody>
                    <CardBody>
                        <CardLink href="#">{props.link}</CardLink>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default CardUsers;