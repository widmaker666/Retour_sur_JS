const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 },
  ];
/*
//Sors une array qui ne contient que le prénom et le nom des entrepreneurs
entrepreneurs.filter(nomPrenom => { console.log([nomPrenom.first, nomPrenom.last])});
*/

/*
//Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui.
entrepreneurs.filter(age => { console.log(["first: " + " " + age.first, "last :" + " " + age.last, "age :" + " " + (2023 - age.year) ]);
});
*/

/*
//Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName
entrepreneurs.filter(age => { console.log(["firstname: " + " " + age.first, "lastname :" + " " + age.last, "age :" + " " + (2023 - age.year)]);
});
*/

//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 uniquement
entrepreneurs.filter(elementDuTableau => {
    if (elementDuTableau.year > 1969 && elementDuTableau.year < 1980) {
        console.log(elementDuTableau);        
    }
});






