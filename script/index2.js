const apiPhrase = async () => {
    const response = await fetch('https://api.adviceslip.com/advice', {
        method: 'GET'
    });
    const JSON = await response.json();
    const {
        advice
    } = JSON.slip;
    console.log(advice);
    console.log(JSON);
    return advice;
};

const apiImg = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET'
    })
    const JSON = await response.json();
    const {
        url
    } = JSON[0];
    console.log(JSON[0])
    return url;
}

const printInfo = (url, advice) => {
    const paragraph = document.getElementById('p');
    paragraph.innerHTML = `"${advice}"`;
    console.log(advice);

    document.getElementById('img').src = url;
    console.log(url);
    console.log("url", url);
};

const button = document.getElementById('btn')

button.addEventListener("click", listner = async () =>{
    const url =  await apiImg();
    const advice =  await apiPhrase();
    printInfo(url, advice);
});

