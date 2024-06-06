import React from "react";
import { Col, Row, Button } from "react-bootstrap";

const LangSelect = ({setLang}) => {
    return(
        <Row xs={4} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <Col xs={4} className="p text-end">
                <Button as={'img'} onClick={()=>{setLang("es");}} src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png" height={"75%"}/></Col>
            <Col xs={4} className="p text-center">
                <Button as={'img'} onClick={()=>{setLang("fr");}} src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-france2x.png" height={"75%"}/></Col>
            <Col xs={4} className="p text-start">
                <Button as={'img'} onClick={()=>{setLang("en");}} src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png" height={"75%"}/>
            </Col>  
        </Row>
    )
}
export default LangSelect