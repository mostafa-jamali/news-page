import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TheNews from './TheNews';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/body.css';

const API = process.env.REACT_APP_API_URL;

function Body() {
  const [news, setNews] = useState([]);
  const [perPage, setPerPage] = useState(21);
  const [totalNews, setTotalNews] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const calculateOfTotalPages = total => {
    const a = Math.ceil(total / perPage);

    console.log('a :', a);
  };

  const getNewsOfCompany = () => {
    const requestBody = {
      NextRows: 21,
      Page: 1,
    };
    axios
      .post(API, requestBody, {})
      .then(res => {
        // console.log(res.data.Data);
        setNews(res.data.Data.News);
        setTotalNews(res.data.Data.Total);
        console.log('totalNews :', res.data.Data.Total);
        console.log('perPage :', perPage);

        calculateOfTotalPages(totalNews);
      })
      .catch(err => {
        // console.log('err:', err);
      });
  };
  useEffect(() => {
    getNewsOfCompany();
  }, []);

  return (
    <div className="app-body">
      {news.length == 0 ? (
        <div>خبر جدیدی وجود ندارد.</div>
      ) : (
        <Row className="px-5 mx-4">
          {news.map(item => {
            return (
              <Col key={item.Id} md={4} className="px-4 py-2 my-1">
                <TheNews news={item} />{' '}
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}
export default Body;
