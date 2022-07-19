
//shout(string)receives one argument and returns it in all caps
function shout(string) {
    return string.toUpperCase();
}

//whisper(string)receives one argument and returns it in all lowercase
function whisper(string) {
    return string.toLowerCase();
}

//logShout(string) takes a string argument and logs it in all caps using console.log()
function logShout(string) {
    console.log(string.toUpperCase());
}

// logWhisper(string)takes a string argument and logs it in all lowercase using console.log()
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return `I can\'t hear you!`
    }   
    if (string.toUpperCase() === string) {
        return `YES INDEED!`
    }   
    if (string === `Let\'s have dinner together!`) {
        return `I would love to!`
    }
}
