import '../../styles/theNews.css';

function TheNews(props) {
  console.log('props :', props);
  return (
    <div className="m-3 theNews" dir="rtl">
      <img
        className="isaco-img col-12"
        src={`https://isaco.ir/sImage/news/${props.news.Id}/` + props.news.Image}
        alt={props.news.Title}
      />
      <div className="border d-flex justify-content-center align-items-center">
        <div className="news-info">
          <h4>
            <a href="#">{props.news.Title}</a>
          </h4>

          <div className="news-exp">{props.news.ExpiryDate}</div>
          <div className="news-description">{props.news.Description}</div>
          <a href="#" className="news-more">
            {'<'} <span>ادامه مطلب </span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default TheNews;
