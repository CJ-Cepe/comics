import md5 from "js-md5";

function createHash() {
    const p1K = '5ef35881e84c5178adbdfcd5d2b94e5a';
    const p2K = 'b3ce95a592ec6ec627744bc170d5cdd9b06b071a';
    const ts = Date.now()
    const hash = md5(ts + p2K + p1K);

    return { ts, p1K, hash };
}




function getEntity(entity){
  let value
  let key

  switch(entity) {
    case 'comics': 
      value = 'comics'
      key = 'title'
      break;
      //https://gateway.marvel.com:443/v1/public/comics?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
      //https://gateway.marvel.com:443/v1/public/comics?noVariants=true&title=captain%20america&apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    case 'characters':
      value = 'characters'
      key = 'name'
      break;
      //https://gateway.marvel.com:443/v1/public/characters/1009664/comics?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    case 'events':
      value = 'events'
      break;//
      //https://gateway.marvel.com:443/v1/public/events/227/comics?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    default:
      value = 'comics'
  }

  return value
}

function assembleUrl(data){
  const {ts, p1K, hash, entity, term, id} = data
  const base = 'http://gateway.marvel.com/v1/public/';
  const limit = '20'
  const offSet = '0'
  
  if(entity === "comics"){
    return `${base}${entity}?limit=${limit}&offset=${offSet}&title=${term}&ts=${ts}&apikey=${p1K}&hash=${hash}`
  } else {
    return `${base}${entity}/${id}/comics/?ts=${ts}&apikey=${p1K}&hash=${hash}`
  }

  /* const apiUrl = `http://gateway.marvel.com/v1/public/comics?limit=20&format=comic&formatType=comic&title=${titleInput}&orderBy=-focDate%2C-onsaleDate&ts=${ts}&apikey=${p1K}&hash=${hash}`; */
}

import chJson from "./jsons/characters.json"
import evJson from "./jsons/events.json"

function getId(entity, term){

  if(entity === "characters"){
    console.log("Spider-man")
    console.log(term, " - ", chJson[term])
    return chJson[term]
  } else if(entity === "events"){
    console.log(term, " - ",evJson[term])
    return evJson[term]
  }
}

async function fetchContent(term = "wolverine", entityTemp){
  console.log("PRE-ENTITY: ", entityTemp)
  const{ts, p1K, hash} = createHash() // generate hash
  const entity = getEntity(entityTemp) // get real entity
  console.log("ENTITY: ", entity)
  const id = getId(entity, term) //get corres ID if entity is character or event 
  
  //pass entity to assembleUrl
  const apiUrl = assembleUrl({ts, p1K, hash, entity, term, id})
  const response = await fetch(apiUrl, {
    method: 'GET',    
      withCredentials: true,    
      crossorigin: true,    
      mode: 'cors',
  })
  console.log(response)

  if (response.status >= 400) {
    throw new Error("server error");
  }
  
  const data = await response.json()

  return data
}

export default fetchContent

//handle small cases
//handle ()
//handle non found 