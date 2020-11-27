function charFreq(message){
    const charMap = {}
    for(let char of message){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

function maxCharacter(str){
    let maxNum = 0
    let maxChar = ''
    const charMap = charFreq(str)
    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}