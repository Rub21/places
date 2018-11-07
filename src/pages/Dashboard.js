import React from 'react';
import Container from '../components/Container';
import { FlatButton, FloatingActionButton } from 'material-ui';
import { getPlaces } from './../requests/places'
import PlaceHorizontal from '../components/places/PlaceHorizontal';

import {
    Link
} from 'react-router-dom';
import { ContentAdd } from 'material-ui/svg-icons';
export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            places: []
        }
        this.loadPlaces();
    }
    loadPlaces() {
        getPlaces().then(jsonR => {
            console.log(jsonR)
            this.setState({
                places: jsonR.docs
            })
        });
    }
    places() {
        return this.state.places.map((place, index) => {
            return <PlaceHorizontal place={place} />
        })
    }
    render() {
        return (
            <div>
                <Link to="/new">
                    <FloatingActionButton
                        className="FAB"
                        secondary={true}
                    >
                        <ContentAdd></ContentAdd>
                    </FloatingActionButton>
                </Link>

                <Container>
                    <div className="row" style={{ textAlign: 'left' }}>
                        <div className="col-xs-12 col-md-2">
                            <FlatButton label="Explorar"></FlatButton>
                            <FlatButton label="Favoritos"></FlatButton>
                            <FlatButton label="Visitas previas"></FlatButton>
                        </div>
                        <div className="col-xs-12 col-md-10">
                            {this.places()}
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}