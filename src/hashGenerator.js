import md5 from "js-md5";

function createHash() {
    const p1K = '5ef35881e84c5178adbdfcd5d2b94e5a';
    const p2K = 'b3ce95a592ec6ec627744bc170d5cdd9b06b071a';
    const ts = Date.now()
    const hash = md5(ts + p2K + p1K);

    return { ts, p1K, hash };
}


async function fetchContent(titleInput = "wolverine"){
  const{ts, p1K, hash} = createHash()
  const apiUrl = `http://gateway.marvel.com/v1/public/comics?limit=20&format=comic&formatType=comic&title=${titleInput}&orderBy=-focDate%2C-onsaleDate&ts=${ts}&apikey=${p1K}&hash=${hash}`;

  const response = await fetch(apiUrl)

  if (response.status >= 400) {
    throw new Error("server error");
  }
  
  const data = await response.json()

  return data
}


export default fetchContent