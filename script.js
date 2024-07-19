const button = document.getElementById('get-location-button')

async function getData(lati, long){
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=1c2fc8e96a7d42bc93e115325241807&q=${lati},${long}&aqi=yes`
    )
    return await promise.json()
}

//---Got current location code---
async function gotLocation(position){
    const result = await getData(position.coords.latitude,position.coords.longitude)
     console.log(result)
}
function failedToGet(){
    console.log('There was some issue')
}
button.addEventListener('click', async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)  //2 parameters -> success callBAck, ErrorCallBack
})