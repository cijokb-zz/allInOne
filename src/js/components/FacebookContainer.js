/**
 * Created by cijo.kb on 14/03/17.
 */

import React, { Component } from 'react';
import CardContainer from "./CardContainer"


class FacebookContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loggedIn: false,
            avatar: "",
            userName:""
        }

    }

    componentWillMount(){
        window.fbAsyncInit = function() {
            FB.init({
                appId      : '<App id>',
                cookie     : true,  // enable cookies to allow the server to access
                                    // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.8' // use graph api version 2.8
            });

            // Now that we've initialized the JavaScript SDK, we call
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.

            // These three cases are handled in the callback function.
            FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
            }.bind(this));
        }.bind(this);

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    testAPI = () => {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
            var userName = response.name;
            FB.api('/me', {fields: 'picture'}, function(response) {
                console.log("%o",response.picture.data.url);
                this.setState({userName:userName,loggedIn:true,avatar:response.picture.data.url});
            }.bind(this));
            // FB.api('/me', {fields: 'cover'}, function(response) {
            //     console.log("%o",response.cover.source);
            //     this.setState({coverPic:response.cover.source});
            // }.bind(this));
        }.bind(this));
    }

    // This is called with the results from from FB.getLoginStatus().
    statusChangeCallback = (response) =>{
        console.log('statusChangeCallback');
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
            this.setState({loggedIn:true});
            this.testAPI();
        } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            this.setState({loggedIn:false});
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            this.setState({loggedIn:false});
        }
    }

    // This function is called when someone finishes with the Login
    // Button.  See the onlogin handler attached to it in the sample
    // code below.
    checkLoginState = () => {
        FB.getLoginStatus(function(response) {
                this.statusChangeCallback(response);
        }.bind(this));
    }

    FBLogin =() => {
        if(!this.state.loggedIn)
        {
            FB.login(function(response) {
                    if (response.authResponse) {
                        console.log('Welcome!  Fetching your information.... ');
                        this.checkLoginState();
                    } else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }.bind(this));
        }
    }

    FBLogout =() => {
        if(this.state.loggedIn)
        {
            FB.logout(function(response) {
                console.log(response);
                this.setState({loggedIn:false});
            }.bind(this));
        }
    }


    render(){
        console.log("render FacebookContainer");
        const props = {
            cardName: this.props.cardName,
            cardTitle:this.props.cardTitle,
            loggedIn: this.state.loggedIn,
            avatar: this.state.loggedIn?this.state.avatar:undefined,
            userName:this.state.loggedIn?this.state.userName:undefined,
            primaryBtn:"login",
            secondaryBtn:"logout"
        }
        return (
                <CardContainer {...props} login={this.FBLogin} logout={this.FBLogout}/>
        );
    }
}

export default FacebookContainer;