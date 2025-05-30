// variable

const OvenGeluidje = document.getElementById("OvenGeluidje");
const sound = new Audio("oven-timer-complete.mp3");

const h4knop = document.querySelector("h4");
const h2 = document.querySelector("h2"); 

const paprikaKnop = document.querySelector("#a");
const tomaatKnop = document.querySelector("#b");
const champignonKnop = document.querySelector("#c");
const hamKnop = document.querySelector("#d");
const ananasKnop = document.querySelector("#e");
const pepperoniKnop = document.querySelector("#f");

const paprikaVakje = document.querySelector("#vak1");
const tomaatVakje = document.querySelector("#vak2");
const champignonVakje = document.querySelector("#vak3");
const hamVakje = document.querySelector("#vak4");
const ananasVakje = document.querySelector("#vak5");
const pepperoniVakje = document.querySelector("#vak6");

const tijdKlok = document.querySelector("#tijdKlok");
let aantalSeconden = 10;

let soortpizza = ["Maak een pizza met Ananas en pepperoni","Maak een pizza met Ham en Tomaat","Maak een pizza met champignons en pepperoni","Maak een pizza met paprika en Tomaat"];
let randompizza = Math.floor(Math.random()*4);
h2.textContent = soortpizza[randompizza]; // eerst word gekeken naar "soort pizza" daarna naar "random pizza"

let timer;

// functions

// voor deze functies hieronder die verbonden zijn met konst knop en const vakje heeft de student assistent geholpen met het uitleggen hoe ik het handig kon aanpakken
function veranderPaprikaVakje(){
    paprikaVakje.src= "images/VakjeMetVinkje.png";
    plaatjePaprika.classList.toggle("hidden");
    paprikaKnop.classList.add("geklickt")
}

function veranderTomaatVakje(){
    tomaatVakje.src= "images/VakjeMetVinkje.png";
    plaatjeTomaat.classList.toggle("hidden");
    tomaatKnop.classList.add("geklickt")
}

function veranderChampignonVakje(){
    champignonVakje.src= "images/VakjeMetVinkje.png";
    plaatjeChampignon.classList.toggle("hidden");
    champignonKnop.classList.add("geklickt")
}

function veranderHamVakje(){
    hamVakje.src= "images/VakjeMetVinkje.png";
    plaatjeHam.classList.toggle("hidden");
    hamKnop.classList.add("geklickt")
}

function veranderAnanasVakje(){
    ananasVakje.src= "images/VakjeMetVinkje.png";
    plaatjeAnanas.classList.toggle("hidden");
    ananasKnop.classList.add("geklickt")
}

function veranderPepperoniVakje(){

    pepperoniVakje.src= "images/VakjeMetVinkje.png";
    plaatjePepperoni.classList.toggle("hidden");
    pepperoniKnop.classList.add("geklickt")
}

function aftellen(){

    aantalSeconden--;
    // kan ook als aantalseconden = aantalseconden - 1

    if(aantalSeconden === -1){   // pizza word na 0 of te wel -1 "pizza is klaar"
        clearInterval(timer);
        tijdKlok.textContent = "je pizza is klaar";
    } else {
        tijdKlok.textContent = aantalSeconden;
    }
}

function startMusic() {
    sound.play();   // zorgt ervoor dat de muziek gaat spelen
};

function startKnop(){
    timer = setInterval(aftellen, 1000);  // aftellen vanaf 10 naar 0
    setTimeout(startMusic, 9000);   // muziekje start pas na 9 sec
};

paprikaKnop.addEventListener("click", veranderPaprikaVakje);
tomaatKnop.addEventListener("click", veranderTomaatVakje);
champignonKnop.addEventListener("click", veranderChampignonVakje);
hamKnop.addEventListener("click", veranderHamVakje);
ananasKnop.addEventListener("click", veranderAnanasVakje);
pepperoniKnop.addEventListener("click", veranderPepperoniVakje);   // zorgt ervoor dat wanneer je er op clickt het plaatje veranderd 

h4knop.addEventListener("click", startKnop);

// alle linkjes van alle plaatjes
    //https://www.google.com/imgres?q=plakjes%20ananas&imgurl=https%3A%2F%2Fwww.groentehal.nl%2Fapp%2Fuploads%2F2020%2F10%2Fananas.jpg&imgrefurl=https%3A%2F%2Fwww.groentehal.nl%2Fproduct%2Fananas-blokjes-per-200-gram%2F&docid=iAGJwCpdGN4yQM&tbnid=TV0YFrRgtL1UlM&vet=12ahUKEwjB37vbn8GNAxXYiP0HHRcWMFsQM3oFCIEBEAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwjB37vbn8GNAxXYiP0HHRcWMFsQM3oFCIEBEAA
    //https://www.google.com/imgres?q=ham%20plakjes&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Fgratis-fotos%2Ft1%2F36515327-heerlijk-vers-ham-besnoeiing-in-ronde-plakjes-met-zout-specerijen-en-kruiden-foto.jpg&imgrefurl=https%3A%2F%2Fnl.vecteezy.com%2Ffoto%2F11043021-plakjes-gekookte-ham&docid=lvSHu-6Uek6ElM&tbnid=JfuAnVgsABb8XM&vet=12ahUKEwijzMDZncGNAxWynf0HHX3iF-4QM3oFCIMBEAA..i&w=599&h=400&hcb=2&ved=2ahUKEwijzMDZncGNAxWynf0HHX3iF-4QM3oFCIMBEAA
    //https://www.google.com/imgres?q=plakjes%20champignon&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpsd-gratis%2Fbovenaanzicht-op-heerlijke-plakjes-champignons_23-2150118056.jpg&imgrefurl=https%3A%2F%2Fnl.freepik.com%2Fpsd-gratis%2Fbovenaanzicht-op-heerlijke-plakjes-champignons_37294916.htm&docid=IY656Ms0P-FtsM&tbnid=RGyrKhoFQL-0_M&vet=12ahUKEwi-uq_Pn8GNAxWSg_0HHZaQMvcQM3oECFQQAA..i&w=626&h=470&hcb=2&ved=2ahUKEwi-uq_Pn8GNAxWSg_0HHZaQMvcQM3oECFQQAA
    //https://www.google.com/imgres?q=paprika%20blokjes&imgurl=https%3A%2F%2Fardo.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fteaser_square_xs%2Fpublic%2Fattachments%2FPRB.jpg%3Fh%3D8165685c%26itok%3Dhzieg4IF&imgrefurl=https%3A%2F%2Fardo.com%2Fnl-be%2Fproducten%2Fgroenten%2Fpaprikablokjes-rood-0&docid=SQqIjTM3AjHxgM&tbnid=qBm-_0DRGv5NyM&vet=12ahUKEwicpLuGn8GNAxUknf0HHXkMA0MQM3oECG4QAA..i&w=450&h=450&hcb=2&ved=2ahUKEwicpLuGn8GNAxUknf0HHXkMA0MQM3oECG4QAA
    //https://www.google.com/imgres?q=%20plakjes%20tomaat%20&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fclose-up-van-tomatensnijden-tegen-een-witte-achtergrond_1048944-16431009.jpg%3Fsemt%3Dais_hybrid%26w%3D740&imgrefurl=https%3A%2F%2Fnl.freepik.com%2Fvrije-foto-vectoren%2Fplakjes-tomaat&docid=QcQlbJ3PaamRzM&tbnid=vZMSayaRPAy0ZM&vet=12ahUKEwiFzve-n8GNAxX-lP0HHRMHFPIQM3oECEQQAA..i&w=740&h=740&hcb=2&ved=2ahUKEwiFzve-n8GNAxX-lP0HHRMHFPIQM3oECEQQAA
    //https://www.google.com/imgres?q=pepperoni&imgurl=https%3A%2F%2Fwww.thespruceeats.com%2Fthmb%2FDM4rZiaAGNEV5M4TSfC2NRK0nNI%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Fwhat-is-pepperoni-5077654-still-life-05c26ca198f045579181b7e680d4cf58.jpg&imgrefurl=https%3A%2F%2Fwww.thespruceeats.com%2Fwhat-is-pepperoni-5077654&docid=n750oG157PZrkM&tbnid=aa5omIYH5NVi5M&vet=12ahUKEwjiyrjRocGNAxXRgv0HHcLXBtQQM3oECGkQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwjiyrjRocGNAxXRgv0HHcLXBtQQM3oECGkQAA