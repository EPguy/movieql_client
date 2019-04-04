import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { HashRouter as Router, Route } from 'react-router-dom';
import client from "./apolloClient";
import Home from './Home';
import Detaile from './Detail';
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <main>
            <Route exact={true} path={"/"} component={Home}/>
            <Route exact={true} path={"/details/:movieId"} component={Detaile}/>
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
