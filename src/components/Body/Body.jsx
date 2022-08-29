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

  const getNewsOfCompany = () => {
    console.log('API: ', API);
    const requestBody = {
      NextRows: 21,
      Page: 1,
    };
    axios
      .post(API, requestBody, {})
      .then(res => {
        setNews(res.data.Data.News);
        // console.log('resp news: ', res.data.Data.News);
      })
      .catch(err => {
        console.log('err:', err);
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
        <Row className='px-5' >
          {news.map((item, i) => {
            return (
              <Col md={4} className="px-4 mb-5" >
                <TheNews news={item} key={i} />{' '}
              </Col>
            );
          })}
        </Row>
      )}

      <div></div>
    </div>
  );
}
export default Body;
