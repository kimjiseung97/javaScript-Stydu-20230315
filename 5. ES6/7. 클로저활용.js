/*
const increase = (()=>{
    let count = 0;
    return () => count++;
})();

const decrease = (()=>{
    let count = 0;
    return () => count--;
})();
*/

// function counterClosure() {
//     let count = 0;

//     function increase(){
//         return ++count;
//     }
//     function decrease(){
//         return --count;
//     }

//     return {increase,decrease};
// }


// const counter = counterClosure();

// const increase = counter.increase;
// const decrease = counter.decrease;

/*
const counter = (() => {
    let count = 0;

    return {
        increase: () => ++count,
        decrease: () => --count
    };
})();

const{increase,decrease} = counter;
*/

/*
function counterWidhCbClosure(){
    let count = 0;

    function process(callback){
        return count = callback(count);
    }
    return process;
}

const counter_ = counterWidhCbClosure();

console.log(counter_(c =>++c)); //1
console.log(counter_(c =>c+=3)); //4
console.log(counter_(c =>c**=2)); // 16

*/

const counter_ = (() => {    
    let count = 0;
    return callback => count = callback(count);
})();

console.log(counter_(c => ++c));    // 1
console.log(counter_(c => c += 3)); // 4
console.log(counter_(c => c **= 2));// 16

