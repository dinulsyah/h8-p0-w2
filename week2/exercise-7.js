// 1.
var rows1 = 5
for(rows1 ; rows1 > 0 ; rows1--){
    console.log('*')
}

// 2.
var rows2 = 5
result = ''
for(rows2 ; rows2 > 0 ; rows2--){
    for(var i = 5 ; i > 0 ; i--){
        result += '*'
    }
    console.log(result)
    result = ''
}


// 3.
var rows3 = 5
result1 = ''

for(j=0 ; j < rows3 ; j++){
    for(k=0 ; k<=j ; k++){
        result1+='*'
    }
    console.log(result1)
    result1=''
}