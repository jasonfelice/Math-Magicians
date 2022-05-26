import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, btnClass } = this.props;
    return (
      <div className={btnClass}>{value}</div>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  btnClass: PropTypes.string,
};

Button.defaultProps = {
  value: '0',
  btnClass: 'btns',
};
