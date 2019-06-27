import Axios from "axios";

const url = "https://killer-cepegra.xyz/api/";
let json = "";
let list = document.querySelector(".list");
let obj = "";

Axios.get(url).then(function(response) {
    //console.log(response.data);

    json = response.data;
    for (var item in json) {
        //console.log(parseInt(prop));
        if (!isNaN(parseInt(item))) {
            //if (parseInt(prop) > -1) {
            //console.log(json[item]);
            let classe = json[item].situation;
            let center = "Center";
            let couleur = "";
            classe.includes(center) ? (couleur = "jaune") : (couleur = "rose");
            list.innerHTML += `
            <li class="${couleur}">
              <a href="#">
                <div>
                  <img src="${json[item].img}" alt="${json[item].txt_img}" title="${json[item].txt_img}"/>
                  <h3><span>${json[item].title}</span> ${json[item].title2}</h3>
                  <p>${json[item].situation}</p>
                  </div>
                <div class="detail">
                  <h4>${json[item].ss_titre}</h4>
                  <p>${json[item].texte}</p>
                  <p><span><i class="fa fa-heart"></i></span><span>Read more</span></p>
                </div>
              </a>
            </li>`;
        }
    }
});
