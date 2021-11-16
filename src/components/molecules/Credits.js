import P from "../atoms/P";
import CastImageContainer from "../atoms/CastImageContainer";
import H3 from "../atoms/H3";
import CastImage from "../atoms/CastImage";

const Credits = (props) => {
  console.log(props);
  return (
    <>
      <H3>Cast:</H3>
      <CastImageContainer>
        {props.credits &&
          props.credits.cast.slice(0, 5).map((person) => (
            <div>
              <CastImage
                width="70px"
                src={`http://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
              <P>{person.name}</P>
            </div>
          ))}
      </CastImageContainer>
    </>
  );
};
export default Credits;


