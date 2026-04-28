emailjs.init("xwf9HvY4q1eKmzggD");
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    emailjs.sendForm("service_021sp7p", "template_p02ux4m", this).then(function(){
        alert("Message sent successfully!");
    }, function(error){
        alert("Faild: "+error.text);
    });
});