import '../../styles/theNews.css';

function TheNews(props) {
  return (
    <div className="theNews">
      <div className="border">
        <img
          className="isaco-img col-12"
          src={`https://isaco.ir/sImage/news/${props.news.Id}/` + props.news.Image}
          alt={props.news.Title}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center news-info-card">
        <div className="border p-3 news-info">
          <a href={`https://www.isaco.ir/${props.news.Id}/رسانه/اخبار`} className="news-title text-decoration-none">
            <h3>{props.news.Title}</h3>
          </a>

          <div className="news-exp my-3">{props.news.ExpiryDate}</div>
          <div className="news-description" dir="rtl">
            {props.news.Description}
          </div>
          <a href={`https://www.isaco.ir/${props.news.Id}/رسانه/اخبار`} className="news-more text-decoration-none d-block mt-3">
            {' >> '}
            ادامه مطلب
          </a>
        </div>
      </div>
    </div>
  );
}
export default TheNews;
