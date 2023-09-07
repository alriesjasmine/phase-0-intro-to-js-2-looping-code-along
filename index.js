// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(["flowers", "teddy bear", "card"]);




function writeCards(arrayofnames, surprise) {
    const messages = []
    for (let i = 0; i < arrayofnames.length; i++) {
        `Thank you, ${arrayofnames[i]}, for the wonderful surprise gift!`
        messages.push(`Thank you, ${arrayofnames[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}


function countDown() {
    let countdown = 10;
while (countdown >= 0) {
  console.log(countdown--);
}
}