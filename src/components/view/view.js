import React from 'react';
import {connect} from 'react-redux';
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';

const View = (props) => {
    let Page;
    switch(props.filter) {
        case "Home":
            Page = Home;
            break;

        case "Contact":
            Page = Contact;
            break;

        case "About":
            Page = About;
            break;

        default: 
            Page = NotFound;
    }
    return (
        <div className="View">
            <Page/>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
      view: ownProps.filter
    }
}

export default connect(mapStateToProps)(View);