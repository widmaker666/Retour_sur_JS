const books = [
    { id: 133712, title: 'Gatsby le magnifique', rentedCount: 39 },
    { id: 237634, title: 'A la recherche du temps,perdu', rentedCount: 28 },
    { id: 873495, title: 'Orgueil & Préjugés', rentedCount: 67 },
    { id: 450915, title: 'Les frères Karamazov', rentedCount: 55 },
    { id: 837636, title: 'Dans les forêts de Sibérie', rentedCount: 15 },
    { id: 450911, title: 'Pourquoi j\'ai mangé mon père', rentedCount: 45 },
    { id: 675651, title: 'Et on tuera tous les affreux', rentedCount: 36 },
    { id: 888475, title: 'Le meilleur des mondes', rentedCount: 58 },
    { id: 364442, title: 'La disparition', rentedCount: 33 },
    { id: 635411, title: 'La lune seule le sait', rentedCount: 43 },
    { id: 465638, title: 'Voyage au centre de la Terre', rentedCount: 38 },
    { id: 748147, title: 'Guerre et Paix', rentedCount: 19 },
  ];
 
/*  
//Sors-moi une liste de tous les titres des livres du CDI
books.filter(titre => console.log([titre.title]));
*/

/*
//Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log(books.every(emprunter => emprunter.rentedCount > 0));
*/

/*
//Quel est le livre le plus emprunté ?
//Dans l'accu on à la premiere valeur du tableau rentedCount qui demande si elle est supérieur à la deuxième et si oui on affiche accumulateur ou faux nbEmprunter (accumulateur : nbEmprunter)
let plusRented = books.reduce((accumulateur, nbEmprunt) => accumulateur.rentedcount > nbEmprunt.rentedcount ? accumulateur : nbEmprunt);
console.log("livre le plus emprunté :", plusRented.title);


//Quel est le livre le moins emprunté ?
let moinsRented = books.reduce((accumulateur2, nbEmprunt2) => accumulateur2.rentedCount < nbEmprunt2.rentedCount ? accumulateur2 : nbEmprunt2);
console.log("livre le moins emprunté:", moinsRented.title);
*/

/*
//Supprime le livre avec l'ID 133712
console.log(books.filter(id => id.id !== 133712 ));
*/



