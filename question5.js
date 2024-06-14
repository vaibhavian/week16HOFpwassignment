
const urlRegex = /^(http|https):\/\/[\w\d.]+[a-zA-Z]+$/;


function validateURL(url) {
    if (urlRegex.test(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
}


validateURL("http://www.example.com");      
validateURL("https://www.example.com");    
validateURL("https://www.example.com/path");
validateURL("ftp://www.example.com");       
validateURL("http://123.45");              
validateURL("https://www.example");         