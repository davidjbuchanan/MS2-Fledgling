function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
            center: {lat: 55.8597, lng: -4.2550} /*citycentre*/
            
    });
}


            /*center: {lat: 55.8636, lng: -4.2825} Finnieston-->
            <!--center: {lat: 55.8772, lng: -4.2904} westend-->
            <!--center: {lat: 55.8597, lng: -4.2300} eastend-->
            <!--center: {lat: 55.8588, lng: -4.2489} merchant city needs a zoom in-->
            <!--center: {lat: 55.8430, lng: -4.2636} southside needs a zoom out-->*/



/*
function initMap() {
    var location = document.getElementById("city");
    if (location.active == true){
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
                center: {lat: 55.8597, lng: -4.2550} <!--citycentre-->
        })
    };

    var location = document.getElementById("finn");
    if (location.active == true){
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
                center: {lat: 55.8636, lng: -4.2825} <!--Finnieston-->
        })
    };
}*/