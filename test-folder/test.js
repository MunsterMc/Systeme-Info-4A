console.log("coucou");



function myFunction(){
    console.log("lol");
    var text = document.getElementById("Commande").value;
    fetch('https://api.qrserver.com/v1/create-qr-code/?size=300x300&data='+text)
    	.then(function(data){
        $('#progress').text("Loading");
        return data.blob();
      })
      .then(function(img){
      	var dd = URL.createObjectURL(img);
        $('#progress').text("");
        $('img').attr('src', dd);
      })
  };
