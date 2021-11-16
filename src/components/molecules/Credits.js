import P from "../atoms/P";
import TD from "../atoms/TD";
import Icon from "../atoms/Icon";
import CastImageContainer from "../atoms/CastImageContainer";

const Credits = (props) => {
  console.log(props);
  return (
    <>
      <CastImageContainer>
          {props.credits &&
            props.credits.cast.slice(0, 5).map((person) => (
              <>
                <Icon width='50px'
                  src={`http://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                />
                <p>{person.name}</p>
              </>
            ))}
        </CastImageContainer>
    </>
  );
};
export default Credits;


