
let names =  ["penny", "coin", "dollar"];





// for (let value of names) {

//     console.log(value);
// }



let x = names.find(function(item) {

    return item.length >= 65
}) 
console.log(x);




names.forEach( function(item){
    console.log(item);

})