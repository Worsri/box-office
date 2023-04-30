import { Link } from 'react-router-dom';
import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : 'no country known'}</p>

      {!!birthday && <p>Born : {birthday}</p>}

      <p>{deathday ? `Died on ${deathday}` : 'Alive'}</p>

      <div>
        <Link to="/">Read more</Link>
        <button type="button">Star me</button>
      </div>
    </SearchCard>
  );
};

export default ActorCard;