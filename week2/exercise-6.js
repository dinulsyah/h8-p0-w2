// 1.
console.log("LOOPING PERTAMA")
var num = 2
while (num <= 20){
    console.log(num + ' - ' + 'I love coding')
    num += 2
}
num = num - 2
console.log("LOOPING KEDUA")
while (num >= 2){
    console.log(num + ' - ' + 'I will become fullstack developer')
    num -= 2
}

// 2.
console.log('\n')
console.log("LOOPING PERTAMA")

for (var num2 = 1 ; num2 <= 20 ; num2++){
    console.log(num2 + ' - ' + 'I love coding')
}

console.log("LOOPING KEDUA")
for (var num3 = 20 ; num3 >= 1 ; num3--){
    console.log(num3 + ' - ' + 'I will become fullstack developer')
}

console.log('\n')
// 3.1
for (var counter=1 ; counter<=100 ; counter++){
    if(counter % 2 === 0){
        console.log(counter + ' GENAP')
    }
    else{
        console.log(counter + ' GANJIL')
    }
}

console.log('\n')

// 3.2
for (var counter2=1 ; counter2 <= 100 ; counter2+=2){
    if(counter2 %3 === 0){
        console.log(counter2+ " KELIPATAN 3")
    }
    else{
        console.log("")
    }
}

console.log('\n')

// 3.3
for (var counter3=1 ; counter3 <= 100 ; counter3 +=5){
    if(counter3 % 6 === 0){
        console.log(counter3 + " KELIPATAN 6")
    }
    else{
        console.log("")
    }
}

console.log('\n')

// 3.4
for (var counter4 = 1; counter4 <= 100; counter4+=9){
    if(counter4 % 10 === 0){
        console.log(counter4 + ' KELIPATAN 10')
    }
    else{
        console.log('')
    }
}