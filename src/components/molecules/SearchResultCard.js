/**
 * SearchResultCard.js
 * Shows an individual movie after the user searches for a movie
 */
import { NavLink } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import ResultCard from "../atoms/ResultCard";
import ResultCardTitleBar from "../atoms/ResultCardTitleBar"
import H3 from "../atoms/H3";
import P from "../atoms/P"


/**
 * SearchResultCard component
 * @param props
 * @returns {JSX.Element}
 */
const SearchResultCard = (props) => {
    return (
        <NavLink to={`/${props.media}/${props.item.id}`}><ResultCard>
            {/*<ResultCardTitleBar>
                <H3><Link to={`/film/${props.item.id}`}>{props.item.title || props.item.name}</Link></H3>
                <P>{props.item.vote_average < 10 ? props.item.vote_average.toFixed(1) : props.item.vote_average}</P>
            </ResultCardTitleBar>
            <p>Released: {formatDate(props.item.release_date)}</p>*/}
            <img
                src={`http://image.tmdb.org/t/p/w500${ props.item.poster_path }`}
                alt={ props.item.title || props.item.name }
                onError={(e)=> e.target.src = `http://via.placeholder.com/260x370/dddddd/?text=Poster Missing`}
            />
            <section>
                <ResultCardTitleBar>
                    <H3>{props.item.title || props.item.name}</H3>
                    <P>{props.item.vote_average < 10 ? props.item.vote_average.toFixed(1) : props.item.vote_average}</P>
                </ResultCardTitleBar>
                <p>Released: {formatDate(props.item.release_date)}</p>
            </section>
        </ResultCard></NavLink>
    )
}

export default SearchResultCard;