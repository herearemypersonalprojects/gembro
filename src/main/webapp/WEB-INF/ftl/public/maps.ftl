<!DOCTYPE html>
<html>
<head>
    <title>GEMBRO</title>

    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
        html, body, #map-canvas {
            height: 100%;
            margin: 0px;
            padding: 0px
        }

        #save-widget {
            width: 300px;
            box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;
            background-color: white;
            padding: 10px;
            font-family: Roboto, Arial;
            font-size: 13px;
            margin: 15px;
        }

        .controls {
            margin-top: 16px;
            border: 1px solid transparent;
            border-radius: 2px 0 0 2px;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            height: 32px;
            outline: none;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        #pac-input {
            background-color: #fff;
            font-family: Roboto;
            font-size: 15px;
            font-weight: 300;
            margin-left: 12px;
            padding: 0 11px 0 13px;
            text-overflow: ellipsis;
            width: 400px;
        }

        #pac-input:focus {
            border-color: #4d90fe;
        }

        .pac-container {
            font-family: Roboto;
        }

        #type-selector {
            color: #fff;
            background-color: #4d90fe;
            padding: 5px 11px 0px 11px;
        }

        #type-selector label {
            font-family: Roboto;
            font-size: 13px;
            font-weight: 300;
        }

        #target {
            width: 345px;
        }

    </style>

    <title>Places search box</title>

    <script src="/static/jquery-2.1.1.js" type="text/javascript"></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;language=vi&amp;v=3.exp&libraries=places" type="text/javascript"></script>
    <script src="/static/GoogleMapControl.js" type="text/javascript"></script>
    <script src="/static/lang.js" type="text/javascript"></script>


</head>
<body>
    <div id="map-canvas"></div>

    <div id="save-widget">
        <strong>Ket noi cong dong</strong>
        <p>Hãy sửa vị trí tin của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí của tin.</p>
    </div>

</body>
</html>

