/* jshint ignore:start */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from "./HomePage";
import FormPage from "./FormPage";
import NewPage from "./NewPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/FormPage" component={FormPage} />
                <Route path="/NewPage" component={NewPage} />
            </Switch>
        </Router>
    );
}

export default App;
/* jshint ignore:end */