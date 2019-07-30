import React, { Component }from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import Gallery from './containers/Photos/Gallery';
import RegistryPage from './containers/Registry/RegistryPage';
import RsvpPage from './containers/RSVP/RsvpPage';

class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/Gallery" component={Gallery}></Route>
        <Route path="/RegistryPage" component={RegistryPage}></Route>
        <Route path="/RsvpPage" component={RsvpPage}></Route>
      </Switch>
    )
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;