/**
 * Created by cijo.kb on 16/03/17.
 */

import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NotificationSync from 'material-ui/svg-icons/notification/sync';

const style = {
    marginRight: 20,
};

class CardContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            expanded:true
        }
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    render(){

        var hidden = !this.props.loggedIn?{display:"none"}:"";
        return (
            <div className="CardContainer">
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <Card className={this.props.cardName} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                        <CardHeader
                            title={this.props.cardTitle}
                            subtitle={this.props.userName}
                            avatar={this.props.avatar}
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true}>
                            <ul>
                                <li>
                                    Update1
                                </li>
                                <li>
                                    update2
                                </li>
                            </ul>
                        </CardText>
                        <CardActions>
                            <RaisedButton label={this.props.primaryBtn} primary={true} onClick={this.props.login}
                                          style={this.props.loggedIn?{display:"none"}:{}}/>
                            <RaisedButton label={this.props.secondaryBtn} secondary={true} onClick={this.props.logout}
                                          style={!this.props.loggedIn?{display:"none"}:{}}/>/>
                            <FloatingActionButton mini={true} disabled={!this.props.loggedIn} style={style}>
                                <NotificationSync />
                            </FloatingActionButton>
                        </CardActions>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}


CardContainer.defaultProps = {
    cardName: "Card Name",
    cardTitle:"Card Title",
    userName:"User Name",
    avatar:"images/avatar.png",
    primaryBtn:"login",
    secondaryBtn:"logout"
}

export default CardContainer;