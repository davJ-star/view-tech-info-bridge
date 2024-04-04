import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [hello, sethello] = useState('');
  const [data, setdata] = useState<{ title: string }>({
    title: '',
  });

  useEffect(() => {
    axios.get('/api/test').then((res) => {
      sethello(res.data);
    });
    axios.get('/api/v1/dump/getData').then((res) => {
      setdata(res.data);
    });

    return () => {};
  }, []);

  console.log(data);

  return (
    <div className="App">
      <p>백엔드 데이터: {hello}</p>
      <p>백엔드 데이터1 from database : {data.title} </p>
    </div>
  );
}

export default App;
