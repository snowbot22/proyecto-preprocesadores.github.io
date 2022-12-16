//VARIABLES
let noticiasButton= document.getElementById('Noticias');
let novedadesButton= document.getElementById('Novedades');
let reseñasButton= document.getElementById('Reseñas');
let esportsButton = document.getElementById('eSports');
let noticiasContent= document.getElementById("noticiasContent");
let novedadesContent= document.getElementById("novedadesContent");
let reseñasContent= document.getElementById("reseñasContent");
let esportsContent= document.getElementById("esportsContent");


//FUNCIONES
function toggleNoticias (){
    let isNoticiasHidden= noticiasContent.classList.contains('hidden');

    if(isNoticiasHidden){
        noticiasContent.classList.remove('hidden');
        novedadesContent.classList.add('hidden');
        reseñasContent.classList.add('hidden');
        esportsContent.classList.add('hidden');
    }

}

noticiasButton.addEventListener('click', toggleNoticias);

function toggleNovedades (){
    let isNovedadesHidden= novedadesContent.classList.contains('hidden');

    if(isNovedadesHidden){
        novedadesContent.classList.remove('hidden');
        noticiasContent.classList.add('hidden');
        reseñasContent.classList.add('hidden');
        esportsContent.classList.add('hidden');
    }

}

novedadesButton.addEventListener('click', toggleNovedades);

function toggleReseñas (){
    let isReseñasHidden= reseñasContent.classList.contains('hidden');

    if(isReseñasHidden){
        reseñasContent.classList.remove('hidden');
        noticiasContent.classList.add('hidden');
        novedadesContent.classList.add('hidden');
        esportsContent.classList.add('hidden');
    }
}

reseñasButton.addEventListener('click', toggleReseñas);


function toggleEsports (){
    let isEsportsHidden= esportsContent.classList.contains('hidden');

    if(isEsportsHidden){
        esportsContent.classList.remove('hidden');
        noticiasContent.classList.add('hidden');
        novedadesContent.classList.add('hidden');
        reseñasContent.classList.add('hidden');
    }
}

esportsButton.addEventListener('click', toggleEsports);