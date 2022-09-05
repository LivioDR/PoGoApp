import React from 'react'
import {Container,Navbar} from 'react-bootstrap'

const Menu = () => {
    return(
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    {/* <img
                    alt="Pokeball icon logo"
                    src="../../Public/NavBarIcon.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    /> */}
                    {" "}Pogo App
                </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}
export default Menu