
function reverseString(str) {
    return str.split('').reverse().join('');
}


const input = "Hello, world!";


setTimeout(() => {
    const reversed = reverseString(input);
    console.log("Reversed string:", reversed);
}, 2000); 
