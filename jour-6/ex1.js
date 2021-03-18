function formatDate(stringDate) {
    // var stringDate = "2021-03-18"

    var date = new Date(stringDate)


    var year = date.getFullYear()

  

    var month = date.getMonth() + 1

    
    if ( month < 10) {
        month = "0" + month;
    }
​
    var day = date.getDate();
    
    if ( day < 10) {
        day = "0" + day;
    }
    console.log(day + '/' + month + '/' + year)

}

formatDate("2021/03/18");