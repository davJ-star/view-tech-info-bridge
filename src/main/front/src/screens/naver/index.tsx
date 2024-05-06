import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

function NaverNewsScreen() {
  const [hello, sethello] = useState('');
  const [data, setdata] = useState<{ title: string }>({
    title: '',
  });
  const [news, setNews] = useState<
    {
      title: string;
      link: string;
      description: string;
    }[]
  >([
    {
      title: '',
      link: '',
      description: '',
    },
  ]);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    //
    // axios.get('/api/test').then((res) => {
    //   sethello(res.data);
    // });
    // axios.get('/api/v1/dump/getData').then((res) => {
    //   setdata(res.data);
    // });
    return () => {};
  }, []);

  const onClick_getNews = useCallback<() => void>(() => {
    axios.get(`/api/getnews/${keyword}`).then((res) => setNews(res.data));
  }, [keyword]);

  // console.log(data);
  console.log(news);

  return (
    <div className="App">
      {/* <p>백엔드 데이터: {hello}</p>
      <p>백엔드 데이터1 from database : {data.title} </p> */}

      <hr />
      <input
        placeholder="키워드"
        onChange={(event) => setKeyword(event.target.value)}
      />
      <button onClick={onClick_getNews}>CALL NEWS</button>
    </div>
  );
}

export default NaverNewsScreen;
