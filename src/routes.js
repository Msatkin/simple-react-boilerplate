import React from 'react';
import propTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

const Routes = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/:filter?" component={App}/>
            </Router>
        </Provider>
    )
}

Routes.propTypes = {
    store: propTypes.object.isRequired
}

export default Routes;