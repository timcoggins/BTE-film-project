
const Credits = (props) => {
    console.log(props)
    return (
      <>
        {props.credits &&
          props.credits.cast.map((person) => (
            <p>{person.name}</p>
          ))}
      </>
    );
}
export default Credits;

