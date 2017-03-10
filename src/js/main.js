/**
 * Created by cijo.kb on 10/03/17.
 */

//the starting point of the app

import React from 'react';
import ReactDOM from 'react-dom';


class Welcome extends React.Component{
    render(){
        return (<div> Welcome</div>);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Welcome/>, document.getElementById('app'));
});