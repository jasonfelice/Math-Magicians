import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handler, value, btnClass } = this.props;
    return (
      <button type="button" onClick={() => handler(value)} className={btnClass}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  btnClass: PropTypes.string,
  handler: PropTypes.func,
};

Button.defaultProps = {
  value: '0',
  btnClass: 'btns',
  handler: null,
};
