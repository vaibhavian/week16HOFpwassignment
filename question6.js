
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;


function validateLinkedInURL(url) {
    if (linkedinRegex.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}


validateLinkedInURL("https://www.linkedin.com/in/johndoe");     
validateLinkedInURL("https://www.linkedin.com/in/jane_doe123"); 
validateLinkedInURL("https://www.linkedin.com/in/alex-smith_"); 
validateLinkedInURL("https://www.linkedin.com/in/mark");         
validateLinkedInURL("https://www.linkedin.com/in/1234");        
validateLinkedInURL("https://www.linkedin.com/invalid-url");     
