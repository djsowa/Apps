import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const Home = () => (
  <div>
    <Link to="/whitelist"><RaisedButton>Whitelist</RaisedButton></Link>
    <Link to="/status"><RaisedButton>Status</RaisedButton></Link>
    <Link to="/linklist"><RaisedButton>LinkList</RaisedButton></Link>
  </div>
);

export default Home;
