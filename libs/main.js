
$("#creerFestival").click(function(){
    $("#form").css("display","flex");
});

var festival = new Festival();``
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

};  
    
$("#subFest").click(function(){ 

        var latLng = positionFestival;
        var title = $("#festName").val();
        var type = festival.$type.val();
        var dateDebut = $("#dateDebut").val();
        console.log(dateDebut);
        var dateFin = $("#dateFin").val();
        var marker = festival.addMarker( latLng, title, type );
        var infos = "<div>";
        infos += "<h1>" + title + "</h1>";
        infos += "<h3>Type de musique: " + type + "</h3>";
        infos += "<h4>Debut du festival: " + dateDebut + "</h4>";
        infos += "<h4>Fin du festival" + dateFin + "</h4>";
        infos += "</div>";
        festival.addInfos( infos, marker );
        $("#festName").val("");
        festival.$type.val("Classique");
        $("#dateDebut").val("");
        $("#dateFin").val("");
        $("#gpsCoords").val("");
        $("#form").css("display","none");
        });



var dates = new Dates();
