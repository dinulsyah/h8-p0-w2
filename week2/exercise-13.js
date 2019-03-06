function xo(str){
    length = str.length
    counter_x = 0
    counter_o = 0
    for(var i = 0; i < length; i++){
        if(str[i]==='x'){
            counter_x ++
        }
        else if(str[i]==='o'){
            counter_o ++
        }
    }
    if(counter_o === counter_x){
        return true
    } 
    else{
        return false
    }
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true