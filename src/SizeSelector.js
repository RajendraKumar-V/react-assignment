import React from 'react';
import { connect } from 'react-redux';
import { setSize } from './actions';

class SizeSelector extends React.Component {
  handleSizeSelect = (size) => {
    this.props.setSize(size);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleSizeSelect('small')}>Small</button>
        <button onClick={() => this.handleSizeSelect('medium')}>Medium</button>
        <button onClick={() => this.handleSizeSelect('large')}>Large</button>
      </div>
    );
  }
}

export default connect(null, { setSize })(SizeSelector);