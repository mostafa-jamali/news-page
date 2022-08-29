import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body/Body';
import './App.css';

const API = process.env.REACT_APP_API_URL;

function App() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(21);
  const [totalPages, setTotalPages] = useState(0);
  const [buttonsArray, setButtonsArray] = useState([]);

  const getNewsOfCompany = page => {
    const requestBody = {
      NextRows: 21,
      Page: page,
    };
    axios
      .post(API, requestBody, {})
      .then(res => {
        setNews(res.data.Data.News);

        const pages = Math.ceil(res.data.Data.Total / perPage);
        if (pages) {
          setTotalPages(pages);
        }
      })
      .catch(err => {
        // console.log('err:', err);
      });
  };

  useEffect(() => {
    getNewsOfCompany(page);
  }, [page]);

  return (
    <div className="App">
      <Header />
      <Body
        news={news}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        buttonsArray={buttonsArray}
        setButtonsArray={setButtonsArray}
      />
    </div>
  );
}

export default App;
