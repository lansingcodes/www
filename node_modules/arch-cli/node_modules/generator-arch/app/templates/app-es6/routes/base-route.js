let html = `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>{title}</title>
    </head>
    <body>
      {body}
    </body>
  </html>`;

// This is a base route for convenient definition of outer layout and
// page title. All route components inherit from this class
class BaseRoute extends React.Component {

  getLayoutTemplate() {
    // TODO replace me with an actual template.
    // Jade is a good template engine for example.
    return (context) => {
      return html.replace('{body}', context.body).replace('{title}', context.title);
    }
  }

  getTitle(title) {
    if (title) {
      return `Arch App | ${title}`;
    } else {
      return "Arch App";
    }
  }
}

export default BaseRoute;
