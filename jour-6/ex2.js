// Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
//  La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// Appelez la fonction et affichez son résultat dans la console

function calculateAge(birthDate) {
    ​
        var dateNow = new Date();
        
        var yearNow = dateNow.getFullYear();
        var monthNow = dateNow.getMonth() + 1;
        var dayNow = dateNow.getDate();
    ​
        birthDate = new Date (birthDate);
        
        var yearBirth = birthDate.getFullYear();
        var monthBirth = birthDate.getMonth() + 1;
        var dayBirth = birthDate.getDate();
    ​
        var yearDiff = yearNow - yearBirth;
        
        var monthDiff = monthNow - monthBirth;
        
        var dayDiff = dayNow - dayBirth;
        
        if ( dayDiff < 0 ) {
            
            monthDiff = monthDiff - 1;
        }
    ​
        if ( monthDiff < 0 ) {
            
            yearDiff = yearDiff - 1;
            monthDiff = monthDiff + 12;
        }
    ​
        console.log(monthDiff)
    ​
        console.log("Il ou elle a", yearDiff, "ans");
    ​
    }
    ​
    calculateAge("1991-07-16");