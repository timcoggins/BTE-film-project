
const Credits = (props) => {
    console.log(props)
    return (
      <>
        {props.credits &&
          props.credits.cast.slice(0, 5).map((person) => (
            <p>{person.name}</p>
          ))}
      </>
    );
}
export default Credits;


