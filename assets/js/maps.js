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
    };  
    map = new google.maps.Map(document.getElementById('map'), myOptions);
};

function changeCenter(center) {
      map.setCenter(center);
};