function sendEmail(){
    
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "alpha07ster@gmail.com",
    Password : "3B26740CC0F4C6A25F2893EF40C2751C20E6",
    To : "alpha07ster@gmail.com",
    From : "alpha07ster@gmail.com",
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body",
    
}).then(
message => alert(message)
);

}