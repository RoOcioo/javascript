var cakes = 
[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]
var cakesSoldOut = cakes.map(function(elem) {
    if (elem.flavor === "chocolate") {
         elem.status= "Sold out ! "
    } 
    return elem;
});

console.log(cakesSoldOut);

var cakesSold = cakesSoldOut.filter(
    function (elem) {
        if (elem.status === "Sold Out!") {
            return elem;
            }    
        });
console.log(cakesSold);