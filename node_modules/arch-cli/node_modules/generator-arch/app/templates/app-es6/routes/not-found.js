import BaseRoute from './base-route';
import arch from 'arch';
import Layout from '../components/layout'

let layout = arch.dom(Layout);
let d = arch.DOM;

class NotFoundRoute extends BaseRoute {
  getTitle() {
    return super.getTitle('Not Found');
  }

  render() {
    return layout(
      d.h1('Page Not Found')
    );
  }
}

export default NotFoundRoute;
