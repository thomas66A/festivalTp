class Festival {
    
        constructor(){
    
            
            this.$map = $("#map");
            this.$infos = $("#infos");
            this.icon;
            this.$festForm = $("#form");
            this.$festName = $("#festName");
            this.$musiqueType = $("#musiqueType");
            this.$gps = $("#gpsCoords");
            this.$dateStart = $("#dateDebut");
            this.$dateFin = $("#dateFin");
            this.$type = $("#type");

            

            this.markers = [];
            this.main = null;
    
        }
    
        initMap(){
            this.map = new google.maps.Map(this.$map[0], {
                center: {lat: 42.644738, lng: 2.522037},
                zoom: 10
            });
            
            this.main(); 
        }
        addMarker( position, title, type ){
            this.icon = "icon/" + type + ".png";
            var marker = new google.maps.Marker({
                position: position,
                icon:this.icon,
                map: this.map,
                title: title
            });
            marker.type = type;
            this.markers.push( marker );
            return marker;
        }
        addInfos( content, marker ) {
            var infowindow = new google.maps.InfoWindow({
                content: content
            });
            var that = this;
            marker.addListener("click", function(){
                infowindow.open(that.map, marker);
            });
            
        }

        filter( types ){
                for(var marker of this.markers){
                    marker.setVisible(false);
                        if( marker.type == types ) {
                            marker.setVisible(true);
                        }
                    }
                 }
        
}