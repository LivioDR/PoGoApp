import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import LangSelect from './LangSelection'

const Menu = ({setLang}) => {

    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                    alt="Pokeball icon logo"
                    src="/NavBarIcon.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />
                    {" "}Pogo App
                </Navbar.Brand>
                <LangSelect setLang={setLang}/>
            </Container>
        </Navbar>
        </>
    )
}
export default Menu