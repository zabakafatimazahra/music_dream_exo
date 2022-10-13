/*
Utilisez l'API Fetch pour collecter les données dans le backend.
Les fichiers à récupérer sont :
../back/guitars.json
../back/populars.json
../back/studio.json
Les images à insérer sont dans le répertoire ../back/images/,
vous trouverez leurs noms et descriptions dans les JSON téléchargés.
*/
/* Exemple de code d'utilisation de fetch :
*/

/*Créer les étoiles*/
function CreationHtmlUneEtoile() {
  return `<i class="fa-solid fa-star" style="color:blue;"><i>`
}

function CreationHtmlStars(Stars) {
  let out = "";
  for (let i = 0; i < Stars; i++) {
    out += CreationHtmlUneEtoile();
  }
  return out;
}

//Fetch pour récupérer "les guitares"
fetch("../back/guitars.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (listeGuitares) {
    let placeholder = document.querySelector("#listeGuitares");
    let out = "";
    for (let guitares of listeGuitares) {
      out += `
            <div>
              <img src="../back/images/${guitares.imageUrl}"/>
              <h4> ${guitares.name}</h4>
              <p> ${guitares.price} € ou <strong>${guitares.monthly} € / mois</strong></p>
            `;
      CreationHtmlStars(guitares.stars);

      out += `</div>`;

      /*
      out += `
          <div>
            <img src="../back/images/${guitares.imageUrl}"/>
            <h4> ${guitares.name}</h4>
            <p> ${guitares.price} € ou <strong>${guitares.monthly} € / mois</strong></p>
            `;
      
      if (guitares.stars == 3) {
        out += `
                  <a id="un" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="deux" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="trois" class="fa-solid fa-star" style="color:blue;"></a>
                </div>
              `;
      }
      if (guitares.stars == 4) {
        out += `
         
                  <a id="un" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="deux" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="trois" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="quatre" class="fa-solid fa-star" style="color:blue;"></a>
                </div>
              `;
      }
      if (guitares.stars == 5) {
        out += `
    
                  <a id="un" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="deux" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="trois" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="quatre" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="cinq" class="fa-solid fa-star" style="color:blue;"></a>
                </div>
              `;
      }
      */

    }
    placeholder.innerHTML = out;
  })

  .catch(function (error) {
    console.error("Something goes wrong!");
    console.error(error);
  });

//Fetch pour récupérer "les plus populaires"
fetch("../back/populars.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (listePopulaires) {
    let placeholder = document.querySelector("#listePopulaires");
    let out = "";
    for (let populaire of listePopulaires) {

      out += `
                  <div>
                  <img src="../back/images/${populaire.imageUrl}">
                  <h4> ${populaire.name}</h4>
                  <p> ${populaire.price} € ou <strong>${populaire.monthly} € / mois</strong></p>
            `;

      if (populaire.stars == 3) {
        out += `
                  <a id="un" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="deux" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="trois" class="fa-solid fa-star" style="color:blue;"></a>
                </div>
              `;
      }
      if (populaire.stars == 4) {
        out += `
                  <a id="un" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="deux" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="trois" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="quatre" class="fa-solid fa-star" style="color:blue;"></a>
                </div>
              `;
      }
      if (populaire.stars == 5) {
        out += `
                  <a id="un" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="deux" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="trois" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="quatre" class="fa-solid fa-star" style="color:blue;"></a>
                  <a id="cinq" class="fa-solid fa-star" style="color:blue;"></a>
                </div>
              `;
      }
    }
    placeholder.innerHTML = out;
  })
  .catch(function (error) {
    console.error("Something goes wrong!");
    console.error(error);
  });

//Fetch pour récupérer le "matériel studio"
fetch("../back/studio.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (listeStudio) {
    let placeholder = document.querySelector("#listeStudio");
    let out = "";
    for (let studio of listeStudio) {
      out += `
            <div>
              <img src="../back/images/${studio.imageUrl}">
              <h4> ${studio.title}</h4>
            </div>
          `;
    }
    placeholder.innerHTML = out;
  })
  .catch(function (error) {
    console.error("Something goes wrong!");
    console.error(error);
  });
