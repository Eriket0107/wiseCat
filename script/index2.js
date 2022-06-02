// const body = document.getElementById('img-phrases'); 
window.addEventListener("load", function Listener() {
    setTimeout(() => {
        apiPhrase()
    }, 750);
    apiImg();
});

const apiPhrase = async () => {
    const response = await fetch('https://api.adviceslip.com/advice', {
        method: 'GET'
    })
    const JSON = await response.json();
    const {
        advice
    } = JSON.slip;
    const paragraph = document.getElementById('p');
    paragraph.innerHTML = `"${advice}"`;
    console.log(advice);
    console.log(JSON)
};

const apiImg = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET'
    })
    const JSON = await response.json();
    const {
        url
    } = JSON[0];
    document.getElementById('img').src = url;
    console.log(JSON[0])
}

const button = document.getElementById('btn')
button.addEventListener('click', () => {
    location.href = './index2.html'
})
// <onerror="this.onerror=null; this.src='./wisegoat/imgs/bodezinho.png>