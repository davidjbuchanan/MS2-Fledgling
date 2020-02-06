function sendMail(contactForm) {
    var fields = {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value, 
        "employment_status": contactForm.employmentstatus.value, 
    };
    var checkBox = document.getElementById("check1");
    if (checkBox.checked == true){
        fields["neighbourhood_interest1"] = contactForm.neighbourhood1.value;
    };
    var checkBox = document.getElementById("check2");
    if (checkBox.checked == true){
        fields["neighbourhood_interest2"] = contactForm.neighbourhood2.value;
    };
    var checkBox = document.getElementById("check3");
    if (checkBox.checked == true){
        fields["neighbourhood_interest3"] = contactForm.neighbourhood3.value;
    };
    var checkBox = document.getElementById("check4");
    if (checkBox.checked == true){
        fields["neighbourhood_interest4"] = contactForm.neighbourhood4.value;
    };
    var checkBox = document.getElementById("check5");
    if (checkBox.checked == true){
        fields["neighbourhood_interest5"] = contactForm.neighbourhood5.value;
    };
    var checkBox = document.getElementById("check6");
    if (checkBox.checked == true){
        fields["neighbourhood_interest6"] = contactForm.neighbourhood6.value;
    };
    
    emailjs.send("gmail", "confirmation_of_receipt_fledgling", fields)
    .then(
        function(response) {
            console.log("SUCCESS", response, fields);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; 
}