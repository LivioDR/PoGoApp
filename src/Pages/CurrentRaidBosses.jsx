import React,{useState,useEffect} from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import PokeRaidCard from "../Components/PokeRaidCard";
import PokeRaidCardLandscape from "../Components/PokeRaidCardLandscape"
import { getRaidBosses } from "../Services/PogoService";

const CurrentRaidBosses = ({lang}) => {

    const [raidInfoObject, setRaidInfoObject] = useState([])
    const [loading, setLoading] = useState(true)
    const [viewportSize,setViewportSize] = useState(window.visualViewport.width)
    const [isLandscape, setIsLandscape] = useState(window.visualViewport.width > window.visualViewport.height ? true : false)

    const viewport = window.visualViewport;
    function resizeHandler() 
    {
        setViewportSize(viewport.width)
        setIsLandscape(window.visualViewport.width > window.visualViewport.height ? true : false)
    }
    window.visualViewport.addEventListener('resize', resizeHandler);

    useEffect(()=> {
        const askForInfo = async () =>{
            try{
                const request = await getRaidBosses()
                setRaidInfoObject(request)
                setLoading(false)
            }
            catch(e){
                console.log("error",e)
            }}
        askForInfo()
    },[])

    if(loading)
        return(
            <div>Cargando...</div>
        )
    else
    return(
        <Container>
            <Row>
                <Col className="h2 text-center mb-1 mt-2">
                    {lang === 'es' ? "Jefes de incursiones actuales": lang === 'fr' ? "Boss de raid actuels" : "Current raid bosses"}
                </Col>
            </Row>
            <Row>
            {   
                    viewportSize < 1024 &&
                    !isLandscape &&
                    <Carousel>
                        {raidInfoObject.map(tiers=>tiers.map(pokemon=><Carousel.Item><PokeRaidCard pokeInfo={pokemon[1]} lang={lang} key={pokemon[1].id}/></Carousel.Item>))}
                    </Carousel>
                }
                {   
                    viewportSize < 1024 &&
                    isLandscape &&
                    <Carousel>
                        {raidInfoObject.map(tiers=>tiers.map(pokemon=><Carousel.Item><PokeRaidCardLandscape pokeInfo={pokemon[1]} lang={lang} key={pokemon[1].id}/></Carousel.Item>))}
                    </Carousel>
                }
                {
                    viewportSize >= 1024 &&
                    raidInfoObject.map(tiers=>tiers.map(pokemon=><PokeRaidCard pokeInfo={pokemon[1]} lang={lang} key={pokemon[1].id}/>))
                }
            </Row>
        </Container>
    )
}

export default CurrentRaidBosses