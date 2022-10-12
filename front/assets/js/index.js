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
  .then(function(data) {
    let placeholder = document.querySelector("#listeGuitares");
    let out = "";
    for(let guitares of data) {
      out += `<div>
              <img src="../back/images/${guitares.imageUrl}"/>
              <h3> ${guitares.name}</h3>
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
  .then(data => {
    console.table(data);
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
