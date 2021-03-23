var fs = require("fs");



fs.readFile("ex1.txt", function (err, data) {
   if (err) {
       console.error(err)
	   return 
   }

   console.log("text ex1", data.toString())
});