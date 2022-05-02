// In index.js, build a function named writeCards()
// that accepts two arguments: an array of string names, and an event name.
// Create a for loop with a counter that starts at 0 and increments at the
// end of each loop. The for loop should stop once it has iterated over
// the length of the array.

// As with our previous wrapGifts() function, you will create a
// custom message for each name inside the loop.
// Unlike that example, however, instead of simply logging the
// messages to the console, you will collect them in a new array and
// return this array at the end of the function.
// (Refer back to the Array Methods lesson if you need a refresher on how we
//   can add an element to an array.) The overall process should be:
// create a new, empty array to hold the messages;
// iterate through the input array and, inside the loop, build out the 'thank you'
// message for each name using string interpolation,
// then add that message to the new array you created;
// after the loop finishes and all of the messages have been added to the new array,
// return the new array.
// Here is an example of what a call to the writeCards() function might look like:
//const thankYouCard = []

function writeCards(names, event) {
  let thankYouCard = []
  for (let i = 0; i < names.length; i++) {
    thankYouCard.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    )
  }
  return thankYouCard
}

function countDown(count) {
  while (count >= 0) {
    console.log(count--)
  }
}

//write a function called countDown **
//it takes an integer and starting from that number counts down to zero using console.log()

// function countDown(int) {
//   //let number = 0
//   while (int >= 0) console.log(int--)
// }

//build a function called writeCards(arry, event)
// create a for loop with counter at 0
// the for loop should stop once it reaches the end of the Array
// return a new array

// function writeCards(arr, event) {
//   let newArr = []
//   for (i = 0; i < arr.length; i++) {
//     newArr.push(event)
//   }
//   return newArr
// }
