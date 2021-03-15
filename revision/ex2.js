function countEach(word) {

    console.log("word", word)
    xcount = 0
    ocount = 0

    console.log("word length", word.length)


    for (i = 0; i < word.length; i++) {

        console.log("word char at", word.charAt(i))
        
        if (word.charAt(i) === "x") {
            xcount++
            console.log(xcount)
        }

        else if (word.charAt(i) === "o") {
            ocount++
            console.log(ocount)
        }

        else {

        }
    }

    if (xcount === ocount) {

        console.log("true")

    } else {

        console.log("false")
    }

}

countEach('xooxxoox')