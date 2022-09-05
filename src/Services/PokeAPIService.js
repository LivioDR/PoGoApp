const getImageLink = (pkmnNumber, shinyOn = false, tier = "", form = "") => {
    if(shinyOn)
        shinyOn = "shiny/"
    else
        shinyOn = ""

    if(tier === "mega")
        pkmnNumber += `-mega`
    if(form !== "Normal" && tier === "mega")
        pkmnNumber += `-${form.toLowerCase()}`

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${shinyOn}${pkmnNumber}.png`
}
export {getImageLink}

const getFlavorText = async(id,lang = "en") => {
    let allFlavors = []
    
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    .then(res => res.json())

    allFlavors = request.flavor_text_entries

    for(let i=allFlavors.length-1; i>=0; i--){
        if(allFlavors[i].language.name === lang)
        {
            return allFlavors[i].flavor_text
        }
    }
}
export {getFlavorText}

const getNameById = async(id, lang="es") => {
    try{
        const fullData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`,{method:'GET',headers:{'Content-type':'application/json'}})
        .then(response => response.json());

        for(let i=0; i<fullData.names.length; i++){
            if(fullData.names[i].language.name === lang)
                return fullData.names[i].name
        }            
    }
    catch(e){
        console.log("getNameById error: ",e)
    }
} 
export {getNameById}