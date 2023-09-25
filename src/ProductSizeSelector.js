import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProductSize } from './actions';

export default function ProductSizeSelector() {
  const selectedSize = useSelector((state) => state.selectedSize);
  const dispatch = useDispatch();
  const [size, setSize] = useState(selectedSize || ''); // Initialize with the size from local storage, if available

  // Persist selected size to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedSize', size);
  }, [size]);

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSize(newSize);
    dispatch(setProductSize(newSize));
  };

  return (
    <div>
      <label>Select Size:</label>
      <select value={size} onChange={handleSizeChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
    </div>
  );
};
