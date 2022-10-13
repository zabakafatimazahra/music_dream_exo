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

//Fetch pour récupérer "les guitares"
fetch("../back/guitars.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(listeGuitares) {
    let placeholder = document.querySelector("#listeGuitares");
    let out = "";
    for(let guitares of listeGuitares) {
      out += `
              <div>
                <img src="../back/images/${guitares.imageUrl}"/>
                <h4> ${guitares.name}</h4>
                <p> ${guitares.price} ou ${guitares.monthly}/mois</p>
                <p> ${guitares.stars}</p>
              </div>
            `;
      }
    placeholder.innerHTML = out;
  })
  
  .catch(function(error) {
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
.then(function(listePopulaires) {
  let placeholder = document.querySelector("#listePopulaires");
  let out = "";
  for(let populaire of listePopulaires) {
    out += `
            <div>
              <img src="../back/images/${populaire.imageUrl}">
              <h4> ${populaire.name}</h4>
              <p> ${populaire.price} ou ${populaire.monthly}/mois</p>
              <p> ${populaire.stars}</p>
            </div>
          `;
  }
  placeholder.innerHTML = out;
})
.catch(function(error) {
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
.then(function(listeStudio) {
  let placeholder = document.querySelector("#listeStudio");
  let out = "";
  for(let studio of listeStudio) {
    out += `
            <div>
              <img src="../back/images/${studio.imageUrl}">
              <h4> ${studio.title}</h4>
            </div>
          `;
  }
  placeholder.innerHTML = out;
})
.catch(function(error) {
  console.error("Something goes wrong!");
  console.error(error);
});
