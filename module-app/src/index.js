import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Year1 from "./components/YearOne";
import Year2 from "./components/YearTwo";
import Year3 from "./components/YearThree"
import ModuleMenu from './components/ModuleMenu';

ReactDOM.render(
    <Router>
        <div>
            <Switch>
               <Route exact path="/" component={App} />
               <Route exact path="/App" component={App} />
                <Route exact path="/YearOne" component={Year1} />
                <Route path="/YearTwo" component={Year2} />
                <Route path="/ModuleMenu" component={ModuleMenu}/>
                <Route path="/YearThree" component={Year3} />
            </Switch>
        </div>
    </Router>
    , document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
