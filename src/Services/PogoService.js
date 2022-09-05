const baseUrl = "https://pogoapi.net"

const getPokemonList = async() => {
    try{
        const request = fetch(`${baseUrl}/api/v1/pokemon_names.json`)
        .then(res => res.json())
        return request
    }
    catch(e){
        return e
    }
}
export {getPokemonList}

const getReleasedPokemonList = async() => {
    const request = fetch(`${baseUrl}/api/v1/released_pokemon.json`)
    .then(res => res.json())
    return request
}
export {getReleasedPokemonList}

const getShinyRaidById = async(id) => {

    const request = await fetch(`${baseUrl}/api/v1/shiny_pokemon.json`)
    .then(res => res.json())

    if(!request.hasOwnProperty(id))
        return false
    else
        if(!request[id].hasOwnProperty('found_raid'))
            return false
        else
            return request[id]["found_raid"]
}
export {getShinyRaidById}

const getPokemonStatsById = async(id) => {
   
    const request = await fetch(`${baseUrl}/api/v1/pokemon_stats.json`)
    .then(res => res.json())

    let max = 0
    let pkmnStats = {}

    for(let i=0; i<request.length; i++){
        if(request[i].base_stamina > max)
            max = request[i].base_stamina
        if(request[i].base_attack > max)
            max = request[i].base_attack
        if(request[i].base_defense > max)
            max = request[i].base_defense
        if(request[i].pokemon_id === id){
            pkmnStats = {
                hp: request[i].base_stamina,
                atk: request[i].base_attack,
                def: request[i].base_defense,
            }
        }
    }
    pkmnStats.max = max

    return pkmnStats
}
export {getPokemonStatsById}

const getMegaPokemonStatsById = async(id, form) => {
    const request = await fetch(`${baseUrl}/api/v1/mega_pokemon.json`)
    .then(res => res.json())

    let max = 0

    let pkmnStats = {}

    for(let i=0; i<request.length; i++){
        if(request[i].stats.base_stamina > max)
            max = request[i].stats.base_stamina
        if(request[i].stats.base_attack > max)
            max = request[i].stats.base_attack
        if(request[i].stats.base_defense > max)
            max = request[i].stats.base_defense
        if(request[i].pokemon_id === id && request[i].form === form){
            pkmnStats = {
                hp: request[i].stats.base_stamina,
                atk: request[i].stats.base_attack,
                def: request[i].stats.base_defense,
            }
        }
    }
    pkmnStats.max = max

    return pkmnStats
}
export {getMegaPokemonStatsById}

const getCandyDistanceById = async(id) => {

    const request = await fetch(`${baseUrl}/api/v1/pokemon_buddy_distances.json`)
    .then(res => res.json())

    for( let [keys,values] of Object.entries(request)){
        for(let i=0; i<request[keys].length; i++){
            if(values[i].pokemon_id === id){
                return values[i].distance
            }
        }
    }   
    return 'N/A'
}
export {getCandyDistanceById}

const getRaidBosses = async() => {

   try{
    const request = await fetch(`${baseUrl}/api/v1/raid_bosses.json`)
    .then(res => res.json())

    let arrayOfBosses = []
    arrayOfBosses.push(Object.entries(request["current"]["1"]))
    arrayOfBosses.push(Object.entries(request["current"]["2"]))
    arrayOfBosses.push(Object.entries(request["current"]["3"]))
    arrayOfBosses.push(Object.entries(request["current"]["4"]))
    arrayOfBosses.push(Object.entries(request["current"]["5"]))
    arrayOfBosses.push(Object.entries(request["current"]["mega"]))
    arrayOfBosses.push(Object.entries(request["current"]["mega_legendary"]))

    return arrayOfBosses
   }
   catch(e){
    return e
   }
}
export {getRaidBosses}