import { uid } from 'uid';
import P from "../atoms/P";
import CastImageContainer from "../atoms/CastImageContainer";
import H3 from "../atoms/H3";
import CastImage from "../atoms/CastImage";
import CastMember from "../atoms/CastMember";

const Credits = (props) => {
  return (
    <>
      <H3>Cast:</H3>
      <CastImageContainer>
        {props.credits &&
          props.credits.cast.slice(0, 8).map((person) => (
            <CastMember key={uid()}>
              <CastImage
                width="100%"
                src={`http://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={person.name}
              />
              <P>{person.name}</P>
            </CastMember>
          ))}
      </CastImageContainer>
    </>
  );
};
export default Credits;


