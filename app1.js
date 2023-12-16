import React from "react";
import ReactDOM from "react-dom/client";

const reactHeading = React.createElement('h1', { id: 'heading' }, 'Hello World from React!');

const reactRoot = ReactDOM.createRoot(document.getElementById('root2'));

reactRoot.render(reactHeading);

/*
    <div id="parent">
        <div id="child">
            <h1>I am an h1 Tag1</h1>
            <h2>I am an h2 Tag2</h2>
        </div>
        <div id="child2">
            <h1>I am an h1 Tag3</h1>
            <h2>I am an h2 Tag4</h2>
        </div>
    </div>
*/

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'This is React 🚀'),
    React.createElement('h2', {}, 'I am an h2 Tag2'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'I am an h1 Tag3'),
    React.createElement('h2', {}, 'I am an h2 Tag4'),
  ]),
]);

const reactRoot2 = ReactDOM.createRoot(document.getElementById('root3'));

reactRoot2.render(parent);
