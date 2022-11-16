$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

  
  // <script src="https://smtpjs.com/v3/smtp.js"></script>

  function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "ethicaltechera@gmail.com",
      Password: "1234",
      To: document.getElementById("toemail").value,
      From: "ethicaltechera@gmail.com",
      Subject: document.getElementById("toemail").value,
      Body: document.getElementById("bodymessage").value,
      // Attachments: [
      //   {
      //     name: "File_Name_with_Extension",
      //     path: "Full Path of the file"
      //   }]
    })
      .then(function (message) {
        alert("Mail has been sent successfully")
      });
  }

});