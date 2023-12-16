import React from 'react';
import ReactDOM from 'react-dom';

// React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React 🚀");

// JSX = HTML-like or XML-like syntax
// JSX (transpiled before it reaches the JS) - PARCEL - Babel
// React Element
const jsxHeading = (
  <h1 className='head'>
    Hello World From JSX ✅
  </h1>
);

// React Functional Component
const HeadingComponent = () => {
  return <h1 className='heading'>React Functional Component 1</h1>
}

// Without return statement and in one line
const HeadingComponent2 = () => <h1 className='heading'>React Functional Component 2</h1>;

// Normal function with return statement
const HeadingComponent3 = function () {
  return (
    <h1 className='heading'>
      React Functional Component 3
    </h1>
  );
}

const number = 1000;

// Without return, with () and multiple lines
const HeadingComponent4 = () => (
  <div id='container'>
    {/* Component Composition */}
    <HeadingComponent />
    <HeadingComponent2 />
    <HeadingComponent3 />
    {jsxHeading}
    <h1>{number}</h1>
    <h1 className='heading'>
      React Functional Component 4
    </h1>
  </div>
);

// React Component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); // Rendering React Element
root.render(<HeadingComponent4 />); // Rendering React Component