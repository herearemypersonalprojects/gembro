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
            margin-right: 12px;
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

    <script type="text/javascript">
        $(function () {
            $('#city').change(function () {
                $('#street').val("");
                ShowLocation();
            });

            $('#street').blur(function () {
                ShowLocation();
            });

            $
        });
    </script>
</head>
<body>


    <div id="map-canvas"></div>

    <input id="txtPositionY" type="hidden" value="" name="txtPositionY">
    <input id="txtPositionX" type="hidden" value="" name="txtPositionX">

    <div id="save-widget">
        <strong>Cảm ơn bạn đã đóng góp cho cộng đồng</strong>
        <p>Bạn có thể sửa địa chỉ bằng cách di chuyển icon tới đúng vị trí trên bản đồ.</p>
    </div>

    <!--<input id="pac-input" class="controls" type="text" placeholder="Search Box">-->

    <form id = "addNewService" method = "POST">
        <table style = "width: 100%">
        <select id="city" name="city" placeholder="thanh pho">
            <option value="paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="La Courneuve">La Courneuve</option>
            <option value="Auberlliviers">Auberlliviers</option>
        </select>

        <input id="street" name="street" type="text" placeholder="địa chỉ">

        <input id="info" name="info" type="text" placeholder="thông tin dịch vụ">

        <button type="submit" form="addNewService">Gửi đi</button>

    </form>

</body>
</html>

