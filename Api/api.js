const URL_API = "http://154.38.171.54:3002/priceC"
const myHeader = new Headers{
    'Content.Type': 
}

const postData = (URL_API) => {
    fetch (URL_API, {
        method: 'POST',
        headers: myHeader,
    })
}