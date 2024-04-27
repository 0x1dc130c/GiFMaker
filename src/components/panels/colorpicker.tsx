'use clinet';

import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('#000000');

  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const handleChange = (newColor: any) => {
    setColor(newColor.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={toggleColorPicker}>
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5" />
        </svg>

      </button>
      {showColorPicker && (
        <div>
          <ChromePicker styles={{ default: { picker: { width: '200px' } } }} color={color} onChange={handleChange} />
          <p>Selected Color: {color}</p>
        </div>
      )}

    </div>
  );
};

export default ColorPicker;

