const form = document.getElementById('contactForm');
const sendMessageButton = document.getElementById('sendMessageButton');
form.addEventListener ('submit',function(event){
    event.preventDefault();

const message= docuent.getElementById('Message').value;
if (message.trim() === ""){
    alert("Please enter your message.");
} else {("message.sent: " + message);
document.getElementById('message').value = '';
}
});