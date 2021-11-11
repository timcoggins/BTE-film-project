import styled from "styled-components";
import {useContext} from "react";
import P from '../atoms/P'
import ThemeContext from "../../contexts/ThemeContext";



const Container = styled.div`
  text-align: center;
  margin-top: 15px;
`

const Image = styled.img`
  border-radius: 12px;
  width: 256px;
  height: 256px;
`


const HomeImage = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <Container>
            {darkMode ? <Image src={'./tv-room-dark.png'}/> : <Image src={'./tv-room.png'}/> }
            {/* got this image here https://iconscout.com/illustration/tv-room-1970160 need to attribute*/}
            <P>Find where to stream Film and TV!</P>
        </Container>
    )
}

export default HomeImage;