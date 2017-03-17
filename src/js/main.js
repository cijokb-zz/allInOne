/**
 * Created by cijo.kb on 10/03/17.
 */

//the starting point of the app

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DashBoard from "./components/DashBoard";

class Main extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <DashBoard/>
            </div>
        );
    }
}

injectTapEventPlugin();
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Main/>, document.getElementById('app'));
});