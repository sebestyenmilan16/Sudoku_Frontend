export default async function handler(req, res) {
    
const ninjaapikey = process?.env?.NINJA_API_KEY || ''
    const diff = "medium"
    const width = 3
    const height = 3
    const json = await fetch(`https://api.api-ninjas.com/v1/sudokugenerate?difficulty=${diff}&width=${width}&height=${height}`, {
        method: 'GET',
        headers: {
            'X-Api-Key' : ninjaapikey
        }
        
    })
    console.log('json', json)
    if (json.ok) {
        const data = await json.json()
        console.log(data);
        return res.status(200).json(data)
    }
    else {
        console.warn(json)
        return res.status(400).json(json)
    }

}