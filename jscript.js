"use strict";

// Write a function coins() that takes 
// an amount of US ¢, and returns the smallest 
// possible array of coins to make up that sum.
// 
// The coins in the returned array should be
// sorted from highest to lowest.
//
// The available coins are 25¢, 10¢, 5¢, 1¢

// Submit a link to a github repo via TIY-classroom

function coins(cents){
	var coinsArr = []
	while (cents >= 25){
		cents -= 25
		coinsArr.push(25)
	}

	while (cents >= 10){
		cents -= 10
		coinsArr.push(10)
	}

	while (cents >= 5){
		cents -= 5
		coinsArr.push(5)
	}

	while (cents >= 1){
		cents -= 1
		coinsArr.push(1)
	}

	return coinsArr
}


var coins2 = function(cents){
	var coinsArr = []
	var denominations = [25,10,5,1]

	denominations.forEach(function(coin){
		while(cents >= coin){
			coinsArr.push(coin)
			cents = cents - coin
		}
	})
	
	return coinsArr
}

console.log(coins(68))
console.log(coins2(118))

// tests
// ---
var result = coins(11)
// --> 10, 1
console.assert( result instanceof Array )
console.assert( result[0] === 10 && result[1] === 1 )

result = coins(39)
// --> 25, 10, 1, 1, 1, 1
console.assert( result[0] === 25 && result[1] === 10 && result[2] === 1 && result[3] === 1 && result[4] === 1 && result[5] === 1)