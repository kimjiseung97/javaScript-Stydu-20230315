


//배열의 특정 데이터의 인덱스를 구하는 함수
function myIndexOf(arr, element){
    for(var i =0; i<arr.length; i++){
        if(element===arr[i]){
            return i;
        }
    }
    return -1;
}

// function myIcludes(arr, element){
//     for(var i =0; i<arr.length; i++){
//         if(element===arr[i]){
//             return true;
//         }
//     }
//     return false;
// }


function myIcludes(arr, element){
    return myIndexOf(arr,element)!== -1;
}


var foodList =['짜장면','탕수육','고추잡채','족발'];

var idx = myIndexOf(foodList,'탕수육');
var flag = myIcludes(foodList,'족발');
console.log(flag);
console.log(idx);
