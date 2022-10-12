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
  .then(function (guitares) {
    if (guitares.ok) {
      return guitares.json();
    }
  })
  .then(data => {
    for(let guit of data) {
      console.log(guit.name)
    }
    console.table(data);
  })
  .catch(function(error) {
    console.error("Something goes wrong!");
    console.error(error);
  });

  //Fetch pour récupérer "les plus populaires"
  fetch("../back/populars.json")
  .then(function (populaire) {
    if (populaire.ok) {
      return populaire.json();
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
  .then(function (studio) {
    if (studio.ok) {
      return studio.json();
    }
  })
  .then(data => {
    console.table(data);
  })
  .catch(function(error) {
    console.error("Something goes wrong!");
    console.error(error);
  });
