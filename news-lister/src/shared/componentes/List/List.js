import Chip from "../Chip";
import "./ListStyle.css";

const List = (props) => {
  const {
    data: { results: list = [], currentPage = 1, pages = 1 },
    onPaginationClick = () => {},
  } = props;

  const handlePagination = (page) => {
    onPaginationClick({page});
  };

  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <div className="tile">
              <img
                className="tile-img"
                alt="thumbnail"
                src={item.fields.thumbnail}
                onError={(e) => (e.target.src = "logo512.png")}
              />
              <div className="tile-info">
                <h1>{item.fields.headline}</h1>
                {item.tags.map((tag) => (
                  <Chip key={tag.id} text={tag.webTitle} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => handlePagination(currentPage - 1)}
      >
        Prev
      </button>
      <button
        className="pagination-button"
        disabled={currentPage === pages}
        onClick={() => handlePagination(currentPage + 1)}
      >
        Next
      </button>
    </>
  );
};

export default List;
