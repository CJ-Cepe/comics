/*
Script to extract data from the api 
    and generate a lookup json for it

 1. setup hash
 2. setup link
 3. fetch all
 4. extract name + id
 5. export to json
*/

import md5 from "js-md5";
import fs from "fs"

function createHash() {
    const p1K = '5ef35881e84c5178adbdfcd5d2b94e5a';
    const p2K = 'b3ce95a592ec6ec627744bc170d5cdd9b06b071a';
    const ts = Date.now()
    const hash = md5(ts + p2K + p1K);

    return { ts, p1K, hash };
}

function generateUrl(entity, offSet='0'){
    console.log("OFFSET: ", offSet)
    const {ts, p1K, hash} = createHash()
    const base = 'http://gateway.marvel.com/v1/public/';
    const limit = '100'
    const url = `${base}${entity}?limit=${limit}&offset=${offSet}&ts=${ts}&apikey=${p1K}&hash=${hash}`
    //https://gateway.marvel.com:443/v1/public/characters?apikey=5ef35881e84c5178adbdfcd5d2b94e5a
    return url
}

    const{ts, p1K, hash} = createHash() // generate hash
    const entities = ["characters", "events"] //stories, series, creators, 

    entities.forEach(async (entity) => {
        //initial fetch to get total
            let apiUrl = generateUrl(entity)
            let response = await fetch(apiUrl)
            let data = await response.json()
            const {data: {total}} = data

        let repeatTimes = Math.trunc(total / 100) + 1
        let offSet = 0;
        let finalObj = {} //store key: id
        let completeResults = []    //store array of objs
        console.log("TOTAL: ", total)
        console.log("REPEAT: ", repeatTimes)
        let i = 0;

        //repeated fetch
        while(repeatTimes > 0){
            console.log("repeat: ", i)
            apiUrl = generateUrl(entity, offSet)
            response = await fetch(apiUrl)
            data = await response.json()
            let {data: {results}} = data
            completeResults = [...completeResults, ...results]
            --repeatTimes
            offSet += 100
            ++i
        }
            
        completeResults.forEach((result)=>{
            if(entity === 'events'){
                finalObj[result.title] = result.id
            } else if (entity === 'characters'){
                finalObj[result.name] = result.id
            }
        })

        //"null, 2" arguments add line breaks and indentation to make the JSON more readable
        let json = JSON.stringify(finalObj, null, 2);

        fs.writeFile(`${entity}.json`, json, (err) => {
            if (err) throw err;
            console.log('Data written to file');
        });
    })


