document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("xwf9HvY4q1eKmzggD");
    document.getElementById("comment-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        emailjs.sendForm("service_021sp7p", "template_xos077u", this)
        .then(function () {
            document.getElementById("comment-form").reset();
            alert("Comment sent successfully!");
        }, function (error) {
            alert("Failed: " + error.text);
            console.log(error);
        });

    });

});