const BASE_URL = 'https://api.waifu.im/search?is_nsfw=true&many=true&gif=true'


async function searchAnime() {
    let json = await getJson(BASE_URL);
    let ele = document.getElementById("output").style = " animation: none ";

    json.images.forEach(ivalue => {
        console.log("🚀 ~ file: main.js:8 ~ searchAnime ~ ivalue:", ivalue)
        let ele = document.getElementById("output");
        ele.innerHTML += `<img src="${ivalue.url}" >`;
    });
}


async function getJson(url) {
    // fetch(url)
    // .then( (lsdk) => {
    //     lsdk.json()
    //     .then( res => {
    //         console.log(res);
    //     })
    // })

    let res = await fetch(url);
    let resJson = await res.json();

    return resJson;
}