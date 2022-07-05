import React from 'react';
import ReactDOM from 'react-dom';
import singlesSpaReact from 'single-spa-react';
import NavBar from './navbar';

const lifecycles = singlesSpaReact({
  React,
  ReactDOM,
  rootComponent: NavBar,
  errorBoundary(err, info, props) {
    return <div>Navbar errored</div>;
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
