import H4 from "../atoms/H4";
import TD from "../atoms/TD";

const Credits = (props) => {
  console.log(props);
  return (
    <>
      <TD>
        <H4>
          Cast:
          {props.credits &&
            props.credits.cast
              .slice(0, 5)
              .map((person) => <p>{person.name}</p>)}
        </H4>
      </TD>
    </>
  );
};
export default Credits;
