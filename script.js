const q = (el) => document.querySelector(el);
const qa = (el) => document.querySelectorAll(el); 

pokemonJson.map((item,index) =>{
    let pokemonItem = q( ".pokemon-item").cloneNode(true);


    pokemonItem.setAttribute("data-key", index)
    pokemonItem.querySelector(".pokemon-item--img img").src = item.img
    pokemonItem.querySelector('.pokemon-item--type').innerHTML = `${item.type}`;
    pokemonItem.querySelector(".pokemon-item--name").innerHTML = item.name;
    pokemonItem.querySelector(".pokemon-item--desc").innerHTML = item.description;
    pokemonItem.querySelector("a").addEventListener("click", (e)=>{
        e.preventDefault();
        let key = e.target.closest(".pokemon-item").getAttribute("data-key");

        q(".pokemonBig img").src = pokemonJson[key].img;
        q(".pokemonInfo h1").innerHTML = pokemonJson[key].name;
        q(".pokemonInfo--desc").innerHTML = pokemonJson[key].descModal;
        q(".pokemonInfo--size").innerHTML = pokemonJson[key].sizes
        q(".pokemonInfo--actualtype").innerHTML = `${pokemonJson[key].type}`;
        q(".weak").innerHTML = pokemonJson[key].weak;


        q(".pokemonWindowArea").style.opacity = 0;
        q(".pokemonWindowArea").style.display = "flex"

        setTimeout(()=>{
            q(".pokemonWindowArea").style.opacity = 0.9;
        },200);
        
    });  
        
    q(".pokemon-area").append(pokemonItem);
});


const cancelModal = ()=> {
    q(".pokemonWindowArea").style.opacity = 0;
    setTimeout(()=>{
        q(".pokemonWindowArea").style.display = "none";
    },500)
}

qa(".pokemonInfo--cancelButton, .pokemonInfo--cancelMobileButton").forEach((item)=>{
    item.addEventListener("click",cancelModal);
});

qa(".buttonMode")[0].addEventListener('click', ()=>{
    q("body").style.backgroundColor = "#FFCB08"
    q("body").style.backgroundColor = "#2A6EB7"
    q("header").style.backgroundColor = "#FFCB08";
    q("footer").style.backgroundColor = "#FFCB08";
    qa(".social-media .icon")[0].style.backgroundColor = "#FFCB08";
    qa(".social-media .icon")[1].style.backgroundColor = "#FFCB08";
    qa(".social-media .icon")[2].style.backgroundColor = "#FFCB08";
    qa(".social-media .icon")[0].style.color = "#2A6EB7";
    qa(".social-media .icon")[1].style.color = "#2A6EB7";
    qa(".social-media .icon")[2].style.color = "#2A6EB7";
    qa(".pokemon-item")[1].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[2].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[3].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[4].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[5].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[6].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[7].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[8].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[9].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[10].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[11].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[12].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[13].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[14].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[15].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[16].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[17].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[18].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[19].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[20].style.backgroundColor = "#FFCB08";
    qa(".pokemon-item")[21].style.backgroundColor = "#FFCB08";

    console.log(document.querySelectorAll(".parag"))
})

qa(".buttonMode")[1].addEventListener('click', ()=>{
    q("body").style.backgroundColor = "#2A6EB7"
    q("body").style.backgroundColor = "#FFCB08"
    q("header").style.backgroundColor = "#2A6EB7";
    q("footer").style.backgroundColor ="#2A6EB7";
    qa(".social-media .icon")[0].style.backgroundColor = "#2A6EB7";
    qa(".social-media .icon")[1].style.backgroundColor = "#2A6EB7";
    qa(".social-media .icon")[2].style.backgroundColor = "#2A6EB7";
    qa(".social-media .icon")[0].style.color = "#FFCB08";
    qa(".social-media .icon")[1].style.color = "#FFCB08";
    qa(".social-media .icon")[2].style.color = "#FFCB08";
    qa(".pokemon-item")[1].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[2].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[3].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[4].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[5].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[6].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[7].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[8].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[9].style.backgroundColor = "#2A6EB7"
    qa(".pokemon-item")[10].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[11].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[12].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[13].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[14].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[15].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[16].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[17].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[18].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[19].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[20].style.backgroundColor = "#2A6EB7";
    qa(".pokemon-item")[21].style.backgroundColor = "#2A6EB7";
    
})












