function sendMail(contactForm) {
    emailjs.send("gmail", "confirmation_of_receipt_fledgling", {
        "from_name": contactForm.name.value, 
        "from_email": contactForm.emailaddress.value, 
        "employment_status": contactForm.employmentstatus.value, 

        function hood1() {
            var checkBox = document.getElementById("check1");
            if (checkBox.checked == true){
                "neighbourhood_interest1": contactForm.neighbourhood1.value,
            } 
        }, 

        function hood2() {
            var checkBox = document.getElementById("check2");
            if (checkBox.checked == true){
                "neighbourhood_interest2": contactForm.neighbourhood2.value,
            } 
        }, 

        function hood3() {
            var checkBox = document.getElementById("check3");
            if (checkBox.checked == true){
                "neighbourhood_interest3": contactForm.neighbourhood3.value,
            } 
        }, 

        function hood4() {
            var checkBox = document.getElementById("check4");
            if (checkBox.checked == true){
                "neighbourhood_interest4": contactForm.neighbourhood4.value,
            } 
        }, 

        function hood5() {
            var checkBox = document.getElementById("check5");
            if (checkBox.checked == true){
                "neighbourhood_interest5": contactForm.neighbourhood5.value,
            } 
        }, 

        function hood6() {
            var checkBox = document.getElementById("check6");
            if (checkBox.checked == true){
                "neighbourhood_interest6": contactForm.neighbourhood6.value,
            } 
        }, 

        /*
        "neighbourhood_interest1": contactForm.neighbourhood1.value,
        "neighbourhood_interest2": contactForm.neighbourhood2.value,
        "neighbourhood_interest3": contactForm.neighbourhood3.value,
        "neighbourhood_interest4": contactForm.neighbourhood4.value,
        "neighbourhood_interest5": contactForm.neighbourhood5.value,
        "neighbourhood_interest6": contactForm.neighbourhood6.value*/
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