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
// zad 2

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