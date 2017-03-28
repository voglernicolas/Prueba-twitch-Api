//Run our jQuery
$(document).ready(function() {
  $.ajax({
    type: "GET", //funcion obtener
    url: "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp", //desde
    success: function(data1){ //en caso de sucess
      console.log(data1);
       if (data1.stream === null) { //para ver si codecamp esta ON
      //FCC Offline
      $("#fccStatus").html("Free Code Camp is currently OFFLINE");
    } else {
      //FCC Online
      $("#fccStatus").html("Free Code Camp is currently LIVE");
    }
    }
  });

  $.ajax({
    type: "GET",
    url: "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels/",
    success: function(data2){
      for (var i = 0; i < data2.follows.length; i++) { //iterar a traves de los follows de FCC
        //gets displayName
        var displayName = data2.follows[i].channel.display_name; //nombre del canal
        var logo = data2.follows[i].channel.logo; //logo del canal
        var status= data2.follows[i].channel.status; //Online or Offline
        if(logo==null){
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";//Imagen representativa de que no tiene logo
      }
        $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" + //Agregamos contenido con .prepend
          "<a href='http://www.twitch.tv/"+ displayName+"'><img src='" + logo + "'></a>"+
          "</div>" + "<div class='col-md-4'>" + displayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");
      }
    }
  });
});
