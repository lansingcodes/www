import BaseRoute from './base-route';
import arch from 'arch';

import Layout from '../components/layout';

let layout = arch.dom(Layout);
let d = arch.DOM;

class WelcomeRoute extends BaseRoute {
  getTitle() {
    return super.getTitle("Welcome!");
  }

  render() {
    return layout(
      d.h1('Welcome! This is your first Arch app!'),
      d.p(this.props.appState.get('state.message').deref())
    );
  }
}

export default WelcomeRoute;