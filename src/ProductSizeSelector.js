import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductSize } from './actions';

export default function ProductSizeSelector() {
  const selectedSize = useSelector((state) => state.selectedSize);
  const dispatch = useDispatch();

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    dispatch(setProductSize(newSize));
  };

  return (
    <div>
      <label>Select Size:</label>
      <select value={selectedSize} onChange={handleSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
}
