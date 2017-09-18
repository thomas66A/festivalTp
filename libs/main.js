
$("#creerFestival").click(function(){
    $("#form").css("display","flex");
});

var posTop = $("#utilisateur").position().top;
var posLeft = $("#utilisateur").position().left;
$(function(){
    $("#blocUtilisateur").css("left",posLeft);
    posTop = posTop + 30;
    $("#blocUtilisateur").css("top",posTop);
    $("#blocUtilisateur").hide(0);
})


var festival = new Festival();
var positionFestival = {};
festival.main = function(){
    var position = [];
    
    festival.map.addListener("click", function (event) {
        if($("#form").css("display") == "flex"){
            var gps = $("#gpsCoords");
            var pos = event.latLng;    
            gps.val(pos);
            positionFestival = pos;
            
        }
    });
    $(function(){
        if(localStorage.getItem("festival")){
            var festival_json = localStorage.getItem("festival");
            var lesFestival = JSON.parse(festival_json);
            //console.log(lesFestival);
            for(var i = 0; i<lesFestival.length ; i++)
                {   var x=0;
                    for(var key in lesFestival[i]){
                        if(x==0){
                            var lat = lesFestival[i][key]["lat"];
                            var lng = lesFestival[i][key]["lng"];    
                            var latLng = new google.maps.LatLng(lat,lng);   
                        }
                        if(x==1){
                            var title = lesFestival[i][key];
                        }
                        if(x==2){
                            var type = lesFestival[i][key];    
                        }
                        if(x==3){
                            var infos = lesFestival[i][key];    
                        }
                        x++;
                        
                    }
                    
                    var marker = festival.addMarker( latLng, title, type );
                    festival.addInfos( infos, marker );    
                }
        }

        
        festival.attrapeNom();
    });

};  
    
$("#subFest").click(function(){ 

        var latLng = positionFestival;
        var title = $("#festName").val();
        var type = festival.$type.val();
        var dateDebut = $("#dateDebut").val();
        var dateFin = $("#dateFin").val();
        var marker = festival.addMarker( latLng, title, type );
        var infos = "<div id=\"info\">";
        infos += "<h1>" + title + "</h1>";
        infos += "<h3>Type de musique: " + type + "</h3>";
        infos += "<h4>Debut du festival: <span id='debut'>" + dateDebut + "</span></h4>";
        infos += "<h4>Fin du festival: <span id='fin'>" + dateFin + "</h4>";
        infos += "</div>";
        festival.addInfos( infos, marker );
        var toStorage = [];
        var stockage  = {
            latLng : latLng,
            title : title,
            type : type,
            infos : infos,
            dateDebut : dateDebut,
            dateFin : dateFin
          };
          if( localStorage.getItem('festival') ){
            toStorage = JSON.parse(localStorage.getItem('festival'));
          }
          toStorage.push(stockage);
          localStorage.setItem('festival', JSON.stringify(toStorage));
        $("#festName").val("");
        $("#dateDebut").val("");
        $("#dateFin").val("");
        $("#gpsCoords").val("");
        $("#form").css("display","none");
        festival.attrapeNom();
        });

$(".butType").click(function(){
            var type = $(this).attr("id");
            festival.filter(type);
        });
$("#afficheFestivals").click(function(){
    festival.showAll();
});
$("#utilisateur").click(function(){
    $("#blocUtilisateur").fadeToggle(300);
});

$(document).on("change", "#name", function(){
    var name = $("#name").val();
    festival.showByName(name);
})

var dates = new Dates();
