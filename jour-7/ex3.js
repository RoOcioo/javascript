


var longNames = [


	{
		firstName: "Jane",
		lastName: "Doe",
	},
	{
		firstName: "John",
		lastName: "Smith",
	},
];

var shortNames = longNames.map(function(elem) {
   return {name: elem.firstName+ '' + elem.lastName
    }
});

console.log(shortNames);

