import React from 'react';
import Card, { CardText, CardActions } from 'material-ui/Card';
import { CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import {
    BrowserRouter as ReactRouter,
    Link,
    Route,
    Switch
} from 'react-router-dom';


export default class PlaceHorizontal extends React.Component {
    render() {
        
        return (
            <Card style={{ marginTop: '1em', overflow: 'hidden' }}>
                <div className="row">
                    <div className="PlaceH-avatar">
                        <img src={this.props.place.avatarImage} />
                    </div>
                    <div className="col-xs" style={{ textAlign: 'left' }}>
                        <CardHeader
                            title={this.props.place.title}
                            address={this.props.place.address}>

                        </CardHeader>
                    </div>
                    <div className="row middle-xs">
                        <div className="col-xs-6 col-sm-8 col-lg-9" >
                            <CardText>
                                {this.props.place.description}
                            </CardText>
                        </div>
                    </div>
                    <div className="col-xs">
                        <CardActions>
                            <Link to={"/lugares/" + this.props.place.slug}>
                                <FlatButton
                                    label="Ver mas" />
                            </Link>

                        </CardActions>
                    </div>
                </div>
            </Card>
        )
    }
}