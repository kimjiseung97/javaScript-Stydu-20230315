

var num = +prompt('몇행 몇열입니까?');
var star = '';

for(var i=0; i<num; i++){
    for(var j = 0; j<num; j++){
        star +='*';
    }
    star +='\n';
}
prompt(star);