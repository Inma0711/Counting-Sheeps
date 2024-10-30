function countSheeps(list) {
    const sheepCount = list.filter(Boolean).length;

    if (sheepCount > 0) {
        return `There are ${sheepCount} sheep in total`;
    } else {
        return "UPS!!! Wolfs eaten Sheeps";
    }
}

const list1 = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]
const list2 = [ false, false, false ]

console.log(countSheeps(list1));
console.log(countSheeps(list2)); 
