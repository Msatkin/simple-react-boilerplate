import React from 'react';
import React_Dom from 'react-dom';
import configureStore from './store/store';  
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';

import './index.css';
import './scheme/default.css';

let store = configureStore()


React_Dom.render(
    <MuiThemeProvider>
        <Routes store={store}/>
    </MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
