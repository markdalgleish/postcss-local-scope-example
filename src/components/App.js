import React from 'react';

import HelloWorld from './HelloWorld/HelloWorld';
import FooBar from './FooBar/FooBar';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>PostCSS Local Scope Example</h1>

        <p>On this page we have two components: <strong>HelloWorld</strong> and <strong>FooBar</strong>.</p>
        <p>Both of them use classes called <strong>'.root'</strong> and <strong>'.text'</strong>.</p>
        <p>Typically, such generic classes would cause a naming collision since they all exist in the same global scope.</p>
        <p>However, <strong>each class has been replaced with a local identifier scoped to the component</strong> with <a href="https://github.com/webpack/css-loader">css-loader</a> and <a href="https://github.com/markdalgleish/postcss-local-scope">postcss-local-scope</a>.</p>

        <HelloWorld />
        <br />
        <FooBar />

      </div>
    );
  }

};
