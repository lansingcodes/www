import arch from 'arch';

const d = arch.DOM;

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.displayName = 'layout';
  }

  render() {
    return d.div({
      className: 'wrapper'
    }, this.props.children);
  }
}

export default Layout;
