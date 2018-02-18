import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
  <div>
    <Link to="/todos">All</Link>
    <Link to="/todos/active">Active</Link>
    <Link to="/todos/completed">Completed</Link>
  </div>
);
