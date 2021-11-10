/**
 * SearchInput.js
 * Styled component for the search input field
 */
import styled from "styled-components";

const SearchInput = styled.input`
    width: 300px;
    padding: 10px;
    font-size: 15px;
  
    border: 1px solid black;
    border-radius: 10px;
  
    text-align: center;
    :focus::placeholder {
        color: transparent;
    }
  
    ::-webkit-input-placeholder {
      font-size: 16px;
    }

    @media screen and (min-width:1141px) {
        font-size: 16px;
        //padding: 13px 13px;
    }

`

export default SearchInput;