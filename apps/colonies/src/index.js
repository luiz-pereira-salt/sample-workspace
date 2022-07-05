import React from 'react';
import ReactDOM from 'react-dom';
import singlesSpaReact from 'single-spa-react';

const HelloWorld = (props) => <h1> hello world</h1>;

const lifecycles = singlesSpaReact({
  React,
  ReactDOM,
  rootComponent: HelloWorld,
  errorBoundary(err, info, props) {
    return <div>Navbar errored</div>;
  },
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
