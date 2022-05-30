exports.palindrome = function(word) {
    let regex = /[^a-z0-9]/gi
    word = word.toString().toLowerCase().replace(regex, "");
    let answer = "";

    if (word.length % 2 != 0) {
        let midChar = (word.length / 2) -.5;
        word = word.replace(word[midChar], "");
    }

    let firstHalf = word.slice(0, word.length/2).split("").sort().join("");
    let secondHalf = word.slice(word.length/2).split("").sort().join("");
    (firstHalf === secondHalf) ? answer = true : answer = false;
    
    return answer;
};
// could solve bonus part with RegExp and removing whitespace