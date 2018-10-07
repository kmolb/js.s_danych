///// zad 5


function forEach(fn){
    for (let i = 0; i < this.length - 1; i++) {
       // console.log(arr[i]);
       fn(this[i]);
    }

}
const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];




names.forEach = forEach;
names.forEach( console.log);
//// Zad 4

/* 

const persone = {
    name : "Igor",
    hello : function(){
        console.log(this.name )  // this wskazuje na obiekt ktory go wywołał
     }
};
persone.hello();

**/
/// zad 3
/*/
function forEach(arr,fn){
    for (let i = 0; i < arr.length - 1; i++) {
       // console.log(arr[i]);
       fn(arr[1]);
    }
}
const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];
forEach(names, console.log);

*/
// zad 2
/*
const hello = function(){
    
    console.log('cześć');
   }
   const helloCopy = hello;
    hello();
    helloCopy();
    function call(fn){
        fn();
    }
    call(hello);
    call(helloCopy);
    */

// zad 1
/*
function forEach(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i]);
    }
}
const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];
forEach(names);

*/
