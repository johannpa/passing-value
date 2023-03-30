import React,{ useState } from 'react';
import Child from './components/Child';

function App() {
  const [childData, setChildData] = useState({
    name: 'unknown',
    age: 'unknown'
  });

  const passData = (data) => {
    setChildData(data);
  }

  return (
    <div style={{padding: 30}}>
        <Child passData={passData} />
        <h4>The person info from the Child component:</h4>
        <p>Name: <strong>{childData.name}</strong></p>
        <p>Age: <strong>{childData.age}</strong> years old</p>
    </div>
  );
}

export default App;
