import React from 'react';
import ReactDOM from 'react-dom';
import { InstaCash } from './InstaCash';
import './styles/styles.scss';
// Server mockup
import { server } from './server';
server();
//
ReactDOM.render(<InstaCash />, document.getElementById('root'));
