function initialize() {
	var mapProp = {
		center: new google.maps.LatLng(37.788890, -122.398104),
		zoom: 5,
		mapTypeId: "roadmap",
		disableDefaultUI: true
		
	}
	var map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
	//Adding Marker to your location-------
	var marker = new google.maps.Marker({
		position: mapProp.center
	})
	marker.setMap(map)
	google.maps.event.addListener(marker, 'click', function() {
		map.setZoom(25)
		map.setCenter(marker.getPosition())
	})
}
 google.maps.event.addDomListener(window, 'load', initialize)