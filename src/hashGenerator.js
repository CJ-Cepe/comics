import md5 from "js-md5";

function createHash() {
    const p1K = '5ef35881e84c5178adbdfcd5d2b94e5a';
    const p2K = 'b3ce95a592ec6ec627744bc170d5cdd9b06b071a';
    const ts = Date.now()
    const hash = md5(ts + p2K + p1K);

    return { ts, p1K, hash };
}


async function fetchContent(term = "wolverine", entityTemp){
  const{ts, p1K, hash} = createHash() // generate hash
  const entity = getEntity(entityTemp) // get real entity
  const apiUrl = assembleUrl({ts, p1K, hash, entity, term})
  const response = await fetch(apiUrl)

  if (response.status >= 400) {
    throw new Error("server error");
  }
  
  const data = await response.json()

  return data
}

function getEntity(entity){
  let value
  let key

  switch(entity) {
    case 'title': 
      value = 'comics'
      key = 'title'
      break;
      //https://gateway.marvel.com:443/v1/public/comics?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
      //https://gateway.marvel.com:443/v1/public/comics?noVariants=true&title=captain%20america&apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    case 'character':
      value = 'characters'
      key = 'name'
      break;
      //https://gateway.marvel.com:443/v1/public/characters/1009664/comics?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    case 'event':
      value = 'events'
      break;//
      //https://gateway.marvel.com:443/v1/public/events/227/comics?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    case 'series':
      value = 'series'
      break;
      //https://gateway.marvel.com:443/v1/public/series/31445/comics?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    case 'creator':
      value = 'creators'
      break;
    case 'story':
      value = 'stories'
      break;
      //https://gateway.marvel.com:443/v1/public/stories/7/comics?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    default:
      value = 'comics'
  }

  return value
}

function assembleUrl(data){
  const {ts, p1K, hash, entity, term} = data
  const base = 'http://gateway.marvel.com/v1/public/';
  const limit = '20'
  const offSet = '0'
  const url = `${base}${entity}?limit=${limit}&offset=${offSet}&title=${term}&ts=${ts}&apikey=${p1K}&hash=${hash}`
  console.log(url)

  return url

  /* const apiUrl = `http://gateway.marvel.com/v1/public/comics?limit=20&format=comic&formatType=comic&title=${titleInput}&orderBy=-focDate%2C-onsaleDate&ts=${ts}&apikey=${p1K}&hash=${hash}`; */
}


export default fetchContent