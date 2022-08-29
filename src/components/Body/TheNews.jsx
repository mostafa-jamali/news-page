import '../../styles/theNews.css';

function TheNews(props) {
  console.log('props :', props);
  return (
    <div className="mb-3" dir="rtl">
      <img
        className="isaco-img col-12"
        src={`https://isaco.ir/sImage/news/${props.news.Id}/` + props.news.Image}
        alt={props.news.Title}
      />
      <div className="d-flex justify-content-center align-items-center">
        <div className="border p-3 news-info">
          <h3 className="news-title">
            <a href="#" className="text-decoration-none text-dark">
              {props.news.Title}
            </a>
          </h3>

          <div className="news-exp my-3">{props.news.ExpiryDate}</div>
          <div className="news-description">{props.news.Description}</div>
          <a href="#" className="news-more text-decoration-none d-block mt-3 mb-2">
            ادامه مطلب
            {'>'}
          </a>
        </div>
      </div>
    </div>
  );
}
export default TheNews;
