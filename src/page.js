var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Panel = Bootstrap.Panel
  , PageHeader = Bootstrap.PageHeader
  , Well = Bootstrap.Well;

var PageHeaderTitle = React.createClass({
  render: function() {
    return(
      <PageHeader>Reactの練習です</PageHeader>
    );
  }
});

var PageMessage = React.createClass({
  render: function() {
    return(
      <Well>どもども</Well>
    )
  }
});

