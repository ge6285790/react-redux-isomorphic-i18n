import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import update from 'react-addons-update';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

class About extends Component {
  render() {
    return (
      <div>about</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
