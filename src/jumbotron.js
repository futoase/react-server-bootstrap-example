var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Jumbotron = Bootstrap.Jumbotron;

var JumbotronBox = React.createClass({
  render: function() {
    return(
      <Jumbotron>
        <h1>Hello, world</h1>
        <p>こんにちは！</p>
      </Jumbotron>
    );
  }
});
