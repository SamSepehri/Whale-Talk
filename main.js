let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArrey = [""];

for (let i = 0; i < input.length; i++) {
    for (let z = 0; z < vowels.length; z++) {
        if (input[i] === vowels[z]) {
            if (input[i] === "u" || input[i] === "e") {
                resultArrey.push(input[i] + input[i]);
            } else {
                resultArrey.push(vowels[z]);
            }
        }
    }
}
console.log(resultArrey.join("").toUpperCase());
