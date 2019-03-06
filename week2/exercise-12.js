function konversiMenit(menit){
    hour = menit/60
    if(hour < 1){
        return `0:${menit}`
    }
    else{
        hour = Math.floor(hour)
        minute = menit % 60
        if(minute < 10){
            return `${hour}:0${minute}`
        }
        else{
            return `${hour}:${minute}`
        }
    }
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00