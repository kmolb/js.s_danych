/////// zad 7
const people = [{
        name: 'Janek',
        age: 31
    },
    {
        name: 'Wiola',
        age: 35
    },
    {
        name: 'Mateusz',
        age: 29
    },
    {
        name: 'Kamila',
        age: 25
    },
    {
        name: 'Olaf',
        age: 33
    },
    {
        name: 'Sylwia',
        age: 25
    }
];

people.find = function (fn) {
    for (let i = 0; i <= this.length - 1; i++) {
        if (fn(this[i])) {
            return this[i];
        }
    }
    return undefined;
};
people.find((arg) => { 
    return arg.age === 25;
   });
   



////// zad 6
/*
function forEach(fn) {
    for (let i = 0; i < this.length - 1; i++) {
        // console.log(arr[i]);
        fn(this[i]);
    }

}
const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];
names.forEach = forEach;
names.forEach(console.log);
names.forEach(function (arg)  {  
      console.log(arg)
    });

*/
///// zad 5
/*
function forEach(fn) {
    for (let i = 0; i < this.length - 1; i++) {
        // console.log(arr[i]);
        fn(this[i]);
    }

}
const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];
names.forEach = forEach;
names.forEach(console.log);
*/

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