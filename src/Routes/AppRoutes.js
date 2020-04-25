import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultPage from '../DefaultPage';

class AppRoutes extends React.Component {
    render() {
        return(
            <Switch>
                <Route exact path="/" component={DefaultPage} />
            </Switch>
        );
    }
}

export default AppRoutes;