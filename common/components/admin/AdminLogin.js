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

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
  render() {
    return (
      <div>AdminLogin</div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
