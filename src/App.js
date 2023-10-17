import React, { useState } from 'react';

function App() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [boxStyle, setBoxStyle] = useState({ width: 0, height: 0 });

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleCalculateClick = () => {
    setBoxStyle({ width: width + 'px', height: height + 'px', border: '1px solid black' });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <div>
          <label>Width:</label>
          <input type="number" onChange={handleWidthChange} />
        </div>
        <div>
          <label>Height:</label>
          <input type="number" onChange={handleHeightChange} />
        </div>
        <div>
          <button onClick={handleCalculateClick}>Calculate</button>
        </div>
      </div>
      <div style={{ ...boxStyle }}>
       
      </div>
    </div>
  );
}

export default App;
