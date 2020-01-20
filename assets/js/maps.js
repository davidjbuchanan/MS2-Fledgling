/*function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {lat: 55.8597, lng: -4.2550}  
    });
}*/


/*center: {lat: 55.8636, lng: -4.2825} Finnieston*/

/*center: {lat: 55.8772, lng: -4.2904} westend*/

/*center: {lat: 55.8597, lng: -4.2300} eastend*/

/*center: {lat: 55.8588, lng: -4.2489} merchant city needs a zoom in*/

/*center: {lat: 55.8430, lng: -4.2636} southside needs a zoom out*/
var map;
var centre = {lat: 55.8597, lng: -4.2550};
var finn = {lat: 55.8636, lng: -4.2825};
var westend = {lat: 55.8772, lng: -4.2904};
var eastend = {lat: 55.8597, lng: -4.2300};
var merchant = {lat: 55.8588, lng: -4.2489};
var southside = {lat: 55.8430, lng: -4.2636};

function initMap() { 
    var myOptions = {
      zoom: 15,
      center: centre
      /*mapTypeId: google.maps.MapTypeId.ROADMAP*/
    };  
    map = new google.maps.Map(document.getElementById('map'), myOptions);
}

function changeCenter(center) {
      map.setCenter(center);
      /*marker.setPosition(center);*/
    }