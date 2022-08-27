import Chip from "../Chip";
import "./ListStyle.css";

const List = (props) => {
  const {
    data: { results: list = []},
  } = props;
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <div class="tile">
              <img
                class="tile-img"
                alt="thumbnail"
                src={item.fields.thumbnail}
                onError={(e) => e.target.src = 'logo512.png'}
              />
              <div class="tile-info">
                <h1>{item.fields.headline}</h1>
                <p>
                  {item.tags.map((tag) => (
                    <Chip text={tag.webTitle} />
                  ))}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
