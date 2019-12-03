import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Image from './image';
import Page3 from './page3';
import Page2 from './page2';
import Page1 from './page1';
import Nav from './nav';

export default class App extends React.Component {
  render() {
    return (


      <BrowserRouter>
        <div className="App">

          <Nav />
          <Route exact path="/" component={Image} />
          <Route exact path="/page3" component={Page3} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />

        </div>

      </BrowserRouter>

    );
  }
}
