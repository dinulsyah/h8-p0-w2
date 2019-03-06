// 1.
var word = 'javascript'
var second = 'is'
var third = 'awesome'
var fourth = 'and'
var fifth = 'I'
var sixth = 'love'
var seventh = 'it'
word = word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh
console.log(word)

// 2.
var firstWord = word[0] + word[1] + word[2] + word[3]+ word[4] + word[5] + word[6] + word[7] + word[8] + word[9]
console.log('First Word: ' + firstWord)
var secondWord = word[11] + word[12]
console.log('Second Word: ' + secondWord)
var thirdWord = word[14] + word[15] + word[16] + word[17] + word[18] + word[19] + word[20]
console.log('Third Word: '+ thirdWord)
var fourthWord = word[22] + word[23] + word[24]
console.log('Fourth Word: '+ fourthWord)
var fifthWord = word[26]
console.log('Fifth Word: '+fifthWord)
var sixthWord = word[28] + word[29] + word[30] + word[31]
console.log('Sixth Word : ' + sixthWord)
var seventhWord = word[33] + word[34]
console.log('Seventh Word : '+ seventhWord)

// 3.
var firstWord2 = word.substring(0,10)
console.log('First Word: ' + firstWord2)
var secondWord2 = word.substring(11,13)
console.log('Second Word: ' + secondWord2)
var thirdWord2 = word.substring(14,21)
console.log('Third Word : '+ thirdWord2)
var fourthWord2 = word.substring(22,25)
console.log('Fourth Word : '+ fourthWord2)
var fifthWord2 = word.substring(26,27)
console.log('Fifth Word : '+ fifthWord2)
var sixthWord2 = word.substring(28,32)
console.log('Sixth Word : '+ sixthWord2)
var seventhWord2 = word.substring(33,35)
console.log('Seventh Word : ' + seventhWord2)

// 4.
firstWordLength = firstWord.length
secondWordLength = secondWord.length
thirdWordLength = thirdWord.length
fourthWordLength = fourthWord.length
fifthWordLength = fifthWord.length
sixthWordLength = sixthWord.length
seventhWordLength = seventhWord.length
console.log('First Word: '+ firstWord + ', with length: ' + firstWordLength)
console.log('Second Word: '+ secondWord + ', with length: ' + secondWordLength)
console.log('Third Word: '+ thirdWord + ', with length: ' + thirdWordLength)
console.log('Fourth Word: '+ fourthWord + ', with length: ' + fourthWordLength)
console.log('Fifth Word: '+ fifthWord + ', with length: ' + fifthWordLength)
console.log('Sixth Word: '+ sixthWord + ', with length: ' + sixthWordLength)
console.log('Seventh Word: '+ seventhWord + ', with length: ' + seventhWordLength)