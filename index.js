function sendEmail() {  
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceId = "service_xx6cnfg";
    const templateId = "template_of62jqv";
    

    emailjs.send(serviceId, templateId, params)
      .then((res) => {
        
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        alert("Your message sent!");
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        alert("Oops! Something went wrong.");
      });
  }