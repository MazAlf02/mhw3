const Cover_Selettore_News = [
    'Images/cs-e-social-door-hanger-cover.jpg',
    'Images/portfolio-review-manga-cover.jpg',
    'Images/nuovedate-news-cover.jpg',
    'Images/comicon-autore-shibatarian-news-cover.jpg',
    'Images/news-cover-pinkheartjam.jpg'
];

const Home_Selettore_News = [
    'Images/cs-e-social-door-hanger-home.jpg',
    'Images/portfolio-review-manga-home.jpg',
    'Images/aggiornamento-date-home-1.jpg',
    'Images/comicon-autore-shibatarian-news-home.jpg',
    'Images/news-home-pinkheartjam.jpg'
];

const Overlay_Selettore_News = [
    'STAR COMICS PRESENTA LA DOOR HANGER COLLECTION',
    'STAR COMICS MANGA PORTFOLIO REVIEW A COMICON 2024',
    'SLITTAMENTI RIGUARDANTI ALCUNE FUTURE USCITE',
    'LA NUOVA PROMESSA DEL MANGA HORROR KATSUYA IWAMURO SARA OSPITE DI STAR COMICS A COMICON NAPOLI 2024',
    'PINK HEART JAM ARRIVA FINALMENTE IN ITALIA'
];

//ULTIME USCITE PAGINA 1

const Ultime_Uscite_Pagina1_Immagini = [
    'Images/witchwatch-6-1200px.jpg',
    'Images/gachiakuta-5-1200px.jpg',
    'Images/shamanking-thesuperstar-5-1200px.jpg',
    'Images/one-piece-107-1200px.jpg'
];

const Ultime_Uscite_Pagina1_Nomi = [
    'WITCH WATCH n.6',
    'GACHIAKUTA n.5',
    'SHAMAN KING THE SUPER STAR n.5',
    'ONE PIECE n.107'
]

const Ultime_Uscite_Pagina1_Date = [
    '02/04/24',
    '02/04/24',
    '02/04/24',
    '02/04/24'
];

const Ultime_Uscite_Pagina1_Prezzi = [
    '€5,90',
    '€5,20',
    '€6,50',
    '€5,20'
];

//ULTIME USCITE PAGINA 2

const Ultime_Uscite_Pagina2_Immagini = [
    'Images/iminlovewiththevillainess-4-1200px.jpg',
    'Images/shikimorisnotjustacutie-5-1200px.jpg',
    'Images/gigantis-5-1200px.jpg',
    'Images/kaguyasama-24-1200px.jpg'
];

const Ultime_Uscite_Pagina2_Nomi = [
    "I'M IN LOVE WITH THE VILLAINES n.4",
    "SHIKIMORI'S NOT JUST A CUTIE n.5",
    'GIGANTIS n.5',
    'KAGUYA-SAMA: LOVE IS WAR n.24'
]

const Ultime_Uscite_Pagina2_Date = [
    '09/04/24',
    '09/04/24',
    '09/04/24',
    '09/04/24'
];

const Ultime_Uscite_Pagina2_Prezzi = [
    '€6,90',
    '€6,50',
    '€6,50',
    '€6,50'
];

//PROSSIME USCITE PAGINA 1

const Prossime_Uscite_Pagina1_Immagini = [
    'Images/shirayukidaicapellirossi-25-1200px.jpg',
    'Images/dragonballultimateedition-24-1200px.jpg',
    'Images/the-boxer-7-1200px.jpg',
    'Images/magicalgirlrisuka-5-1200px.jpg'
];

const Prossime_Uscite_Pagina1_Nomi = [
    'SHIRAYUKI DAI CAPELLI ROSSI n. 25',
    'DRAGON BALL ULTIMATE EDITION n. 24',
    'THE BOXER n. 7',
    'MAGICAL GIRL RISUKA n.5'
]

const Prossime_Uscite_Pagina1_Date = [
    '12/04/24',
    '24/04/24',
    '18/04/24',
    '26/04/24'
];

const Prossime_Uscite_Pagina1_Prezzi = [
    '€5,90',
    '€15,00',
    '€6,50',
    '€5,60'
];

//PROSSIME USCITE PAGINA 2

const Prossime_Uscite_Pagina2_Immagini = [
    'Images/sandland-ultimateedition-1-1200px.jpg',
    'Images/vanishingmyfirstlove-9-1200px.jpg',
    'Images/fungusandiron-4-1200px.jpg',
    'Images/ginka-gluna-2-1200px.jpg'
];

const Prossime_Uscite_Pagina2_Nomi = [
    "SANDLAND ULTIMATE EDITION n. 1",
    "VANISHING MY FIRST LOVE n. 9",
    'FUNGUS AND IRON n. 4',
    'GINKA GLUNA n. 2'
]

const Prossime_Uscite_Pagina2_Date = [
    '16/04/24',
    '16/04/24',
    '16/04/24',
    '16/04/24'
];

const Prossime_Uscite_Pagina2_Prezzi = [
    '€12,00',
    '€5,70',
    '€5,90',
    '€5,60'
];

let intervalloCambioAutomatico;
let prossimoIndice = 0; 

function creaImmagine(src) {
    const immagine = document.createElement('img');
    immagine.src = src;
    return immagine;
  }

function sottolineaIn(event){
    const a = event.currentTarget;
    a.classList.add('sottolinea');
}

function sottolineaOut(event){
    const a = event.currentTarget;
    a.classList.remove('sottolinea');
}

function evidenziaNavIn(event) {
    const a = event.currentTarget;
    const cambiaTesto = a.getAttribute('data-cambiaTesto');
    if (cambiaTesto !== null) {
        const testoOriginale = a.textContent;
        const width = a.offsetWidth;
        a.textContent = cambiaTesto;
        a.style.width = width + 'px';
        a.setAttribute('data-testoOriginale', testoOriginale);
    }
    a.classList.add('nav2bg');
}

function evidenziaNavOut(event) {
    const a = event.currentTarget;
    const testoOriginale = a.getAttribute('data-testoOriginale');
    if (testoOriginale !== null) {
        a.textContent = testoOriginale;
        a.removeAttribute('data-testoOriginale');
    }
    a.classList.remove('nav2bg');
    a.style.width = '';
}

function impostaImmaginePrincipale(i) {
    const immaginePrincipale = document.querySelector('div#immagineprimopiano');
    const overlay = document.querySelector('#overlayannuncio p');
    overlay.textContent = Overlay_Selettore_News[i];
    immaginePrincipale.style.backgroundImage = 'url(' + Home_Selettore_News[i] + ')';
}

function togliOpacita(immagine) {
    const altreImm = document.querySelectorAll('div#selettorenews img');
    for (const img of altreImm){
        img.classList.remove('NoOpaco');
    };
    immagine.classList.add('NoOpaco');
}

function trovaImmagineSuccessiva(indice) {
    const immagini = document.querySelectorAll('div#selettorenews img');
    return immagini[indice];
}

function immagineSuccessiva(){
    prossimoIndice = prossimoIndice + 1;
    if(prossimoIndice >= Cover_Selettore_News.length){
        prossimoIndice = 0;
    }
    impostaImmaginePrincipale(prossimoIndice);
    togliOpacita(trovaImmagineSuccessiva(prossimoIndice));
}

function iniziaCambioAutomatico() {
    intervalloCambioAutomatico = setInterval(immagineSuccessiva, 4000);
}

function resetTimer(){
    clearInterval(intervalloCambioAutomatico);
    iniziaCambioAutomatico();
}

function avviaCambioAutomatico(){
    iniziaCambioAutomatico();
    const selettoreNews = document.querySelectorAll('div#selettorenews img');
    for (const img of selettoreNews) {
        img.addEventListener('click', function() {
            prossimoIndice = Array.from(selettoreNews).indexOf(img);
            impostaImmaginePrincipale(prossimoIndice);
            togliOpacita(img);
            resetTimer();
        });
    }
}

function passaggioMouseIn(event){
    const altriEventiBottone = event.currentTarget;
    altriEventiBottone.classList.add('passaggioMouse');
}

function passaggioMouseOut(event){
    const altriEventiBottone = event.currentTarget;
    altriEventiBottone.classList.remove('passaggioMouse');
}

function evidenziaBottoneIn(event){
    const avantiIndietro = event.currentTarget;
    avantiIndietro.classList.add('avantiIndietroEvidenziato');
}

function evidenziaBottoneOut(event){
    const avantiIndietro = event.currentTarget;
    avantiIndietro.classList.remove('avantiIndietroEvidenziato');
}

function impostaUltimeUscitePagina1(){
    const immagini = document.querySelectorAll('.fumettiUltimeUscite .immFumetto');
    let i = 0;
    for (const imm of immagini){
        imm.innerHTML = '';
        const foto = Ultime_Uscite_Pagina1_Immagini[i];
        const immagine = creaImmagine(foto);
        imm.appendChild(immagine);
        i++;
    }

    const nome = document.querySelectorAll('.fumettiUltimeUscite .nomeFumetto h4');
    i = 0;
    for (const nom of nome){
        nom.textContent = Ultime_Uscite_Pagina1_Nomi[i];
        nom.addEventListener('mouseover', passaggioMouseIn);
        nom.addEventListener('mouseout', passaggioMouseOut);
        i++;
    }

    const data = document.querySelectorAll('.fumettiUltimeUscite .dataFumetto p');
    i = 0;
    for (const dat of data){
        dat.textContent = Ultime_Uscite_Pagina1_Date[i];
        i++;
    }

    const prezzo = document.querySelectorAll('.fumettiUltimeUscite .prezzoFumetto h4');
    i = 0;
    for (const prz of prezzo){
        prz.textContent = Ultime_Uscite_Pagina1_Prezzi[i];
        i++;
    }
}

function impostaUltimeUscitePagina2(){
    const immagini = document.querySelectorAll('.fumettiUltimeUscite .immFumetto');
    let i = 0;
    for (const imm of immagini){
        imm.innerHTML = '';
        const foto = Ultime_Uscite_Pagina2_Immagini[i];
        const immagine = creaImmagine(foto);
        imm.appendChild(immagine);
        i++;
    }

    const nome = document.querySelectorAll('.fumettiUltimeUscite .nomeFumetto h4');
    i = 0;
    for (const nom of nome){
        nom.textContent = Ultime_Uscite_Pagina2_Nomi[i];
        nom.addEventListener('mouseover', passaggioMouseIn);
        nom.addEventListener('mouseout', passaggioMouseOut);
        i++;
    }

    const data = document.querySelectorAll('.fumettiUltimeUscite .dataFumetto p');
    i = 0;
    for (const dat of data){
        dat.textContent = Ultime_Uscite_Pagina2_Date[i];
        i++;
    }

    const prezzo = document.querySelectorAll('.fumettiUltimeUscite .prezzoFumetto h4');
    i = 0;
    for (const prz of prezzo){
        prz.textContent = Ultime_Uscite_Pagina2_Prezzi[i];
        i++;
    }
}


function cambiaPaginaUltimeUscite(event){
    const tasto = event.currentTarget;
    const direzione = tasto.getAttribute('data-moveU');
    const resetFreccia = document.querySelectorAll('[data-moveU]');
    for (const freccia of resetFreccia){
        freccia.classList.remove('avantiIndietroScomparsa');
    }

    if(direzione === 'avanti'){
        impostaUltimeUscitePagina2();
        tasto.classList.add('avantiIndietroScomparsa');
    }else{
        impostaUltimeUscitePagina1();
        tasto.classList.add('avantiIndietroScomparsa');
    }
}

function impostaProssimeUscitePagina1(){
    const immagini = document.querySelectorAll('.fumettiProssimeUscite .immFumetto');
    let i = 0;
    for (const imm of immagini){
        imm.innerHTML = '';
        const foto = Prossime_Uscite_Pagina1_Immagini[i];
        const immagine = creaImmagine(foto);
        imm.appendChild(immagine);
        i++;
    }

    const nome = document.querySelectorAll('.fumettiProssimeUscite .nomeFumetto h4');
    i = 0;
    for (const nom of nome){
        nom.textContent = Prossime_Uscite_Pagina1_Nomi[i];
        nom.addEventListener('mouseover', passaggioMouseIn);
        nom.addEventListener('mouseout', passaggioMouseOut);
        i++;
    }

    const data = document.querySelectorAll('.fumettiProssimeUscite .dataFumetto p');
    i = 0;
    for (const dat of data){
        dat.textContent = Prossime_Uscite_Pagina1_Date[i];
        i++;
    }

    const prezzo = document.querySelectorAll('.fumettiProssimeUscite .prezzoFumetto h4');
    i = 0;
    for (const prz of prezzo){
        prz.textContent = Prossime_Uscite_Pagina1_Prezzi[i];
        i++;
    }
}

function impostaProssimeUscitePagina2(){
    const immagini = document.querySelectorAll('.fumettiProssimeUscite .immFumetto');
    let i = 0;
    for (const imm of immagini){
        imm.innerHTML = '';
        const foto = Prossime_Uscite_Pagina2_Immagini[i];
        const immagine = creaImmagine(foto);
        imm.appendChild(immagine);
        i++;
    }

    const nome = document.querySelectorAll('.fumettiProssimeUscite .nomeFumetto h4');
    i = 0;
    for (const nom of nome){
        nom.textContent = Prossime_Uscite_Pagina2_Nomi[i];
        nom.addEventListener('mouseover', passaggioMouseIn);
        nom.addEventListener('mouseout', passaggioMouseOut);
        i++;
    }

    const data = document.querySelectorAll('.fumettiProssimeUscite .dataFumetto p');
    i = 0;
    for (const dat of data){
        dat.textContent = Prossime_Uscite_Pagina2_Date[i];
        i++;
    }

    const prezzo = document.querySelectorAll('.fumettiProssimeUscite .prezzoFumetto h4');
    i = 0;
    for (const prz of prezzo){
        prz.textContent = Prossime_Uscite_Pagina2_Prezzi[i];
        i++;
    }
}


function cambiaPaginaProssimeUscite(event){
    const tasto = event.currentTarget;
    const direzione = tasto.getAttribute('data-moveP');
    const resetFreccia = document.querySelectorAll('[data-moveP]');
    for (const freccia of resetFreccia){
        freccia.classList.remove('avantiIndietroScomparsa');
    }

    if(direzione === 'avanti'){
        impostaProssimeUscitePagina2();
        tasto.classList.add('avantiIndietroScomparsa');
    }else{
        impostaProssimeUscitePagina1();
        tasto.classList.add('avantiIndietroScomparsa');
    }
}

function apriBarraRicerca(){
    const barraRicerca = document.querySelector('#sezioneRicerca');
    barraRicerca.classList.remove('hidden');
}

function chiudiBarraRicerca(){
    const barraRicerca = document.querySelector('#sezioneRicerca');
    barraRicerca.classList.add('hidden');
}

//Funzioni API MAPPA

function OnResponse(response){
    return response.json();
}

function OnJson(json){
    json.features.forEach(function(marker){
        const coordinates = marker.geometry.coordinates;
        const name = marker.properties.name;

        new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(new mapboxgl.Popup().setHTML('<h3>' + name + '</h3>'))
            .addTo(map);
    })
}

function zoomA(){
    map.zoomIn();
}

function zoomI(){
    map.zoomOut();
}


//Funzioni API Ricerca manga

function onTokenResponse(response) {
    return response.json();
}

function getToken(json) {
    accessToken = json.access_token;
}

function onTokenError(error){
    console.error(error);
}

function onJsonKitsu(json) {
    const manga = json.data[0];
    if (manga) {
        const copertina = document.querySelector('#copertinaRisultati');
        const immagine = creaImmagine(manga.attributes.posterImage.small);
        copertina.innerHTML = '';
        copertina.appendChild(immagine);
        
        const dataRisultati = document.querySelector('#dataRisultati');
        dataRisultati.innerHTML = '';
        const data = document.createElement('h3');
        data.textContent = manga.attributes.startDate;
        dataRisultati.appendChild(data);

        const titoloRisultati = document.querySelector('#titoloRisultati');
        titoloRisultati.innerHTML = '';
        const titolo = document.createElement('h3');
        titolo.textContent = manga.attributes.titles.en;
        titoloRisultati.appendChild(titolo);

        const tramaRisultati = document.querySelector('#tramaRisultati');
        tramaRisultati.innerHTML = '';
        const trama = document.createElement('p');
        trama.textContent = manga.attributes.synopsis;
        tramaRisultati.appendChild(trama);
    } else {
        alert("Manga non trovato!");
    }
}

function onResponseKitsu(response) {
    return response.json();
}

function onErrorKitsu(error){
    console.error(error);
    alert("Si è verificato un errore durante la ricerca del manga.");
}

function ricercaInvio(event){
    if(event.key === 'Enter'){
        cercaManga();
    }
}

function cercaManga() {
    const titolo = document.getElementById('ricercaInput').value;
    fetch(apiURL + '?filter[text]=' + encodeURIComponent(titolo), {
        headers: {
            'Authorization': 'Bearer ' + accessToken
        }
    })
    .then(onResponseKitsu)
    .then(onJsonKitsu)
    .catch(onErrorKitsu);
}


//Main

const nav1 = document.querySelectorAll('a.nav1sel');
for (const a of nav1){
    a.addEventListener('mouseover', sottolineaIn);
    a.addEventListener('mouseout', sottolineaOut);
}

const nav2 = document.querySelectorAll('div#containertastinav2 a');
for (const a of nav2) {
    a.addEventListener('mouseover', evidenziaNavIn);
    a.addEventListener('mouseout', evidenziaNavOut);
}

const selettoreNews = document.querySelector('div#selettorenews');
const overlay = document.querySelector('div#overlayannuncio p');
overlay.textContent = Overlay_Selettore_News[0];
const primaImmBackground = document.querySelector('div#immagineprimopiano');
primaImmBackground.style.backgroundImage = "url(" + Home_Selettore_News[0] + ")";
for (let i = 0; i < Cover_Selettore_News.length; i++) {
    const foto = Cover_Selettore_News[i];
    const immagine = creaImmagine(foto);
    selettoreNews.appendChild(immagine);
}
const primaImmNoOpaca = document.querySelector('div#selettorenews img');
primaImmNoOpaca.classList.add('NoOpaco');

document.addEventListener('DOMContentLoaded', avviaCambioAutomatico);

const avantiIndietroUU = document.querySelectorAll('div.avantiIndietroUltimeUscite');
for (const tasto of avantiIndietroUU){
    tasto.addEventListener('mouseover', evidenziaBottoneIn);
    tasto.addEventListener('mouseover', passaggioMouseIn);
    tasto.addEventListener('mouseout', evidenziaBottoneOut);
    tasto.addEventListener('mouseout', passaggioMouseOut);
    
    tasto.addEventListener('click', cambiaPaginaUltimeUscite);
}

const resetFreccia = document.querySelector('[data-moveU="indietro"]');
resetFreccia.classList.add('avantiIndietroScomparsa');

impostaUltimeUscitePagina1();


const avantiIndietroPU = document.querySelectorAll('div.avantiIndietroProssimeUscite');
for (const tasto of avantiIndietroPU){
    tasto.addEventListener('mouseover', evidenziaBottoneIn);
    tasto.addEventListener('mouseover', passaggioMouseIn);
    tasto.addEventListener('mouseout', evidenziaBottoneOut);
    tasto.addEventListener('mouseout', passaggioMouseOut);
    
    tasto.addEventListener('click', cambiaPaginaProssimeUscite);
}

const resetFreccia2 = document.querySelector('[data-moveP="indietro"]');
resetFreccia2.classList.add('avantiIndietroScomparsa');

impostaProssimeUscitePagina1();


const notizie = document.querySelectorAll('.notizia1 h4');
for (const not of notizie){
    not.addEventListener('mouseover', passaggioMouseIn);
    not.addEventListener('mouseout', passaggioMouseOut);
}
const infoFooter = document.querySelectorAll('footer a');
for (const inf of infoFooter){
    inf.addEventListener('mouseover', passaggioMouseIn);
    inf.addEventListener('mouseout', passaggioMouseOut);
}

const altriEventiBottone = document.querySelector('div#tasto p');
altriEventiBottone.addEventListener('mouseover', passaggioMouseIn);
altriEventiBottone.addEventListener('mouseout', passaggioMouseOut);


const tastoLente = document.querySelector('a#tastoLente');
tastoLente.addEventListener('click', apriBarraRicerca);

const tastoChiudiBarraRicerca = document.querySelector('p#chiudiRicerca');
tastoChiudiBarraRicerca.addEventListener('click', chiudiBarraRicerca);


//API Mappa punti vendita

const mapbox = "https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js";
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxmcmVkMjQwOSIsImEiOiJjbHZyNTRnZG8wb2pyMnFxenZlZnhqbG81In0.j0_ZqH_3Vl1-WTHPPL9vdw';
const map = new mapboxgl.Map({
    container: 'mappa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [12.5674, 41.8719],
    zoom: 5
  });


fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/star-shop.json?country=IT&access_token=' + mapboxgl.accessToken).then(OnResponse).then(OnJson);

map.scrollZoom.disable();

const zoomAvanti = document.querySelector('#zoomAvanti');
zoomAvanti.addEventListener('click', zoomA);
const zoomIndietro = document.querySelector('#zoomIndietro');
zoomIndietro.addEventListener('click', zoomI);


//API Ricerca manga


const clientID = '';
const clientSecret = '';
const accessTokenURL = 'https://kitsu.io/api/oauth/token';
const apiURL = 'https://kitsu.io/api/edge/manga';

let accessToken;

    
fetch(accessTokenURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'grant_type': 'client_credentials',
        'client_id': clientID,
        'client_secret': clientSecret
    })
})
.then(onTokenResponse)
.then(getToken)
.catch(onTokenError);

const avviaRicerca = document.querySelector('#avviaRicerca');
avviaRicerca.addEventListener('click', cercaManga);

const ricercaInput = document.querySelector('#ricercaInput')
ricercaInput.addEventListener('keypress', ricercaInvio);


  



