class Dates {
    
        constructor(){
    
            
            this.$dateDebut = $("#dateDebut");
            this.$dateFin = $("#dateFin");
    
            
    
            this.initPickers();
    
        }
    
        initPickers(){
    
            var options = {
                dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                dayNamesMin : ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
                monthNames : ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
                monthNamesShort : ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
                firstDay : 1,
                minDate : new Date( 2017, 0, 1 ),
                maxDate : new Date( 2018, 11, 31 ),
                dateFormat : "dd/mm/yy",
            };
    
            this.$dateDebut.datepicker( options );
            this.$dateFin.datepicker( options );
    
        }
    }