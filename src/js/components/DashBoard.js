/**
 * Created by cijo.kb on 15/03/17.
 */

import React, { Component } from 'react';
import {Grid} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import FacebookContainer from "./FacebookContainer";

// the top class where all the various social media containers are created.
class DashBoard extends Component {
    render(){
        return (
            <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={3}>
                        <FacebookContainer cardName="Facebook" cardTitle ="Facebook"/>
                    </Col>

                </Row>
            </Grid>
        );
    }
}

export default DashBoard;