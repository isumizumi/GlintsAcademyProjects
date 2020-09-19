import React, { Component } from 'react';
import {
    Card,CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

export default class CardUser extends Component {
    render() {
        return (
            <Card style={{ marginTop: "20px" }}>
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>{this.props.age}</CardSubtitle>
                </CardBody>
            </Card>
        );
    }
}
