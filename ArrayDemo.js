let origDogs =["Bulldog", "Beagle", "Labrador"];
console.log(origDogs)

let cats = new Array("Americal Curl", "Bengal");
console.log(cats);

let birds = new Array("Falcons", "Ducks", "Flamingoes");
console.log(birds);

//Array Copy Elements
let sliceDogs = origDogs.slice(1,2);
console.log(sliceDogs);

let copyDogs = [...origDogs];
console.log(copyDogs);
let dogs = origDogs.slice(0);
console.log(dogs);

//Stack Functions Push and Pop
let pushDog = dogs.push("Golden Retriver");
console.log('push : ' +pushDog );
let popDog = dogs.pop();
console.log('Pop : ' + popDog);
dogs[dogs.length] = "Poodle";

//Add And Remove form First
let addFist = dogs.unshift("Golden Retriver");
console.log('add first :' + addFist);

let shiftDog = dogs.shift();
console.log(shiftDog);
