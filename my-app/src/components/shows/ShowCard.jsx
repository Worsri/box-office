import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary, onStarMeClick }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Discription';
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>

      <p>{summaryStripped}</p>

      <div>
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button" onClick={() => onStarMeClick(id)}>
          Star me
        </button>
      </div>
    </div>
  );
};

export default ShowCard;
