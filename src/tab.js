var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , TabbedArea = Bootstrap.TabbedArea
  , TabPane = Bootstrap.TabPane;

var tabHeader = (
  <h3>タブタブタブ</h3>
);

var TabbedAreaBox = React.createClass({
  render: function() {
    return(
      <TabbedArea defaultActiveKey={1}>
        <TabPane eventKey={1} tab="どうも">
          <Panel header={tabHeader} bsStyle="success">
            これは、Tabです
          </Panel>
        </TabPane>
        <TabPane eventKey={2} tab="こんちわ">
          <Panel header={tabHeader} bsStyle="danger">
            これも、Tabです
          </Panel>
        </TabPane>
      </TabbedArea>
    );
  }
});
