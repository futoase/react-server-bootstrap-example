var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <JumbotronBox/>
        <TabbedAreaBox/>
        <PageHeaderTitle/>
        <PageMessage/>
      </div>
    );
  }
});
