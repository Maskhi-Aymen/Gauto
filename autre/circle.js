import React, { Component } from 'react';
import { ProgressCircle } from 'react-desktop/windows';

export default class extends Component {
  static defaultProps = {
    color: 'red'
  };

  render() {
    return (
      <ProgressCircle
        color={this.props.color}
        size={100}
      />
    );
  }
}