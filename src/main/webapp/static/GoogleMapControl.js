
var map = undefined;
var marker = null;
var geocoder = null;
var infowindow = null;
var addressReturn;
var latlngReturn;

var lat;
var lng;
// Người dùng thay đổi vị trí bản đồ
var isMakerDrag = false;

// luu tru tam thoi cac vi tri
var lstLatitudes = new Array(140);
var lstLongitudes = new Array(40);
var lstInfos  = new Array(40);
var size = 0;

//Khởi tạo
google.maps.event.addDomListener(window, 'load', initialize);

function showService() {
    size = size + 1;
    lstLatitudes[size] = $('#txtPositionX').val();
    lstLongitudes[size] = $('#txtPositionY').val();
    lstInfos[size] = $('#info').val();

    var idx = size;
    var servicePos = new google.maps.LatLng(lstLatitudes[idx], lstLongitudes[idx]);
    var service = new google.maps.InfoWindow({
        map: map,
        position: servicePos,
        content: lstInfos[idx]
    });

    var createMapUrl = "http://localhost:2011/maps/create?latitude=" + $('#txtPositionX').val() + "&longitude=" + $('#txtPositionY').val() + "&info=" + $('#info').val();

    $.ajax({
        url: createMapUrl, success: function (result) {
            $('#info').val('Creating a new service successfully!');
        }
    });
}

function getServices() {

    $.getJSON('/maps/getServices', function(data){
        $(data).each(function(idx, item){
            var number = 10 + Math.floor(Math.random() * 100);
               // console.log(idx + ': ' + item + ' : ' + item.info + ' : ' + item.latitude + ' : ' + item.longitude);

            var content = item.info + ':  ' + item.address + ', ' + item.city +
                '<li class="pRatng"><img src="http://static.tacdn.com/img2/ratings/traveler/ss5.0.gif" alt="5.0 5 étoiles" class="rsImg"> (<a href="/user/create">' + number + ' avis</a>) </li>' +
                ' <br> <textarea name="text" rows="2" cols="40" placeholder="Bạn nghĩ gì về địa điểm này ?"></textarea> ';
            //'<br><img src="/static/reviews.jpg" height="30" width="60"> ' +
            //'<br><a href="/user/create">Photos</a>&nbsp;&nbsp;&nbsp;&nbsp;     ' +
            //'<a href="/user/create">Video</a>&nbsp;&nbsp;&nbsp;&nbsp;    ' +
            //'<a href="/user/create">Audio</a>'

            var servicePos = new google.maps.LatLng(item.latitude, item.longitude);
            var service = new google.maps.InfoWindow({
                map: map,
                position: servicePos,
                content:  content.substring(0, 50)
            });

        });
    });
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function initialize() {
    try {
        infowindow = new google.maps.InfoWindow();
        var mapOptions = {
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var mapDiv = document.getElementById('map-canvas');

        map = new google.maps.Map(mapDiv, mapOptions);

        // Try HTML5 geolocation
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);

                var pos2 = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude + 0.01);
                infowindow = new google.maps.InfoWindow({
                    map: map,
                    position: pos2,
                    content: 'Ban dang o day.'
                });

                marker = new google.maps.Marker({
                    map: map,
                    position: pos,
                    draggable: true
                });

                // Opens the InfoWindow when marker is clicked.
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });

                map.setCenter(pos);

                /*
                var input = (document.getElementById('pac-input'));
                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);
                */
                var addNewServiceForm = /** @type {HTMLInputElement} */(
                    document.getElementById('serviceMap'));
                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(addNewServiceForm);

                /*
                var addressInput = (document.getElementById('street'));
                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(addressInput);


                var cityInput =(document.getElementById('city'));
                map.controls[google.maps.ControlPosition.TOP_RIGHT].push(cityInput);
                */


                var widgetDiv = document.getElementById('save-widget');
                map.controls[google.maps.ControlPosition.RIGHT].push(widgetDiv);

                geocoder = new google.maps.Geocoder();
                getAddress();

                google.maps.event.addListener(map, 'click', function (event) {
                    placeMarker(event.latLng);
                });
                google.maps.event.addListener(marker, 'dragstart', function () {
                    if (infowindow != null)
                        infowindow.close();
                });
                google.maps.event.addListener(marker, 'dragend', function () {
                    getAddress(true);
                });
                /*
                for (var i = 0; i < 5; i++) {
                    var pos3 = new google.maps.LatLng(
                        position.coords.latitude,
                        position.coords.longitude + 0.004*i);
                    var marker = new google.maps.Marker({
                        position: pos3,
                        map: map
                    });

                    marker.setTitle((i + 1).toString());
                    attachSecretMessage(marker, i);
                }
                */

            }, function() {
                handleNoGeolocation(true);
            });
        } else {
            // Browser doesn't support Geolocation
            handleNoGeolocation(false);
        }

        // hien thi tat ca dich vu tren ban do
        getServices();

    } catch (ex) {
    }



}
function showAlert() {
    window.alert('DIV clicked');
}


// The five markers show a secret message when clicked
// but that message is not within the marker's instance data
function attachSecretMessage(marker, num) {
    var message = ['This', 'is', 'the', 'secret', 'message'];
    var infowindow = new google.maps.InfoWindow({
        content: message[num]
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(marker.get('map'), marker);
    });
}


function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

function initializeAddress(lat, lng, address) {
    try {
        if (lat != "0" && lng != "0") {
            infowindow = new google.maps.InfoWindow();
            var myOptions = {
                zoom: 14,
                center: new google.maps.LatLng(lat, lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
            if (lat == "" || lng == "" || lat == null || lng == null) {
                lat = 21.0295818;
                lng = 105.8504133;
            }
            var myLatlng = new google.maps.LatLng(lat, lng);
            marker = new google.maps.Marker({
                map: map,
                position: myLatlng,
                draggable: true
            });
            map.setCenter(myLatlng);
            google.maps.event.addListener(map, 'click', function (event) {
                placeMarker(event.latLng);
            });
            google.maps.event.addListener(marker, 'dragstart', function () {
                if (infowindow != null)
                    infowindow.close();
            });
            google.maps.event.addListener(marker, 'dragend', getAddress);
            /*bds*/
            var bdstrananh = new google.maps.Marker({
                icon: {
                    path: 'M -3,0 0,-3 3,0 0,3 z',
                    strokeColor: "#cec9c1",
                    scale: 3
                },
                map: map,
                position: new google.maps.LatLng(10.871692, 106.535366)
            });
            google.maps.event.addListener(map, 'zoom_changed', function () {
                var zoom = map.getZoom();
                if (zoom <= 17) {
                    if (zoom == 15) bdstrananh.setMap(map);
                    else bdstrananh.setMap(null);
                } else {
                    bdstrananh.setMap(map);
                }
            });
            var contentString = '<style>a{text-decoration: none; color: blue}</style><div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<strong id="firstHeading" class="firstHeading">Công ty bất động sản Trần Anh</strong>' +
                '<div id="bodyContent">' +
                'phan văn hớn quận 12, 58a cầu Lớn, Xuân Thới Thượng, Hóc Môn, Ho Chi Minh City, Vietnam' +
                '<p><a href="http://datnengiatot.net" target="_blank" rel="nofollow">datnengiatot.net</a></p>' +
                '<p><a href="https://plus.google.com/111846113810994069762/about?socpid=238&socfid=maps_api_v3:smartmapsiw">more info</a></p>' +
                '</div>' +
                '</div>';
            var infowindowbdstrananh = new google.maps.InfoWindow({
                content: contentString
            });
            google.maps.event.addListener(bdstrananh, 'click', function () {
                if (infowindowbdstrananh != null)
                    infowindowbdstrananh.open(map, bdstrananh);
            });
            /*end bds*/
            geocoder = new google.maps.Geocoder();
            showAdd(address);
        } else {
            $("#map_canvas").css('display', 'none');
        }
    } catch (ex) {
        console.log(ex);
    }
}
//Add maker
function placeMarker(location) {
    try {
        marker.setMap(null);
        marker = new google.maps.Marker({
            position: location,
            map: map,
            draggable: true
        });
        google.maps.event.addListener(marker, 'dragstart', function () {
            if (infowindow != null)
                infowindow.close();
        });
        google.maps.event.addListener(marker, 'dragend', getAddress);
        map.setCenter(location);
        getAddress();
    } catch (ex) {
        console.log(ex);
    }
}
function showProjectLocation(lat, lng, name) {
    marker.setMap(null);
    map.setCenter(new google.maps.LatLng(lat, lng));
    document.getElementById('txtPositionX').value = lat;
    document.getElementById('txtPositionY').value = lng;
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lng),
        draggable: true
    });
    if (lat != '' && lng != '' && lat != 0 && lng != 0) {
        geocoder.geocode({ 'latLng': new google.maps.LatLng(lat, lng) }, function (results2, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results2 != null && results2[0] != null) {
                    addressReturn = results2[0].formatted_address;
                    if (infowindow != null) {
                        infowindow.setContent("<span id='address'><b>Địa chỉ : </b>" + name + "</span>");
                        infowindow.open(map, marker);
                    }
                }
            } else {
//alert("Geocoder failed due to: " + status);
            }
        });
    }
    else {
        showLocation(name);
    }
    google.maps.event.addListener(marker, 'dragstart', function () {
        if (infowindow != null)
            infowindow.close();
    });
    google.maps.event.addListener(marker, 'dragend', getAddress);
}

function ShowLocation() {
    var address = "";
    var cityCode = $('#city').val();
    var street = $('#street').val();

    address = street + ", ";

    if (cityCode != '' && cityCode != 0) {
        address = address + $('#city').children('option:selected').text() + ", ";
    }
    address = address + "France";
//initialize($('#hdfLatitude').val(), $('#hdfLongitude').val());
    var mySplitResult = strLatLng().split(",");
    $("#hddLatitude").val(mySplitResult[0]);
    $("#hddLongtitude").val(mySplitResult[1]);
    showLocation(address);
    $('#mapinfo').show();
}

function showLocation(address) {
    if (address != null && address != '') {
        var add = address.split(',');
        if (add.length >= 3) {
            if ($.trim(add[add.length - 3]).toLowerCase() == "thanh xuân") {
                add[add.length - 3] = "Thanh Xuân Bắc";
            }
        }
        address = add.join(',');
        address = address.replace('Tp.HCM', bds_lang.GoogleMaps.TpHCM);
        if (marker != null) marker.setMap(null);
        geocoder.geocode({ 'address': address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var lat = '';
                var lng = '';
                if (address.indexOf("Trường Sa") >= 0) {
                    lat = 9.482959063037656;
                    lng = 115.33383353124998;
                    addressReturn = address;
                } else {
                    lat = results[0].geometry.location.lat();
                    lng = results[0].geometry.location.lng();
                    addressReturn = results[0].formatted_address;
                }
                var latlng = new google.maps.LatLng(lat, lng);
                map.setCenter(results[0].geometry.location);
                marker = new google.maps.Marker({
                    map: map,
                    position: latlng,
                    draggable: true
                });
                document.getElementById('txtPositionX').value = lat;
                document.getElementById('txtPositionY').value = lng;

                if (infowindow != null) {
                    infowindow.setContent("<span id='address'><b>" + bds_lang.GoogleMaps.Address + " : </b>" + address + "</span>");
                    infowindow.open(map, marker);
                }
            } else {
                console.log("Geocode was not successful for the following reason: " + status);
                if (address.indexOf(',') > 0) {
                    var add = address.substring(address.indexOf(',') + 1);
                    showLocation(add);
                }
            }
            google.maps.event.addListener(marker, 'dragstart', function () {
                if (infowindow != null)
                    infowindow.close();
            });
            google.maps.event.addListener(marker, 'dragend', function () {
                getAddress(true);
            });
        });
// ThanhDT Remove Marker drag status
        isMakerDrag = false;
    } else {
        alert(bds_lang.GoogleMaps.AddressIncorrect);
    }
}
function getAddress(makerDrag) {
    try {
        var point = marker.getPosition();

        var lat = point.lat();
        var lng = point.lng();
        document.getElementById('txtPositionX').value = lat;
        document.getElementById('txtPositionY').value = lng;
        var latlng = new google.maps.LatLng(lat, lng);
        //console.log(lat + "," + lng);
        geocoder.geocode({ 'latLng': latlng }, function (results2, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results2 != null && results2[0] != null) {
                    addressReturn = results2[0].formatted_address;
                    if (infowindow != null) {
                        infowindow.setContent("<span id='address'><b>" + bds_lang.GoogleMaps.Address + " : </b>" + results2[0].formatted_address + "</span>");
                        infowindow.open(map, marker);
                    }
                }
            } else {
//alert("Geocoder failed due to: " + status);
            }
        });
        map.setCenter(point);
// ThanhDT add for marker drag
        if (typeof (makerDrag) != 'undefined') {
            isMakerDrag = makerDrag;
        }
    } catch (ex) {
        console.log(ex);
    }
}
function showAdd(address) {
    try {
        var point = marker.getPosition();
//alert(point);
        var lat = point.lat();
        var lng = point.lng();
        document.getElementById('txtPositionX').value = lat;
        document.getElementById('txtPositionY').value = lng;
        var latlng = new google.maps.LatLng(lat, lng);
//alert(latlng);
        geocoder.geocode({ 'latLng': latlng }, function (results2, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results2[0]) {
                    if (infowindow != null) {
                        if (address != '') {
                            infowindow.setContent("<span id='address'><b>" + bds_lang.GoogleMaps.Address + " : </b>" + address + "</span>");
                        } else {
                            infowindow.setContent("<span id='address'><b>" + bds_lang.GoogleMaps.Address + " : </b>" + results2[0].formatted_address + "</span>");
                        }
                        infowindow.open(map, marker);
                    }
                    addressReturn = results2[0].formatted_address;
                }
            }
            else {
//alert("Geocoder failed due to: " + status);
            }
        });
        map.setCenter(point);
    } catch (ex) {
        console.log(ex);
    }
}
//Lấy địa chỉ
function strAddress() {
    return addressReturn;
}
// Lấy kinh độ, vĩ độ
function strLatLng() {
    try {
        var lat = $('#txtPositionX').val();
        var lng = $('#txtPositionY').val();

        return lat + "," + lng;
    } catch (ex) {
        console.log(ex);
    }
}
