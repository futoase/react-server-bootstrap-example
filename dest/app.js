var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Jumbotron = Bootstrap.Jumbotron;

var JumbotronBox = React.createClass({displayName: 'JumbotronBox',
  render: function() {
    return(
      React.createElement(Jumbotron, null, 
        React.createElement("h1", null, "Hello, world"), 
        React.createElement("p", null, "こんにちは！")
      )
    );
  }
});

var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , TabbedArea = Bootstrap.TabbedArea
  , TabPane = Bootstrap.TabPane;

var tabHeader = (
  React.createElement("h3", null, "タブタブタブ")
);

var TabbedAreaBox = React.createClass({displayName: 'TabbedAreaBox',
  render: function() {
    return(
      React.createElement(TabbedArea, {defaultActiveKey: 1}, 
        React.createElement(TabPane, {eventKey: 1, tab: "どうも"}, 
          React.createElement(Panel, {header: tabHeader, bsStyle: "success"}, 
            "これは、Tabです"
          )
        ), 
        React.createElement(TabPane, {eventKey: 2, tab: "こんちわ"}, 
          React.createElement(Panel, {header: tabHeader, bsStyle: "danger"}, 
            "これも、Tabです"
          )
        )
      )
    );
  }
});

var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Panel = Bootstrap.Panel
  , PageHeader = Bootstrap.PageHeader
  , Well = Bootstrap.Well;

var PageHeaderTitle = React.createClass({displayName: 'PageHeaderTitle',
  render: function() {
    return(
      React.createElement(PageHeader, null, "Reactの練習です")
    );
  }
});

var PageMessage = React.createClass({displayName: 'PageMessage',
  render: function() {
    return(
      React.createElement(Well, null, "どもども")
    )
  }
});


var React = require('react');

module.exports = React.createClass({displayName: 'exports',
  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(JumbotronBox, null), 
        React.createElement(TabbedAreaBox, null), 
        React.createElement(PageHeaderTitle, null), 
        React.createElement(PageMessage, null)
      )
    );
  }
});
