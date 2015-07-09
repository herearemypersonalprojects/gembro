<#-- @ftlvariable name="serviceMap" type="net.tubizou.gembro.domain.map.ServiceMap" -->

<!DOCTYPE html>
<html>
<head>
    <title>GEMBRO - Ket noi cong dong</title>

    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
        html, body, #map-canvas {
            height: 100%;
            margin: 0px;
            padding: 0px
        }

        #save-widget {
            width: 150px;
            box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;
            padding: 10px;
            font-family: Roboto, Arial;
            font-size: 13px;
            margin: 15px;
            position: absolute;
            right: 96px;
            top: 16px;
        }

        #save-widget1 {
            width: 320px;
            box-shadow: rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px;
            background-color: white;
            padding: 10px;
            font-family: Roboto, Arial;
            font-size: 13px;
            margin: -36px;
            position: absolute;
            right: 54px;
            top: 79px;
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

    <title>Kết nối cộng đồng</title>

    <script src="/static/jquery-2.1.1.js" type="text/javascript"></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false&amp;language=vi&amp;v=3.exp&libraries=places" type="text/javascript"></script>
    <script src="/static/GoogleMapControl.js" type="text/javascript"></script>
    <script src="/static/lang.js" type="text/javascript"></script>
    <link rel="stylesheet" type="text/css" href="/static/style.css">

    <script type="text/javascript">
        $(function () {
            $('#save-widget').click(function() {
                $('#save-widget1').show();
            });

            $('.address').change(function () {
                   ShowLocation();
            });

            $('#city').change(function () {
                //$('#street').val("");
                ShowLocation();
            });

            $('#street').blur(function () {
                ShowLocation();
                $('#save-widget').show();
            });

            $('#addressInput').blur(function () {
                MyShowLocation();
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

    <button id="save-widget" type="button">Thêm địa điểm</button>

    <div id="save-widget1" style="display: none">
        <form id = "newPlace" method="POST">

            <table id="address">
                <!--
                <tr>
                    <td>Chon dat nuoc</td>
                    <td>
                        <select id="country" class="address" name="country" placeholder="Chon dat nuoc">
                            <option value="France" selected>Phap</option>
                            <option value="UK">Anh</option>
                            <option value="Germany">Duc</option>
                            <option value="USA">My</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>Chon thanh pho</td>
                    <td>
                        <select id="city" class="address" name="city" placeholder="Chon thanh pho">
                            <option value="paris">Paris</option>
                            <option value="Lyon">Lyon</option>
                            <option value="La Courneuve" selected>La Courneuve</option>
                            <option value="Auberlliviers">Auberlliviers</option>
                            <option value="London">London</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Berlin">Berlin</option>
                            <option value="NewYork">NewYork</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td>Chon ma so vung</td>
                    <td>
                        <select id="cp" class="address" name="cp" placeholder="Chon ma so vung">
                            <option value="75001">75001</option>
                            <option value="75002">75002</option>
                            <option value="75012">75012</option>
                            <option value="75013">75013</option>
                        </select>
                    </td>

                </tr>

                <tr>
                    <td>Ten duong pho</td>
                    <td>
                        <input id="street" name="street" type="text" size="30" placeholder="nhập vào số nhà, tên đường phố">
                    </td>
                </tr>

                -->
                <p>Bạn có thể dinh vi địa chỉ bằng cách di chuyển icon tới đúng vị trí trên bản đồ.</p>
                <tr>
                    <td>Dia chi</td>
                    <td>
                        <input id="addressInput" name="street" onFocus="geolocate()" type="text"
                               size="40" placeholder="nhập vào số nhà, tên đường phố"></input>
                    </td>




                </tr>

                <tr>
                    <td>Ten dia diem</td>
                    <td>
                        <input id="titleInput" name="title" type="text" size="40" placeholder="nhap vao ten dia diem"></input>
                    </td>
                </tr>

                <tr>
                    <td>Thong tin chi tiet</td>
                    <td>
                        <textarea id="infoInput" name="info" type="text" rows="3" cols="27"
                                  placeholder="nhap thong tin chi tiet dia diem"></textarea>
                    </td>
                </tr>



                <tr>
                    <td class="label">So nha</td>
                    <td class="slimField"><input class="field" id="street_number"
                                                 disabled="true"></input></td>
                </tr>
                <tr>
                    <td class="label">Duong pho</td>
                    <td class="wideField" colspan="2"><input class="field" id="route"
                                                             disabled="true"></input></td>
                </tr>
                <tr>
                    <td class="label">City</td>
                    <td class="wideField" colspan="3"><input class="field" id="locality"
                                                             disabled="true"></input></td>
                </tr>
                <tr>
                    <td class="label">State</td>
                    <td class="slimField"><input class="field"
                                                 id="administrative_area_level_1" disabled="true"></input></td>
                </tr>
                <tr>
                    <td class="label">Zip code</td>
                    <td class="wideField"><input class="field" id="postal_code"
                                                 disabled="true"></input></td>
                </tr>
                <tr>
                    <td class="label">Country</td>
                    <td class="wideField" colspan="3"><input class="field"
                                                             id="country" disabled="true"></input></td>
                </tr>
            </table>


            <!--
            <div id="locationField">
                <textarea rows="1" cols="30" id="autocomplete" name="ReviewTitle" value="" placeholder="Tên địa điểm"
                       onFocus="geolocate()" type="text"></textarea>


            </div>



             <br>
            <textarea name="text" rows="5" cols="40" placeholder="Viết đánh giá của bạn ở đây"></textarea>
            <br>
            Cho điểm:
            <select id="review" name="city placeholder="ngon ngu">
                <option value="paris" selected>Rất tuyệt vời</option>
                <option value="Lyon">Tuyệt vời</option>
                <option value="La Courneuve" >Trung bình</option>
                <option value="Auberlliviers">Kém</option>
                <option value="Auberlliviers">Rất kém</option>
            </select>
            <br>
-->
        </form>
        <strong>Cảm ơn bạn đã đóng góp cho cộng đồng</strong>

    </div>

    <!--<input id="pac-input" class="controls" type="text" placeholder="Search Box">-->

    <form id = "serviceMap" role="serviceMap" name="serviceMap" method = "post">



        <select id="serviceType" name="serviceType" placeholder="loai dich vu">
            <option value="paris">Tìm hoặc cho thuê nhà</option>
            <option value="paris">Du lịch</option>
            <option value="Lyon">Ăn uống</option>
            <option value="Lyon">Mua bán</option>
            <option value="La Courneuve">Hành chính</option>
            <option value="La Courneuve" selected>Tất cả các loại dịch vụ</option>
            <option value="Auberlliviers">Thể thao</option>
            <option value="Auberlliviers">Giáo dục</option>
            <option value="Auberlliviers">Văn hoá - Cộng đồng</option>
            <option value="Auberlliviers">Quan hệ</option>
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

