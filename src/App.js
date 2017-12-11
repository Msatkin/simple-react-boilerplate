import React from 'react';
import logo from './logo.svg';
import './App.css';
import View from './components/view/view';

const App = ({ match: { params } }) => {
  return (
    <div>
      <View filter={params.filter || 'Home'} />
    </div>
  )
}

export default App;
