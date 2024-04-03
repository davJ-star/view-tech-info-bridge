import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [hello, sethello] = useState('');

  useEffect(() => {
    axios.get('/api/test').then((res) => {
      sethello(res.data);
    });

    return () => {};
  }, []);

  return <div className="App">백엔드 데이터: {hello}</div>;
}

export default App;
