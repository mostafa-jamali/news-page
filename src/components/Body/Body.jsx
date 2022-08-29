import { useEffect } from 'react';
import TheNews from './TheNews';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/body.css';

function Body({ news, totalPages, buttonsArray, setButtonsArray, page, setPage }) {
  useEffect(() => {
    const num = Array.from({ length: totalPages }, (_, i) => i + 1);
    setButtonsArray(num);
  }, [setButtonsArray, totalPages]);

  return (
    <div className="app-body">
      {news.length === 0 ? (
        <div>خبر جدیدی وجود ندارد.</div>
      ) : (
        <Row className="px-5 mx-4" dir="rtl">
          {news.map(item => {
            return (
              <Col key={item.Id} md={4} className="px-4 py-2 my-1">
                <TheNews news={item} />{' '}
              </Col>
            );
          })}
        </Row>
      )}

      {/* pagination section */}
      {totalPages === 1 ? (
        <></>
      ) : (
        <div className="d-flex justify-content-center text-center w-100" dir="rtl">
          <div onClick={() => page !== 1 && setPage(page - 1)} className="pagination-button-next m-1">
            {'<'}
          </div>
          {buttonsArray?.map((item, i) => {
            return (
              <div onClick={() => setPage(item)} className="pagination-button m-1 pt-1 border rounded" key={i}>
                {item}
              </div>
            );
          })}
          <div onClick={() => page < totalPages && setPage(page + 1)} className="pagination-button-previous m-1">
            {'>'}
          </div>
        </div>
      )}
    </div>
  );
}
export default Body;
