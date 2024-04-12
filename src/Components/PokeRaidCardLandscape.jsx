import React, { useEffect, useState } from "react"
import { getFlavorText, getImageLink, getNameById } from "../Services/PokeAPIService"
import {Card,Button,Col,Row,ProgressBar} from 'react-bootstrap'
import TypeBadge from './TypeBadges'
import { getCandyDistanceById, getMegaPokemonStatsById, getPokemonStatsById, getShinyRaidById } from "../Services/PogoService"

const PokeRaidCardLandscape = (props) => {

  // console.log("All info received by PokeCard: ",props.pokeInfo)

    const [shinyOn, setShinyOn] = useState(false)
    const [flavorText, setFlavorText] = useState("")
    const [loadingFlavor,setLoadingFlavor] = useState(true)
    const [shinyAvailable, setShinyAvailable] = useState(false)
    const [name, setName] = useState(props.pokeInfo.name)
    const [lang, setLang] = useState(props.lang)
    const [candyDistance, setCandyDistance] = useState()
    const [pkmnStats,setPkmnStats] = useState({})

    const id = props.pokeInfo.id
    const type = props.pokeInfo.type
    const form = props.pokeInfo.form
    const tier = props.pokeInfo.tier
    const imgLink = getImageLink(id,shinyOn,tier,form)

    useEffect(()=>{
        const requestFlavorAPI = async() => {
          try{
            const dexDescriptionRequest = await getFlavorText(id,lang)
            const nameLang = await getNameById(id,lang)
            const askShinyAble = await getShinyRaidById(id)
            const askCandies = await getCandyDistanceById(id)
            let askStats = {}
            if(tier === 'mega' || tier === 'mega_legendary')
              askStats = await getMegaPokemonStatsById(id,form)
            else
              askStats = await getPokemonStatsById(id)
            setFlavorText(dexDescriptionRequest)
            setName(nameLang)
            setShinyAvailable(askShinyAble)
            setCandyDistance(askCandies)
            setPkmnStats(askStats)
            setLoadingFlavor(false)    
          }
          catch(e){
            console.log("Error PokeRaidCard:",e)
          }
        }
        requestFlavorAPI()
    },[id,setFlavorText,lang,form,tier])

    const toggleShiny = () => {
        if(shinyOn)
            setShinyOn(false)
        else
            setShinyOn(true)
    }


    return(
      <Col xs={12}>
        <Card style={{ width: '100%', 'marginBottom': '10%', 'paddingBottom': '5%' }} className="text-center">
          <Row>
            <Col xs={6}>
              <Card.Body>
                <Row>
                  <Col xs={8} className="text-start">
                    <Card.Title>{tier==="mega"? "Mega-" : ""}{name} {form==="Normal"?"":form}</Card.Title>
                  </Col>
                  <Col xs={4} className="text-end text-muted">
                    <Card.Subtitle className="mb-2">{tier==="mega"? "Mega" : tier === "mega_legendary"? "Mega" : tier+"*"}</Card.Subtitle>
                  </Col>
                </Row>
                <Card.Subtitle>{type.map(type=><TypeBadge key={id+type} type={type}/>)}</Card.Subtitle>
                <img src={imgLink} alt={name}></img>
                <Card.Text className="text-start text-justify">
                  {loadingFlavor ? "Cargando..." : flavorText}
                </Card.Text>
                </Card.Body>
              </Col>
              <Col xs={6}>
                <Card.Body>
                <Row style={{'padding':'10%'}}>
                  <Card.Subtitle>{lang==='en'?'Stats':lang==='es'?'Estadísticas':'Statistiques'}</Card.Subtitle>
                  <Col xs={12}>
                      ATK<ProgressBar variant="danger" label={pkmnStats.atk} now={pkmnStats.atk/pkmnStats.max*100} />
                      DEF<ProgressBar variant="info" label={pkmnStats.def} now={pkmnStats.def/pkmnStats.max*100} />
                      HP <ProgressBar variant="success" label={pkmnStats.hp} now={pkmnStats.hp/pkmnStats.max*100} />
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Button onClick={toggleShiny} disabled={shinyAvailable? false : true} variant={shinyOn? "danger" : "primary"}>{lang==='es'?'Variocolor':lang==='fr'?'Chromatique':'Shiny'}</Button>
                  </Col>
                <Col xs={4} className="text-end">
                  {!loadingFlavor ? (lang === 'en' ? Math.round(candyDistance*0.62*100)/100+" Mi": candyDistance+" Km") : "Cargando..."}
                </Col>
                <Col xs={2} className="text-start">
                  <img src="https://cdn-icons-png.flaticon.com/128/188/188971.png" height={"16px"} width={"16px"} alt="Icono caramelo"/>
                </Col>
                </Row>
              </Card.Body>
                <Row>
                  <Col xs={4} className="p text-end">
                      <Button as={'img'} onClick={()=>{setLang("es");}} src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png" height={"75%"}/></Col>
                  <Col xs={4} className="p text-center">
                      <Button as={'img'} onClick={()=>{setLang("fr");}} src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-france2x.png" height={"75%"}/></Col>
                  <Col xs={4} className="p text-start">
                      <Button as={'img'} onClick={()=>{setLang("en");}} src="https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png" height={"75%"}/>
                  </Col>
                </Row>
              </Col>
            </Row>
        </Card>
      </Col>
    )
}
export default PokeRaidCardLandscape