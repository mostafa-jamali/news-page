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
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(21);
  const [totalPages, setTotalPages] = useState(0);
  const [buttonsArray, setButtonsArray] = useState([]);

  const calculateOfTotalPages = total => {
    const pages = Math.ceil(total / perPage);
    setTotalPages(pages);
  };

  const totalButton = () => {
    const total = [];
    for (let i = 1; i < totalPages + 1; i++) {
      total.push(i);
    }
    setButtonsArray(total);
    console.log('total :', total);
    console.log('buttonsArray :', buttonsArray);
    // return total;
  };
  useEffect(() => {
    totalButton();
  }, [totalPages]);

  const getNewsOfCompany = page => {
    const requestBody = {
      NextRows: 21,
      Page: page,
    };
    axios
      .post(API, requestBody, {})
      .then(res => {
        // console.log(res.data.Data);
        setNews(res.data.Data.News);

        calculateOfTotalPages(res.data.Data.Total);
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

      {totalPages == 0 ? (
        <></>
      ) : (
        <div className="d-flex justify-content-center text-center w-100" dir="rtl">
          <div className="d-flex justify-content-between">
            <div className="pagination-button-next m-1">{'<'}</div>
            <div className="pagination-button m-1 border rounded">1</div>
            <div className="pagination-button m-1 border rounded">2</div>
            <div className="pagination-button m-1 border rounded">3</div>
            <div className="pagination-button m-1 border rounded">4</div>
            {/* </div>
          {totalPages.map((item, i) => {
            return <div onClick={setPage(i)}>{i}</div>;
          })}
          <div> */}
            <div className="pagination-button-previous m-1">{'>'}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Body;
