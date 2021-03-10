var numbers= [4, 10, 8, 12, 6];
numbers.reverse();
console.log(numbers);

numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);