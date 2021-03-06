function initialize() {
  var myLatlng = new google.maps.LatLng(46,-95);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('google_map'), mapOptions);

  addMarker("border_0", {
      position: new google.maps.LatLng(45.191667,-67.283389),
      map: map,
      title: 'St. Stephen'
  });
  addMarker("border_1", {
      position: new google.maps.LatLng(45.161044,-67.302719),
      map: map,
      title: 'St.Stephen 3rd Bridge'
  });
  addMarker("border_2", {
      position: new google.maps.LatLng(47.360139,-68.328694),
      map: map,
      title: 'Edmundston'
  });
  addMarker("border_3", {
      position: new google.maps.LatLng(46.135206,-67.781322),
      map: map,
      title: 'Woodstock Road'
  });
  addMarker("border_4", {
      position: new google.maps.LatLng(45.005814,-72.141989),
      map: map,
      title: 'Stanstead'
  });
  addMarker("border_5", {
      position: new google.maps.LatLng(45.015431,-73.084769),
      map: map,
      title: 'St-Armand/Philipsburg'
  });
  addMarker("border_6", {
      position: new google.maps.LatLng(45.008842,-73.452294),
      map: map,
      title: 'St-Bernard-de-Lacolle'
  });
  addMarker("border_7", {
      position: new google.maps.LatLng(44.990658,-74.739517),
      map: map,
      title: 'Cornwall'
  });
  addMarker("border_8", {
      position: new google.maps.LatLng(44.733147,-75.457744),
      map: map,
      title: 'Prescott'
  });
  addMarker("border_9", {
      position: new google.maps.LatLng(44.347272,-75.983428),
      map: map,
      title: 'Thousand Island Bridge'
  });
  addMarker("border_10", {
      position: new google.maps.LatLng(46.5084,-84.360717),
      map: map,
      title: 'Sault Ste. Marie'
  });
  addMarker("border_11", {
      position: new google.maps.LatLng(48.607414,-93.401783),
      map: map,
      title: 'Fort Frances Bridge'
  });
  addMarker("border_12", {
      position: new google.maps.LatLng(43.152992,-79.044478),
      map: map,
      title: 'Queenston-Lewiston Bridge'
  });
  addMarker("border_13", {
      position: new google.maps.LatLng(43.090172,-79.067692),
      map: map,
      title: 'Rainbow Bridge'
  });
  addMarker("border_14", {
      position: new google.maps.LatLng(42.906961,-78.905958),
      map: map,
      title: 'Peace Bridge'
  });
  addMarker("border_15", {
      position: new google.maps.LatLng(42.998694,-82.423456),
      map: map,
      title: 'Blue Water Bridge'
  });
  addMarker("border_16", {
      position: new google.maps.LatLng(42.311797,-83.073997),
      map: map,
      title: 'Detroit and Canada Tunnel'
  });
  addMarker("border_17", {
      position: new google.maps.LatLng(45.015431,-73.084769),
      map: map,
      title: 'Ambassador Bridge'
  });
  addMarker("border_18", {
      position: new google.maps.LatLng(49,-97.237433),
      map: map,
      title: 'Emerson'
  });
  addMarker("border_19", {
      position: new google.maps.LatLng(49,-102.552433),
      map: map,
      title: 'North Portal'
  });
  addMarker("border_20", {
      position: new google.maps.LatLng(49,-111.9601),
      map: map,
      title: 'Coutts'
  });
  addMarker("border_21", {
      position: new google.maps.LatLng(49.002403,-122.265347),
      map: map,
      title: 'Abbotsford-Huntingdon'
  });
  addMarker("border_22", {
      position: new google.maps.LatLng(49.002261,-122.485103),
      map: map,
      title: 'Aldergrove'
  });
  addMarker("border_23", {
      position: new google.maps.LatLng(49.00215,-122.735439),
      map: map,
      title: 'Pacific Highway'
  });
  addMarker("border_24", {
      position: new google.maps.LatLng(49.002069,-122.756525),
      map: map,
      title: 'Douglas (Peace Arch)'
  });
  addMarker("border_25", {
      position: new google.maps.LatLng(49.001992,-123.068239),
      map: map,
      title: 'Boundary Bay'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);

function addMarker(name, opts) {
  marker = new google.maps.Marker(opts);

  google.maps.event.addListener(marker, 'click', function() {
    element_to_scroll_to = document.getElementById(name);
    //element_to_scroll_to.scrollIntoView();
    body_element = document.getElementsByTagName("body")[0];
    body_element.scrollTop = element_to_scroll_to.offsetTop - 75;
  });
}