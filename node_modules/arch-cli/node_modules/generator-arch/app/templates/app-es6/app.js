import arch from 'arch';

import welcome from './routes/welcome';
import notFound from './routes/not-found';

let initialState = {
  message: 'I am immutable!'
};

let app = arch.application.create({
  getInitialState() {
    return initialState;
  },

  start(appState) {
    appState.get('state.message').update(() => 'I was updated!');
  },

  routes() {
    let page = arch.routes.page;

    return arch.routes.define(
      page('/', welcome),
      page('*', notFound)
    );
  }
});

export default app;
