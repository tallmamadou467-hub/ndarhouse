/*====================================
      NGOM-IMMO
      script.js
====================================*/

// ======================
// MENU MOBILE
// ======================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}

// ======================
// HEADER AU SCROLL
// ======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// ======================
// NAVIGATION ENTRE PAGES
// ======================

function goTo(page) {

    window.location.href = page;

}

// ======================
// FAVORIS
// ======================

let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

function ajouterFavori(id) {

    if (!favoris.includes(id)) {

        favoris.push(id);

        localStorage.setItem("favoris", JSON.stringify(favoris));

        alert("Bien ajouté aux favoris.");

    } else {

        alert("Ce bien est déjà dans vos favoris.");

    }

}

function supprimerFavori(id){

    favoris = favoris.filter(item => item !== id);

    localStorage.setItem("favoris", JSON.stringify(favoris));

    location.reload();

}

// ======================
// RECHERCHE
// ======================

const recherche = document.getElementById("searchInput");

if(recherche){

recherche.addEventListener("keyup", function(){

const valeur = this.value.toLowerCase();

const cartes = document.querySelectorAll(".card");

cartes.forEach(card=>{

const texte = card.innerText.toLowerCase();

card.style.display = texte.includes(valeur)
? "block"
: "none";

});

});

}

// ======================
// FILTRES
// ======================

function filtrerBiens(){

const type=document.getElementById("type");

const ville=document.getElementById("ville");

const prix=document.getElementById("prix");

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

let ok=true;

if(type && type.value!=""){

if(card.dataset.type!=type.value){

ok=false;

}

}

if(ville && ville.value!=""){

if(card.dataset.ville!=ville.value){

ok=false;

}

}

if(prix && prix.value!=""){

const p=parseInt(card.dataset.prix);

switch(prix.value){

case "1":

ok=p<50000000;

break;

case "2":

ok=p>=50000000 && p<=100000000;

break;

case "3":

ok=p>100000000;

break;

}

}

card.style.display=ok?"block":"none";

});

}

// ======================
// SCROLL ANIMATION
// ======================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".hidden").forEach(el=>{

observer.observe(el);

});

// ======================
// FORMULAIRE CONTACT
// ======================

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Merci ! Votre message a été envoyé.");

this.reset();

});

}

// ======================
// NEWSLETTER
// ======================

const newsletter=document.getElementById("newsletter");

if(newsletter){

newsletter.addEventListener("submit",function(e){

e.preventDefault();

alert("Merci pour votre inscription.");

this.reset();

});

}

// ======================
// CONNEXION
// ======================

const login=document.getElementById("loginForm");

if(login){

login.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value;

const pass=document.getElementById("password").value;

if(email=="admin@ngom-immo.com" && pass=="admin123"){

alert("Connexion réussie.");

window.location.href="admin.html";

}else{

alert("Email ou mot de passe incorrect.");

}

});

}

// ======================
// PRELOADER
// ======================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.display="none";

}

});

// ======================
// RETOUR EN HAUT
// ======================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

function topFunction(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ======================
// WHATSAPP
// ======================

function whatsapp(){

window.open(

"https://wa.me/221771234567",

"_blank"

);

}

// ======================
// DETAIL BIEN
// ======================

function voirBien(id){

window.location.href="detail-bien.html?id="+id;

}

// ======================
// PUBLIER UN BIEN
// ======================

const publier=document.getElementById("publierForm");

if(publier){

publier.addEventListener("submit",function(e){

e.preventDefault();

alert("Votre bien a été publié avec succès.");

this.reset();

});

}

// ======================
// ADMIN
// ======================

function supprimerBien(){

if(confirm("Voulez-vous supprimer ce bien ?")){

alert("Bien supprimé.");

}

}

function modifierBien(){

alert("Fonction de modification.");

}

function ajouterBien(){

alert("Ajout d'un nouveau bien.");

}

console.log("NGOM-IMMO chargé avec succès.");