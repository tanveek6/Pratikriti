function SendMail() {
    var params = {
        Name : document.getElementById("Name").Value,
        Email : document.getElementById("Email").value,
        Number : document.getElementById("Number").value,
        Message : document.getElementById("Message").value

    };
    emailjs.send('service_rbxw2mv', 'template_g8aex63', params).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}