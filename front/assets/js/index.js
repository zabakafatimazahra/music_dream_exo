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
    for(let guitare of listeGuitares) {
      out += `
              <img src="../back/images/${guitare.imageUrl}">
              <h3> ${guitare.name}</h3>
              <p> ${guitare.price} ou ${guitare.monthly}/mois</p>
              <p> ${guitare.stars}</p>
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
              <img src="../back/images/${populaire.imageUrl}">
              <h3> ${populaire.name}</h3>
              <p> ${populaire.price} ou ${populaire.monthly}/mois</p>
              <p> ${populaire.stars}</p>
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
  .then(data => {
    console.table(data);
  })
  .catch(function(error) {
    console.error("Something goes wrong!");
    console.error(error);
  });
