<#-- @ftlvariable name="serviceMap" type="net.tubizou.gembro.domain.map.ServiceMap" -->

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
            position: absolute;
            right: 96px;
            top: 16px;
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
                //$('#street').val("");
                ShowLocation();
            });

            $('#street').blur(function () {
                ShowLocation();
                $('#save-widget').show();
            });

            $('#submit').click(function() {

                showService();
            });
        });
    </script>
</head>
<body>


    <div id="map-canvas"></div>

    <input id="txtPositionY" type="hidden" value="" name="txtPositionY">
    <input id="txtPositionX" type="hidden" value="" name="txtPositionX">

    <div id="save-widget" style="display: none;">
        <strong>Cảm ơn bạn đã đóng góp cho cộng đồng</strong>
        <p>Bạn có thể sửa địa chỉ bằng cách di chuyển icon tới đúng vị trí trên bản đồ.</p>
    </div>

    <!--<input id="pac-input" class="controls" type="text" placeholder="Search Box">-->

    <form id = "serviceMap" role="serviceMap" name="serviceMap" method = "post">
        <select id="language" name="city" placeholder="ngon ngu">
            <option value="paris">Français</option>
            <option value="Lyon">English</option>
            <option value="La Courneuve" selected>Tiếng Việt</option>
            <option value="Auberlliviers">Tieng Nhat</option>
        </select>

        <select id="review" name="city" placeholder="ngon ngu">
            <option value="paris" selected>Rất tuyệt vời</option>
            <option value="Lyon">Tuyệt vời</option>
            <option value="La Courneuve" >Trung bình</option>
            <option value="Auberlliviers">Kém</option>
            <option value="Auberlliviers">Rất kém</option>
        </select>

        <select id="serviceType" name="serviceType" placeholder="loai dich vu">
            <option value="paris">Du lịch</option>
            <option value="Lyon">Ăn uống</option>
            <option value="Lyon">Mua bán</option>
            <option value="La Courneuve">Hành chính</option>
            <option value="La Courneuve" selected>Tất cả các loại dịch vụ</option>
            <option value="Auberlliviers">Thể thao</option>
            <option value="Auberlliviers">Giáo dục</option>
            <option value="Auberlliviers">Văn hoá - Cộng đồng</option>
        </select>

        <select id="city" name="city" placeholder="thanh pho">
            <option value="paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="La Courneuve" selected>La Courneuve</option>
            <option value="Auberlliviers">Auberlliviers</option>
        </select>

        <input id="street" name="street" type="text" size="30" placeholder="nhập vào số nhà, tên đường phố">

        <input id="info"  name="info" type="text" size="45" placeholder="nhập vào thông tin dịch vụ + đánh giá, nhận xét">

        <button id="submit" type="button">Gửi đi</button>

    </form>

</body>
</html>

