function sendMail(contactForm) {
    emailjs.send("gmail", "confirmation_of_receipt_fledgling", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value, 
        "employment_status": contactForm.employmentstatus.value, 
        "neighbourhood_interest1": contactForm.neighbourhood1.value,
        "neighbourhood_interest2": contactForm.neighbourhood2.value,
        "neighbourhood_interest3": contactForm.neighbourhood3.value,
        "neighbourhood_interest4": contactForm.neighbourhood4.value,
        "neighbourhood_interest5": contactForm.neighbourhood5.value,
        "neighbourhood_interest6": contactForm.neighbourhood6.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}