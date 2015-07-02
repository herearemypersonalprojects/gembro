
</div>
<div style="margin-top: 10px; clear: both; float: left;">
    Nếu gặp bất kỳ khó khăn gì trong việc đăng ký, đăng nhập, đăng tin hay trong việc
sử dụng website nói chung, Quý vị hãy liên hệ ngay với chúng tôi theo số đt: <strong>0936.365.158</strong> hoặc email: <a href="mailto:hotro@batdongsan.com.vn"><strong>hotro@batdongsan.com.vn</strong></a>
để được trợ giúp
</div>
</div>
</div>
<input type="hidden" name="ctl00$ctl33$ctl00$hddLatitude" id="hddLatitude" />
    <input type="hidden" name="ctl00$ctl33$ctl00$hddLongtitude" id="hddLongtitude" />
    <input type="hidden" name="ctl00$ctl33$ctl00$hddSessionId" id="hddSessionId" />
    <input type="hidden" name="ctl00$ctl33$ctl00$hddIsMarkerDrag" id="hddIsMarkerDrag" />
    <script src="http://content.batdongsan.com.vn/HandlerWeb/ProductEditServiceHandler.ashx?type=prepairbds1&permission=256&v=127" type="text/javascript"></script>
    <script src="http://content.batdongsan.com.vn/HandlerWeb/ProductEditServiceHandler.ashx?type=prepairbds2&permission=256&v=127" type="text/javascript"></script>
    <script src="http://content.batdongsan.com.vn/HandlerWeb/ProductEditServiceHandler.ashx?type=prepairbds3&permission=256&v=127" type="text/javascript"></script>
    <script src="http://content.batdongsan.com.vn/HandlerWeb/ProductEditServiceHandler.ashx?type=prepairbds4&permission=256&v=127" type="text/javascript"></script>
    <script type="text/javascript">
var vip4 = 4;
var vip0 = 0;
var cityList = [];
function VipChange() {
    var vipType = $('#ddlVipType').children('option:selected').val();
    var str = '';
    switch (vipType) {
        case '5':
            str = '<strong>Tin thường</strong>: Là loại tin đăng bằng chữ <font color="#009AD2">màu xanh</font>, khung <font color="#009AD2">màu xanh</font>';
            break;
        case '4':
            str = '<strong>Vip ưu đãi</strong> là loại vip đặc biệt, được hiển thị trong vòng 3 tháng, mỗi tuần sẽ được up tự động 1 lần. Tuần đầu tiên tin sẽ được hiển thị dưới hình thức Vip 1';
            break;
        case '3':
            str = '<strong>Tin Vip 3</strong>: Là loại tin đăng bằng chữ <font color="#FF6600">thường màu cam,</font> khung <font color="#009AD2">màu xanh </font> và luôn nằm dưới tin Vip 2 nhưng luôn luôn hiển thị trên tin thường.';
            break;
        case '2':
            str = '<strong>Tin Vip 2</strong>: Là loại tin đăng bằng chữ <font color="#FF6600"><strong>IN HOA MÀU CAM</strong></font>, khung <font color="#009AD2"><strong>màu xanh</strong></font>, nằm bên dưới tin VIP 1 và ở trên các tin vip 3';
            break;
        case '1':
            str = '<strong>Tin Vip 1</strong>: Là loại tin được đăng tiêu đề bằng chữ <font color="#DF1B23"> <strong>IN HOA MÀU ĐỎ</strong></font>, khung <font color="#DF1B23"><strong>màu đỏ,</strong></font> nằm bên dưới tin VIP ĐẶC BIỆT và ở trên các tin vip 2';
            break;
        case '0':
            str = '<strong>Vip đặc biệt</strong>: Là loại tin được đăng tiêu đề bằng chữ <font color="#DF1B23"> <strong>IN HOA MÀU ĐỎ</strong></font>, khung <font color="#DF1B23"><strong>màu đỏ,</strong></font> hiển thị ở top đầu trang tin và được hưởng nhiều ưu tiên nhất';
            break;
    }
    $('#vip_cofig_info_explain').html(str);
    $('#vip_cofig_info_explain').show();
//TODO: show khuyen mai mien phi.
//GetAbsCost(2);
}
function LoadProductType() {
    $('#ddlProductType').append('<option value="0">-- Hình thức --</option>');
    for (var i = 0; i < cateList.length; i++) {
        $('#ddlProductType').append('<option value="' + cateList[i].id + '">' + cateList[i].name + '</option>');
    }
}
function LoadVipType() {
    for (var i = 0; i < vipTypeList.length; i++) {
        if (i == 0) {
            $('#ddlVipType').append('<option value="' + vipTypeList[i].id + '">' + vipTypeList[i].name + '</option>');
        } else {
            $('#ddlVipType').append('<option value="' + vipTypeList[i].id + '">' + vipTypeList[i].name + '</option>');
        }
    }
}
function LoadProductCate(ptype) {
    for (var i = 0; i < cateList.length; i++) {
        var cate = cateList[i];
        if (cate.id == ptype) {
            $('#ddlProductCate').html('');
            $('#ddlProductCate').append('<option value="0">-- Phân mục --</option>');
            for (var j = 0; j < cate.children.length; j++) {
                $('#ddlProductCate').append('<option value="' + cate.children[j].id + '">' + cate.children[j].name + '</option>');
            }
            $('#ddlPriceType').html('');
            for (var j = 0; j < cate.prices.length; j++) {
                if (cate.id == 38 && (cate.prices[j].id == 3 || cate.prices[j].id == 4 || cate.prices[j].id == 5 || cate.prices[j].id == 8 || cate.prices[j].id == 9) || cate.id == 49 && (cate.prices[j].id == 3 || cate.prices[j].id == 4))
                    continue;
                $('#ddlPriceType').append('<option value="' + cate.prices[j].id + '">' + cate.prices[j].name + '</option>');
            }
        }
    }
}
function LoadCity() {
    $('#ddlCity').append('<option value="0">-- Tỉnh/thành phố --</option>');
    for (var i = 0; i < cityList.length; i++) {
        $('#ddlCity').append('<option value="' + cityList[i].code + '">' + cityList[i].name + '</option>');
    }
}
function LoadDistrict(citycode) {
    $('#ddlDistrict').html('');
    $('#ddlDistrict').append('<option value="0">-- Quận/huyện --</option>');
    for (var i = 0; i < cityList.length; i++) {
        var city = cityList[i];
        if (city.code == citycode) {
            for (var j = 0; j < city.district.length; j++) {
                $('#ddlDistrict').append('<option value="' + city.district[j].id + '">' + city.district[j].name + '</option>');
            }
        }
    }
}
function LoadWard(valcity, valdistrict) {
    for (var i = 0; i < cityList.length; i++) {
        if (cityList[i].code == valcity) {
            for (var j = 0; j < cityList[i].district.length; j++) {
                if (valdistrict == cityList[i].district[j].id) {
                    $('#ddlWard').html('');
                    $('#ddlWard').append('<option value="0">-- Phường/xã --</option>');
                    for (var m = 0; m < cityList[i].district[j].ward.length; m++) {
                        $('#ddlWard').append('<option value="' + cityList[i].district[j].ward[m].id + '" rel="' + cityList[i].district[j].ward[m].pre + '">' + cityList[i].district[j].ward[m].name + '</option>');
                    }
                    $('#ddlStreet').html('');
                    $('#ddlStreet').append('<option value="0">-- Đường/phố --</option>');
                    for (var m = 0; m < cityList[i].district[j].street.length; m++) {
                        $('#ddlStreet').append('<option value="' + cityList[i].district[j].street[m].id + '" rel="' + cityList[i].district[j].street[m].pre + '">' + cityList[i].district[j].street[m].name + '</option>');
                    }
                    $('#ddlProject').html('');
                    $('#ddlProject').append('<option value="0" lat="0" lng="0">-- Dự án --</option>');
                    for (var m = 0; m < cityList[i].district[j].project.length; m++) {
                        $('#ddlProject').append('<option value="' + cityList[i].district[j].project[m].id + '" lat="' + cityList[i].district[j].project[m].lat + '" lng="' + cityList[i].district[j].project[m].lng + '">' + cityList[i].district[j].project[m].name + '</option>');
                    }
                }
            }
        }
    }
}
function LoadDirection() {
    for (var i = 0; i < directionList.length; i++) {
        $('#ddlHomeDirection').append('<option value="' + directionList[i].value + '">' + directionList[i].name + '</option>');
        $('#ddlBaconDirection').append('<option value="' + directionList[i].value + '">' + directionList[i].name + '</option>');
    }
}
function ShowLocation() {
    var address = "";
    var cityCode = $('#ddlCity').val();
    var distId = $('#ddlDistrict').val();
    var street = $('#ddlStreet').val();
    var ward = $('#ddlWard').val();
    if (street != '' && street != 0) {
        address = $('#ddlStreet').children('option:selected').text() + ", ";
    }
    if (ward != '' && ward != 0) {
        address = address + $('#ddlWard').children('option:selected').text() + ", ";
    }
    if (distId != '' && distId != 0) {
        address = address + $('#ddlDistrict').children('option:selected').text() + ", ";
    }
    if (cityCode != '' && cityCode != 0) {
        address = address + $('#ddlCity').children('option:selected').text() + ", ";
    }
    address = address + "Việt Nam";
//initialize($('#hdfLatitude').val(), $('#hdfLongitude').val());
    var mySplitResult = strLatLng().split(",");
    $("#hddLatitude").val(mySplitResult[0]);
    $("#hddLongtitude").val(mySplitResult[1]);
    showLocation(address);
    $('#mapinfo').show();
}
function setTotalRePrice() {
    var productType = $('#ddlProductType').children('option:selected').val();
    var price = $('#txtPrice').val();
    var area = $('#txtArea').val();
    var unitprice = $('#ddlPriceType').val();
    $.ajax({
        type: 'GET',
        url: '/HandlerWeb/ProductEditServiceHandler.ashx',
        data: { type: 'GetTotalPrice', cost: price, prType: productType, area: area, priceCode: unitprice },
        dataType: 'html',
        success: function (data) {
            if (data != null) {
                $('#_totalPrice').html(data);
            }
        }
    });
}
function GetAbsCost(t) {
    var now = new Date();
    var sDate = new Date(VNDateTimeToUTCDateTime($('#txtStartDate').val(), '/'));
    var eDate = new Date(VNDateTimeToUTCDateTime($('#txtEndDate').val(), '/'));
    sDate.setHours(now.getHours());
    sDate.setMinutes(now.getMinutes());
    sDate.setSeconds(now.getSeconds());
    eDate.setHours(now.getHours());
    eDate.setMinutes(now.getMinutes());
    eDate.setSeconds(now.getSeconds());
    if (sDate > eDate) {
        var tmpDate = eDate;
        eDate = sDate;
        sDate = tmpDate;
        $('#txtEndDate').val(UTCDateTimeToVNDateTime(eDate, '/'));
        $('#txtStartDate').val(UTCDateTimeToVNDateTime(sDate, '/'));
    }
    var totalday = GetTotalDay(sDate, eDate); //function in common.js
    var vindex = parseInt($('#ddlVipType').val());
    var unitprice = unitPriceList[vindex];
    var cost = 0;
    if (vindex == vip4) {
        cost = unitPriceListNew[vindex];
    } else {
        cost = totalday * unitPriceListNew[vindex];
    }
    var cityCode = $('#ddlCity').val();
    if (cityCode != '0' && cityCode != 'HN' && cityCode != 'SG' && cityCode != 'BD' && cityCode != 'VT') {
        cost = cost * 0.95;
    }
    cost = Math.round(cost * 1000);
    $('#liCost').show();
    $('#lblCost').html(GetMoneyText(cost));
}
function ResetEndDate() {
    if ($('#txtStartDate').val().length == 0) {
        $('#txtStartDate').val(UTCDateTimeToVNDateTime(new Date(), '/'));
    }
    if ($('#txtEndDate').val().length == 0) {
        var tmpdate = new Date();
        tmpdate.setMonth(tmpdate.getMonth() + 1);
        $('#txtEndDate').val(UTCDateTimeToVNDateTime(tmpdate, '/'));
    }
    var sDate = new Date(VNDateTimeToUTCDateTime($('#txtStartDate').val(), '/'));
    var eDate = new Date(VNDateTimeToUTCDateTime($('#txtEndDate').val(), '/'));
    if ($('#ddlVipType').val() == (vip4) + "") {
        $('#txtEndDate').attr('disabled', 'true');
        var newDate = new Date(sDate);
        newDate.setMonth(newDate.getMonth() + 3);
        $('#txtEndDate').val(UTCDateTimeToVNDateTime(newDate, '/'));
    } else {
        if ($('#txtEndDate').attr('disabled') != undefined) {
            var newDate = new Date(sDate);
            newDate.setMonth(newDate.getMonth() + 1);
            $('#txtEndDate').val(UTCDateTimeToVNDateTime(newDate, '/'));
        }
        $('#txtEndDate').removeAttr('disabled');
    }
    var newMaxDate = new Date(sDate);
    var newMinDate = new Date(sDate);
    newMaxDate.setMonth(newMaxDate.getMonth() + 6);
    var newMaxStartDate = new Date(eDate);
    if ($('#ddlVipType').val() == '0') {
        newMinDate.setDate(newMinDate.getDate() + 10);
        newMaxStartDate.setDate(newMaxStartDate.getDate() - 10);
    }
    else {
        newMinDate.setDate(newMinDate.getDate() + 5);
        newMaxStartDate.setDate(newMaxStartDate.getDate() - 5);
    }
    if (newMaxStartDate < new Date()) {
        newMaxStartDate = new Date();
        eDate = newMinDate;
        $('#txtEndDate').val(UTCDateTimeToVNDateTime(eDate, '/'));
    }
    $("#txtEndDate").datepicker("option", "maxDate", newMaxDate);
    $("#txtEndDate").datepicker("option", "minDate", newMinDate);
    $("#txtStartDate").datepicker("option", "maxDate", newMaxStartDate);
}
</script>
<script type="text/javascript">
    function showMessage(ctr, msg) {
        if ($(ctr).parent().find('.errorMessage').length > 0) {
            $(ctr).parent().find('.errorMessage').html(msg);
            $(ctr).parent().find('.errorMessage').show();
        }
    }
function hideMessage(ctr) {
    if ($(ctr).parent().find('.errorMessage').length > 0) {
        $(ctr).parent().find('.errorMessage').hide();
    }
}
var focused = false;
function setFocus(ctr) {
    if (focused == false) {
        focused = true;
        $(ctr).focus();
    }
//c/onsole.log(ctr);
}
function SubmitForm() {
    $('#hddVipType').val($('#ddlVipType').val());
    var error = false;
    focused = false;
    try {
        $('input[type=text]').each(function () {
            hideMessage(this);
            if ($(this).val().indexOf('>') >= 0 || $(this).val().indexOf('<') >= 0) {
//console.log($(this).val());
                showMessage(this, 'Bạn không thể nhập vào ký tự &gt; hoặc &lt;');
                error = true;
                setFocus(this);
//c/onsole.log(this);
                return;
            }
            if ($(this).hasClass('required') == true) {
                if ($(this).val().length == 0) {
                    showMessage(this, 'Bạn cần nhập thông tin');
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
            if ($(this).attr('maxlength') != undefined) {
                var maxlength = parseInt($(this).attr('maxlength'));
                if (maxlength < $(this).val().length) {
                    showMessage(this, 'Số ký tự cần nhỏ hơn ' + maxlength);
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
            if ($(this).attr('minlength') != undefined) {
                var minlength = parseInt($(this).attr('minlength'));
                if (minlength > $(this).val().length) {
                    showMessage(this, 'Số ký tự cần lớn hơn ' + minlength);
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
            if ($(this).attr('minword') != undefined) {
                var minword = parseInt($(this).attr('minword'));
                if (minword > wordCount($(this).val())) {
                    showMessage(this, 'Số ký từ nhỏ hơn ' + minword);
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
            if ($(this).attr('maxword') != undefined) {
                var maxword = parseInt($(this).attr('maxword'));
                if (maxword < wordCount($(this).val())) {
                    showMessage(this, 'Số ký từ lớn hơn ' + maxword);
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
            if ($(this).attr('email') != undefined) {
                var input = $(this).val();
                var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(.[a-zA-Z]{2,6}){0,1}$/;
                if (input != '') {
                    if (!regex.test(input)) {
                        showMessage(this, "Vui lòng nhập Email");
                        $(this).next().show();
                        error = true;
                        setFocus(this);
//c/onsole.log(this);
                        return;
                    }
                }
            }
// check number insert
            if ($(this).attr('numberonly') != undefined && $(this).val() != "" && !($(this).is(':hidden'))) {
                var reg = /^\d+$/;
// integer
                if ($(this).attr('numberonly') == '1' && !reg.test($(this).val())) {
                    showMessage(this, "Bạn cần nhập số.");
                    error = true;
                    setFocus(this);
                    return;
                }
// double or float
                if ($(this).attr('numberonly') == '2' && (isNaN($(this).val()) || !parseFloat($(this).val()) > 0)) {
                    showMessage(this, "Bạn cần nhập số.");
                    error = true;
                    setFocus(this);
                }
            }
        });
        $('textarea').each(function () {
            hideMessage(this);
            if ($(this).val().indexOf('>') >= 0 || $(this).val().indexOf('<') >= 0) {
                showMessage(this, 'Bạn không thể nhập vào ký tự &gt; hoặc &lt;');
                error = true;
                setFocus(this);
//c/onsole.log(this);
                return;
            }
            if ($(this).hasClass('required') == true) {
                if ($(this).val() == '') {
                    showMessage(this, 'Bạn cần nhập thông tin');
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
            if ($(this).attr('maxlength') != undefined) {
                var maxlength = parseInt($(this).attr('maxlength'));
                if (maxlength < $(this).val().length) {
                    showMessage(this, 'Số ký tự cần nhỏ hơn ' + maxlength);
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
            if ($(this).attr('minlength') != undefined) {
                var minlength = parseInt($(this).attr('minlength'));
                if (minlength > $(this).val().length) {
                    showMessage(this, 'số ký tự cần lớn hơn ' + minlength);
                    error = true;
                    setFocus(this);
//co/nsole.log(this);
                    return;
                }
            }
            if ($(this).attr('minword') != undefined) {
                var minword = parseInt($(this).attr('minword'));
                if (minword > wordCount($(this).val())) {
                    showMessage(this, 'Số từ nhỏ hơn ' + minword);
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
            if ($(this).attr('maxword') != undefined) {
                var maxword = parseInt($(this).attr('maxword'));
                if (maxword < wordCount($(this).val())) {
                    showMessage(this, 'Số từ lớn hơn ' + maxword);
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
        });
        $('select').each(function () {
            hideMessage(this);
            if ($(this).hasClass('required') == true) {
                if ($(this).val() == null || $(this).val().length == 0 || $(this).val() == '0') {
                    showMessage(this, 'Bạn cần chọn thông tin');
                    error = true;
                    setFocus(this);
//c/onsole.log(this);
                    return;
                }
            }
        });
        var mySplitResult = strLatLng().split(",");
        $("#hddLatitude").val(mySplitResult[0]);
        $("#hddLongtitude").val(mySplitResult[1]);
// Set User change map position
        if (isMakerDrag)
            $("#hddIsMarkerDrag").val(1);
        else
            $("#hddIsMarkerDrag").val(0);
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(.[a-zA-Z]{2,6}){0,1}$/;
        var isReceiEmail = $('#chkReceiEmail').attr('checked');
        hideMessage($('#txtBrEmail'));
        if (isReceiEmail == 'true' || isReceiEmail == 'checked') {
            if ($('#txtBrEmail').val().length > 0) {
            } else {
                showMessage($('#txtBrEmail'), 'Bạn cần nhập Email');
                error = true;
                setFocus($('#txtBrEmail'));
            }
        }
        if ($('#txtBrEmail').val().length > 0) {
            if (!regex.test($('#txtBrEmail').val())) {
                showMessage($('#txtBrEmail'), "Vui lòng nhập đúng định dạng Email");
                error = true;
                setFocus($('#txtBrEmail'));
            }
        }
        if ($('#txtPrice').val().length == 0) {
            if ($('#ddlPriceType').val() != '0') {
                setFocus($('#txtPrice'));
                error = true;
            }
        } else {
            if ($('#ddlPriceType').val() == '0') {
                setFocus($('#ddlPriceType'));
                error = true;
            }
        }
        if ($('#txtArea').val().length > 0) {
            var area = parseFloat($('#txtArea').val());
            if (area <= 0) {
                showMessage($('#txtArea'), "DT phải > 0");
                setFocus($('#txtArea'));
                error = true;
            }
        }
        if ($('#txtWidth').val().length > 0) {
            var area = parseFloat($('#txtWidth').val());
            if (area <= 0) {
                showMessage($('#txtWidth'), "Mặt tiền phải > 0");
                setFocus($('#txtWidth'));
                error = true;
            }
        }
        if ($('#txtLandWidth').val().length > 0) {
            var area = parseFloat($('#txtLandWidth').val());
            if (area <= 0) {
                showMessage($('#txtLandWidth'), "Đường vào phải > 0");
                setFocus($('#txtLandWidth'));
                error = true;
            }
        }
        if ($('#txtFloorNumbers').val().length > 0) {
            var area = parseFloat($('#txtFloorNumbers').val());
            if (area <= 0) {
                showMessage($('#txtFloorNumbers'), "Số tầng phải > 0");
                setFocus($('#txtFloorNumbers'));
                error = true;
            } else if (area > 255) {
                showMessage($('#txtFloorNumbers'), "Số tầng phải <= 255");
                setFocus($('#txtFloorNumbers'));
                error = true;
            }
        }
        if ($('#txtRoomNumber').val().length > 0) {
            var area = parseFloat($('#txtRoomNumber').val());
            if (area <= 0) {
                showMessage($('#txtRoomNumber'), "Số phòng ngủ phải > 0");
                setFocus($('#txtRoomNumber'));
                error = true;
            } else if (area > 255) {
                showMessage($('#txtRoomNumber'), "Số phòng ngủ phải <= 255");
                setFocus($('#txtRoomNumber'));
                error = true;
            }
        }
        if ($('#txtToiletNumber').val().length > 0) {
            var area = parseFloat($('#txtToiletNumber').val());
            if (area <= 0) {
                showMessage($('#txtToiletNumber'), "Số toilet phải > 0");
                setFocus($('#txtToiletNumber'));
                error = true;
            } else if (area > 255) {
                showMessage($('#txtToiletNumber'), "Số toilet phải <= 255");
                setFocus($('#txtToiletNumber'));
                error = true;
            }
        }
        if ($("#txtBrPhone").val().length != 0 && $("#txtBrPhone").val().length < 8) {
            showMessage($('#txtBrPhone'), "Số ký tự không được nhỏ hơn 8");
            error = true;
            setFocus($('#txtBrPhone'));
        }
        if (error == true)
            $('#finalError').html('Có các thông tin bị lỗi!');
    } catch (ex) {
//c/onsole.log(ex);
        error = true;
    }
    return error == false;
}
</script>
<script type="text/javascript">
    function CountLimitChar(obj, clpleng, focus) {
        if (clpleng == undefined) { clpleng = 0 }
        if (focus == undefined) { focus = 0 }
        var lngth = $(obj).attr('maxlength') - ($(obj).val().trim().length + clpleng);
        if (lngth == 0) lngth = 1;
        var colorCount = '#055699';
        if (($(obj).val().trim().length + clpleng) < $(obj).attr('minlength') || ($(obj).val().trim().length + clpleng) > $(obj).attr('maxlength')) {
            colorCount = 'red';
            if (focus == 1) {
                $('body,html').animate({ scrollTop: 0 }, 400);
                $(obj).focus();
                $(obj).parent().find('.errorMessage').show().html('<p style="color: red">Vui lòng nhập tiêu đề tin đăng của bạn. Tối thiểu là ' + $(obj).attr('minlength') + ' ký tự và tối đa là ' + $(obj).attr('maxlength') + ' ký tự.</p>');
            }
        } else {
            $(obj).parent().find('.errorMessage').hide();
        }
        if (lngth > -1) {
            if ($('.' + $(obj).attr('id') + '_count').length <= 0) {
                $(obj).after('<span class="' + $(obj).attr('id') + '_count' + '" style="float: left;color: ' + colorCount + '; margin-left: 10px;">' + (lngth - 1) + '/' + $(obj).attr('maxlength') + '</span>');
            } else {
                $('.' + $(obj).attr('id') + '_count').attr('style', 'float: left;margin-left: 10px;color: ' + colorCount);
                $('.' + $(obj).attr('id') + '_count').html((lngth - 1) + '/' + $(obj).attr('maxlength'));
            }
        }
    }
/// Load auto address
/// Author: ThanhDT
function LoadAutoAddress() {
    if ($('#ddlCity').val() == '' || $('#ddlDistrict').val() == '') {
        $('#txtAddress').val('');
        return;
    }
    var arrAdd = [];
    arrAdd.unshift($('#ddlCity option:selected').text());
    arrAdd.unshift($('#ddlDistrict option:selected').text());
    if ($('#ddlProject').val() != '' && $('#ddlProject').val() != '0') {
        var projectName = $('#ddlProject option:selected').text();
        if (projectName.toLowerCase().indexOf('dự án') != 0)
            arrAdd.unshift('Dự án ' + projectName);
        else arrAdd.unshift(projectName);
    }
    else if ($('#ddlStreet').val() != '' && $('#ddlStreet').val() != '0') {
        var selectedOpt = $('#ddlStreet option:selected');
        var streetName = selectedOpt.attr('rel');
        if (streetName != '') streetName = streetName + ' ' + selectedOpt.text();
        else streetName = selectedOpt.text();
        arrAdd.unshift(streetName);
    }
    else if ($('#ddlWard').val() != '' && $('#ddlWard').val() != '0') {
        var selectedOpt = $('#ddlWard option:selected');
        var wardName = selectedOpt.attr('rel');
        if (wardName != '') wardName = wardName + ' ' + selectedOpt.text();
        else wardName = selectedOpt.text();
        arrAdd.unshift(wardName);
    }
    $('#txtAddress').val(arrAdd.join(', '));
}
$(function () {
    registerEventForBackMail();
    $('.countTypeLength').bind('keydown', function () {
        CountLimitChar($(this));
    });
    $('.countTypeLength').change(function () {
        CountLimitChar($(this), 0, 1);
    });
    $('.countTypeLength').bind('paste', function (e) {
        var clp = (e.originalEvent || e).clipboardData;
        CountLimitChar($(this), clp.getData('text/plain').length);
    });
    initialize('21.02894860978742', '105.85244722590335');
    if (typeof cityListOTher1 != 'undefined')
        cityList = $.merge(cityList, cityListOTher1);
    if (typeof cityListOTher2 != 'undefined')
        cityList = $.merge(cityList, cityListOTher2);
    if (typeof cityListOTher3 != 'undefined')
        cityList = $.merge(cityList, cityListOTher3);
    if (typeof cityListOTher4 != 'undefined')
        cityList = $.merge(cityList, cityListOTher4);
//refreshNewCaptcha('img_CAPTCHA_RESULT_314');
    $('.errorMessage').hide();
    LoadProductType();
    LoadVipType();
    LoadDirection();
    LoadCity();
    $('#ddlProductType').change(function () {
        var val = $(this).val();
        $('#ddlProductCate').html('');
        $('#ddlProductCate').append('<option value="0">-- Phân mục --</option>');
        $('#ddlPriceType').html('');
        LoadProductCate(val);
        $('#hddProductType').val(val);
        $('#hddProductCate').val($('#ddlProductCate').val());
        $('#hddPriceType').val($('#ddlPriceType').val());
        HideOptions();
    });
    $('#ddlProductCate').change(function () {
        $('#hddProductCate').val($(this).val());
        HideOptions();
        focusProjectByDesciption();
    });
    $('#ddlCity').change(function () {
        var val = $('#ddlCity').val();
        $('#hddCity').val(val);
        LoadDistrict(val);
        $('#hddDistrict').val($('#ddlDistrict').val());
        resetLocation();
        ShowLocation();
        GetAbsCost(1);
    });
    $('#ddlDistrict').change(function () {
        var valcity = $('#ddlCity').val();
        var valdistrict = $('#ddlDistrict').val();
        $('#hddDistrict').val(valdistrict);
        resetLocation();
        LoadWard(valcity, valdistrict);
        LoadAutoAddress();
        ShowLocation();
// Focus project
        focusProjectByDesciption();
    });
    $('#ddlWard').change(function () {
        $('#hddWard').val($('#ddlWard').val());
        if ($('#ddlProject option:selected').val() == 0) ShowLocation();
        if (($('#ddlProject').val() == '0' || $('#ddlProject').val() == '') && ($('#ddlStreet').val() == '' || $('#ddlStreet').val() == '0'))
            LoadAutoAddress();
    });
    $('#ddlStreet').change(function () {
        $('#hddStreet').val($('#ddlStreet').val());
        if ($('#ddlProject option:selected').val() == 0) ShowLocation();
        if ($('#ddlProject').val() == '0' || $('#ddlProject').val() == '')
            LoadAutoAddress();
    });
    $('#ddlProject').change(function () {
        $('#hddProject').val($('#ddlProject').val());
        LoadAutoAddress();
    });
    $("#ddlVipType").change(function () {
        $('#hddVipType').val($('#ddlVipType').val());
        ResetEndDate();
        VipChange();
        GetAbsCost(1);
    });
    $("#txtStartDate").change(function () {
        ResetEndDate();
        GetAbsCost(2);
    });
    $("#txtEndDate").change(function () {
        ResetEndDate();
        GetAbsCost(2);
    });
    $("#txtStartDate").datepicker({
        dateFormat: 'dd/mm/yy',
        minDate: new Date()
    });
    $("#txtStartDate").keypress(function (event) {
        event.preventDefault();
    });
    $("#txtEndDate").datepicker({
        dateFormat: 'dd/mm/yy'
    });
    $("#txtEndDate").keypress(function (event) {
        event.preventDefault();
    });
    $('#ddlPriceType').change(function () {
        $('#txtPrice').next().html('');
        if ($(this).val() == '0') {
            $('#txtPrice').val('');
        } else if ($('#txtPrice').val().length == 0) {
            $('#txtPrice').next().html('Bạn cần nhập giá');
        }
        $('#hddPriceType').val($(this).val());
        setTotalRePrice();
    });
    $('#txtPrice').change(function () {
        $('#txtPrice').next().html('');
        if ($(this).val().length == 0) {
            if ($('#ddlPriceType').val() != '0') {
                $('#txtPrice').next().html('Bạn cần nhập giá');
            }
        } else {
            if ($('#ddlPriceType').val() == '0') {
                $('#txtPrice').next().html('Đ/v giá không được là Thỏa Thuận');
            }
        }
        setTotalRePrice();
    });
    $('input[numbersonly=true]').each(function () {
        $(this).keydown(function (event) {
            var decimal = $(this).attr('decimal') == 'true';
            var retval = numbersonly(this, event, decimal);
            if (retval == false) {
                event.preventDefault();
            }
        });
    });
    $('#txtArea').change(function () {
        setTotalRePrice();
    });
    $('#ddlBaconDirection').change(function () {
        $('#hddBaconDirection').val($(this).val());
    });
    $('#ddlHomeDirection').change(function () {
        $('#hddHomeDirection').val($(this).val());
    });
    $('.has-help').hover(function () {
        $('.helpMessage[rel=' + $(this).attr('id') + ']').show();
    }, function () {
        $('.helpMessage[rel=' + $(this).attr('id') + ']').hide();
    });
// Focus project
    $('#txtProductTitle').on("input propertychange", function () {
        focusProjectByDesciption();
    });
    $('#txtDescription').on("input propertychange", function () {
        focusProjectByDesciption();
    });
//-------------------------
    var currProductType = $('#hddProductType').val();
    if (currProductType != undefined) {
        $('#ddlProductType').val(currProductType);
        LoadProductCate(currProductType);
        var currUnitPrice = $('#hddPriceType').val();
        if (currUnitPrice != undefined)
            $('#ddlPriceType').val(currUnitPrice);
        var currProductCate = $('#hddProductCate').val();
        if (currProductCate != undefined) {
            $('#ddlProductCate').val(currProductCate);
        }
    }
    var currCity = $('#hddCity').val();
    if (currCity != undefined) {
        $('#ddlCity').val(currCity);
        LoadDistrict(currCity);
        var currDistrict = $('#hddDistrict').val();
        if (currDistrict != undefined) {
            $('#ddlDistrict').val(currDistrict);
            LoadWard(currCity, currDistrict);
            var currWard = $('#hddWard').val();
            var currStreet = $('#hddStreet').val();
            if (currWard != undefined) {
                $('#ddlWard').val(currWard);
            }
            if (currStreet != null) {
                $('#ddlStreet').val(currStreet);
            }
        }
        ShowLocation();
    }
    $('#ddlProject').change(function () {
        var address = "";
        var cityCode = $('#ddlCity').val();
        var distId = $('#ddlDistrict').val();
        var street = $('#ddlStreet').val();
        var ward = $('#ddlWard').val();
        var projectId = $(this).val();
        if (street != "0") {
            address = $('#ddlStreet option:selected').text() + ", ";
        }
        if (ward != "0") {
            address = address + $('#ddlWard option:selected').text() + ", ";
        }
        if (distId != "0") {
            address = address + $('#ddlDistrict option:selected').text() + ", ";
        }
        if (cityCode != "") {
            address = address + $('#ddlCity option:selected').text() + ", ";
        }
        if (projectId != '' && projectId != 0) {
            address = $(this).find('option:selected').text() + ", " + address;
        }
        address = address + "Việt Nam";
        initialize('', '');
        showProjectLocation($(this).find('option:selected').attr('lat'), $(this).find('option:selected').attr('lng'), address);
    });
    var currRoomNumber = $('#hddRoomNumber').val();
    if (currRoomNumber != undefined)
        $('#ddlRoomNumber').val(currRoomNumber);
    var currFloorNumber = $('#hddFloorNumber').val();
    if (currFloorNumber != undefined)
        $('#ddlFloorNumber').val(currFloorNumber);
    var currToiletNumber = $('#hddToiletNumber').val();
    if (currToiletNumber != undefined)
        $('#ddlToiletNumber').val(currToiletNumber);
    var currBaconDirection = $('#hddBaconDirection').val();
    if (currBaconDirection != undefined)
        $('#ddlBaconDirection').val(currBaconDirection);
    var currHomeDirection = $('#hddHomeDirection').val();
    if (currHomeDirection != undefined)
        $('#ddlHomeDirection').val(currHomeDirection);
    var currVipType = $('#hddVipType').val();
    if (currVipType != undefined)
        $('#ddlVipType').val(currVipType);
    ResetEndDate();
    GetAbsCost(2);
    $('#ddlVipType').val(5);
    $('#ddlVipType').trigger('change');
});
function HideOptions() {
//Bán và cho thuê căn hộ chung cư - Mặt tiền/Số tầngĐường vào
    if ($('#ddlProductCate').val() == 324 || $('#ddlProductCate').val() == 326) {
        $('.spMatTien').hide();
        $('.spDuongVao').hide();
        $('.spSoTang').hide();
        $('.spSoPhongNgu').show();
        $('.spToilet').show();
        $('.spBanCong').show();
        $('.spNoiThat').show();
    } //Bán đất - Số phòng ngủ/Số tầng/Toilets/Ban công/Nội thất //Bán đất nền dự án - Số phòng ngủ/Số tầng/Toilets/Ban công/Nội thất
    else if ($('#ddlProductType').val() == 38 && ($('#ddlProductCate').val() == 40 || $('#ddlProductCate').val() == 283)) {
        $('.spSoPhongNgu').hide();
        $('.spSoTang').hide();
        $('.spToilet').hide();
        $('.spBanCong').hide();
        $('.spNoiThat').hide();
        $('.spMatTien').show();
        $('.spDuongVao').show();
    } //Bán và cho thuê kho, nhà xưởng - Số phòng ngủ/Số tầng/Ban công
    else if ($('#ddlProductCate').val() == 45 || $('#ddlProductCate').val() == 53) {
        $('.spSoPhongNgu').hide();
        $('.spSoTang').hide();
        $('.spBanCong').hide();
        $('.spMatTien').show();
        $('.spDuongVao').show();
        $('.spToilet').show();
        $('.spNoiThat').show();
    } //Cho thuê văn phòng - Số phòng ngủ //Cho thuê cửa hàng, kiot - Số phòng ngủ
    else if ($('#ddlProductType').val() == 49 && ($('#ddlProductCate').val() == 50 || $('#ddlProductCate').val() == 55)) {
        $('.spSoPhongNgu').hide();
        $('.spMatTien').show();
        $('.spDuongVao').show();
        $('.spSoTang').show();
        $('.spToilet').show();
        $('.spBanCong').show();
        $('.spNoiThat').show();
    } else {
        $('.spMatTien').show();
        $('.spDuongVao').show();
        $('.spSoPhongNgu').show();
        $('.spSoTang').show();
        $('.spToilet').show();
        $('.spBanCong').show();
        $('.spNoiThat').show();
    }
}
// Author: BichTV
// Register event for receiver back email
function registerEventForBackMail() {
// Check load data
    showHideReceiEmail();
    $("#txtBrEmail").keyup(function () {
        showHideReceiEmail();
    });
    $("#txtBrEmail").on("input propertychange", function () {
        showHideReceiEmail();
    });
    $("#lblchkReceiEmail").click(function () {
        if (!IsEmail($("#txtBrEmail"))) {
            alert("Email không đúng, mời bạn vui lòng nhập email.");
            $("#txtBrEmail").focus();
        }
    });
}
function showHideReceiEmail() {
    if (IsEmail($("#txtBrEmail"))) {
        $("#chkReceiEmail").prop("disabled", false);
    } else {
        $("#chkReceiEmail").prop("disabled", true);
        $("#chkReceiEmail").prop("checked", false);
    }
}
//Validate email
function IsEmail(control) {
    var input = $(control).val();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(.[a-zA-Z]{2,6}){0,1}$/;
    if (input != '') {
        if (regex.test(input)) {
            return true;
        }
    }
    return false;
}
// check typing is number key
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
// Get project Id, project nam contain in Text
function GetProjectIdInText(textSearch) {
    if (textSearch.length > 0) {
        textSearch = textSearch.toLowerCase();
        var listProjects = $("#ddlProject option");
        if (listProjects.length > 0) {
            for (var i = 0; i < listProjects.length; i++) {
                if ($(listProjects[i]).attr("value") != "" && $(listProjects[i]).attr("value") != "0") {
                    if (textSearch.indexOf($(listProjects[i]).text().toLowerCase()) != -1) {
                        return $(listProjects[i]).attr("value");
                    }
                }
            }
        }
    }
    return "0";
}
var listCateAllowFocus = ["324", "325", "40", "326", "50"];
// Focus to project
function focusProjectByDesciption()
{
    var cateId = $('#ddlProductCate').val();
    if (cateId != undefined && cateId != '' && cateId != '0' && $.inArray(cateId, listCateAllowFocus) != -1)
    {
        var projectId = GetProjectIdInText($('#txtProductTitle').val());
        if (projectId == "0") {
            projectId = GetProjectIdInText($('#txtDescription').val());
        }
        if (projectId != "0")
        {
            $("#ddlProject").val(projectId);
            $('#hddProject').val($('#ddlProject').val());
            LoadAutoAddress();
            ShowProjectLocation($('#ddlProject'));
        }
    }
}
function ShowProjectLocation(obj) {
    var address = "";
    var cityCode = $('#ddlCity').val();
    var distId = $('#ddlDistrict').val();
    var street = $('#ddlStreet').val();
    var ward = $('#ddlWard').val();
    var projectId = $(obj).val();
    if (street != '' && street != 0) {
        address = $('#ddlStreet').children('option:selected').text() + ", ";
    }
    if (ward != '' && ward != 0) {
        address = address + $('#ddlWard').children('option:selected').text() + ", ";
    }
    if (distId != '' && distId != 0) {
        address = address + $('#ddlDistrict').children('option:selected').text() + ", ";
    }
    if (cityCode != "") {
        address = address + $('#ddlCity').children('option:selected').text() + ", ";
    }
    if (projectId != '' && projectId != 0) {
        address = $(obj).find('option:selected').text() + ", " + address;
    }
    address = address + " Việt Nam";
    initialize('', '');
    showProjectLocation($(obj).find('option:selected').attr('lat'), $(obj).find('option:selected').attr('lng'), address);
}
function resetLocation()
{
    $('#ddlWard option').each(function () {
        if ($(this).val() > 0) {
            $(this).remove();
        }
    });
    $('#ddlStreet option').each(function () {
        if ($(this).val() > 0) {
            $(this).remove();
        }
    });
    $('#ddlProject option').each(function () {
        if ($(this).val() > 0) {
            $(this).remove();
        }
    });
    $('#hddWard').val($('#ddlWard').val());
    $('#hddStreet').val($('#ddlStreet').val());
    $('#hddProject').val($('#ddlProject').val());
}
</script>
</div>
<style type="text/css">
.greenbox {
    background-color: #319c00;
    border: 1px solid #33691b;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    margin: 10px 0;
    padding: 5px 10px;
}
#adsnote ul, .adsul {
    list-style-image: url("http://file4.batdongsan.com.vn/images/icon-check.png");
    margin-left: 50px;
}
#adsnote ul li, .adsul li {
    padding: 3px 0;
}
</style></div>
</div></div>
</div>
<div id="RightMainContent" class="body-right">
    <div class="container-common">
    <div id="ctl28_HeaderContainer" class="box-header">
    <div class="name_tit" align="center">
    <div>Hướng dẫn đăng tin</div>
</div>
</div>
<div id="ctl28_BodyContainer" class="bor_box">
    <div class="html-content">
    <style type="text/css">
.boxtext { display:block; margin: 0 10px 10px 0; padding: 10px;}
.boxtext .line-hr{border-top:1px solid #cccccc; line-height:1px; height:1px; margin: 2px 0 1px 0;}
.Emph{color:Red;}
.boxtext ul {margin: 0 0 0 5px;padding-left: 5px;}
.boxtext ul li{font-size:8px;}
#intro h3{line-height:18px;}</style>
<div class="boxtext">
    <ul>
    <li>
    <div>
    Th&ocirc;ng tin c&oacute; dấu (<span class="Emph">*</span>) l&agrave; bắt buộc.</div>
</li>
<li>
<div>
Kh&ocirc;ng gộp nhiều bất động sản trong một tin rao.</div>
</li>
<li>
<div>
Kh&ocirc;ng đăng lại tin đ&atilde; đăng tr&ecirc;n www.batdongsan.com.vn.</div>
</li>
</ul>
<div class="line-hr">
    &nbsp;</div>
<ul>
<li>
<div>
N&ecirc;n sử dụng tr&igrave;nh duyệt <span class="Emph">FireFox 3.0, IE7</span> trở l&ecirc;n hoặc <span class="Emph">Google Chrome</span> để việc đăng tin v&agrave; truy cập website được thuận lợi.</div>
</li>
<li>
<div>
Để qu&aacute; tr&igrave;nh đăng tin v&agrave; duyệt nhanh hơn, xin lưu &yacute;: <span class="Emph">g&otilde; tiếng việt c&oacute; dấu v&agrave; kh&ocirc;ng viết tắt</span>...</div>
</li>
</ul>
</div>
</div>
</div>
<div id="ctl28_FooterContainer">
    </div>
    </div>
    <div style="clear: both; margin-bottom: 10px;">
    </div>
    <div class="html-content">
    <div style="padding: 0 5px;">
    <div class="html-content">
    <h3 style="color:#319C00; line-height:18px; font-size: 15px; margin-bottom:10px;">
    Bạn c&oacute; biết nơi rao vặt nh&agrave; đất hiệu quả nhất?</h3>
<div style="font-size:14px;text-align:justify;">
    Với hơn <span style="color:Red;font-size:14px;">100 000</span> lượt truy cập mỗi ng&agrave;y, Batdongsan.com.vn đ&atilde; đạt mức tăng trưởng 300% chỉ trong 9 th&aacute;ng đầu năm 2011 v&agrave; tiếp tục khẳng định vị thế l&agrave; nơi rao vặt nh&agrave; đất, quảng c&aacute;o nh&agrave; đất hiệu quả nhất hiện nay. Rao vặt nh&agrave; đất tr&ecirc;n Batdongsan.com.vn l&agrave; phương &aacute;n tối ưu nhất cho nhu cầu b&aacute;n, cho thu&ecirc; nh&agrave; đất của Qu&yacute; vị.</div>
</div>
</div>
</div>
<div style="clear:both;"></div>
    <div class="container-default">
    <div id="ctl35_BodyContainer">
    <div class="enterprise-rightContent" style="max-width: 240px;">
    <div class="rc11">
    <div class="title-style">
    <h4>
    Nạp tiền bằng thẻ cào</h4>
</div>
</div>
<div class="rc12">
    <div style="text-align: center;">
    </div>
    <div align="center">
    <img src="http://file4.batdongsan.com.vn/images/ihb.jpg" alt="Thanh toán qua thẻ cào IHB">
    </div>
    <div style="width: 100%;">
    <ul>
    <li>
    Điện thoại&nbsp;(<font
color="red">*</font>)
<br>
<input name="ctl00$ctl35$ctl00$txtPhoneNumber" type="text" maxlength="20" id="ctl35_ctl00_txtPhoneNumber" style="width:97%;" />
    <span id="ctl35_ctl00_RequiredFieldValidator1" style="color:Red;display:none;">*</span>
    </li>
    <li>
    Loại thẻ&nbsp;(<font
color="red">*</font>)
<br>
<select name="ctl00$ctl35$ctl00$ddlCardType" id="ctl35_ctl00_ddlCardType" style="width:99%;">
    <option selected="selected" value="VMS">Mobifone</option>
    <option value="VNP">Vinaphone</option>
    <option value="VTT">Viettel</option>
    <option value="FPT">FPT Gate</option>
</select>
</li>
<li>
Mã thẻ&nbsp;(<font
color="red">*</font>)
<br>
<input name="ctl00$ctl35$ctl00$txtCardCode" type="text" maxlength="20" id="ctl35_ctl00_txtCardCode" style="width:97%;" />
    <span id="ctl35_ctl00_RequiredFieldValidator2" style="color:Red;display:none;">*</span>
    </li>
    <li id="serial">
    Seri thẻ&nbsp;(<font
color="red">*</font>)
<br>
<input name="ctl00$ctl35$ctl00$txtCardSerial" type="text" maxlength="20" id="ctl35_ctl00_txtCardSerial" style="width:97%;" />
    <span id="ctl35_ctl00_RequiredFieldValidator3" style="color:Red;display:none;">*</span>
    </li>
    <li>
    Nội dung giao dịch:
    <br>
<textarea name="ctl00$ctl35$ctl00$txtContent" rows="4" cols="31" id="ctl35_ctl00_txtContent" spellcheck="false" style="width:97%;">
    </textarea>
    </li>
    <li style="text-align: center;">
    <input type="hidden" name="ctl00$ctl35$ctl00$hfCustomerId" id="ctl35_ctl00_hfCustomerId" value="0" />
    <input type="submit" name="ctl00$ctl35$ctl00$btnConfirm" value="Thực hiện" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ctl35$ctl00$btnConfirm&quot;, &quot;&quot;, true, &quot;1&quot;, &quot;&quot;, false, false))" id="btnConfirm" class="button-blue" style="width:80px;" />
    </li>
    <li>
    <span id="ctl35_ctl00_Label1" style="font-style:italic;">( Lưu ý : giá trị tiền nạp sẽ bằng 90% mệnh giá thẻ .Ví dụ thẻ 100.000 đ sẽ được nạp 90.000 đ vào tài khoản. )</span>
</li>
</ul>
</div>
</div>
</div>
<script type="text/javascript" language="javascript">
    function processingToggle() {
        $('#btnConfirm').val('Đang xử lý...');
        $('#btnConfirm').attr('disabled', true);
    }
var txtDescription = 'ctl35_ctl00_txtContent';
function hilightText(control, text) {
    $("#" + control).select();
    if ($("#" + control).val() == text) {
        $("#" + control).val("");
    }
}
function resetText(control, text) {
    if ($("#" + control).val() == "") {
        $("#" + control).val(text);
    }
}
$(document).ready(function () {
    $('#' + txtDescription).val('Ví dụ: Anh Hùng chuyển tiền thanh toán VIP 1 cho em Hồng (hoặc cho mã tin...)');
});
$('#' + txtDescription).click(function () {
    hilightText(txtDescription, 'Ví dụ: Anh Hùng chuyển tiền thanh toán VIP 1 cho em Hồng (hoặc cho mã tin...)');
});
$('#' + txtDescription).blur(function () {
    resetText(txtDescription, 'Ví dụ: Anh Hùng chuyển tiền thanh toán VIP 1 cho em Hồng (hoặc cho mã tin...)');
});
</script></div>
</div></div>
<div class="clear">
    </div>
    <div id="BreakcrumdBottom">
    <div class="html-content">
    <div>
    <h4 style="font-size: 16px; font-style:italic; margin-bottom: 10px;">
    &Yacute; kiến của kh&aacute;ch h&agrave;ng đăng tin, quảng c&aacute;o tr&ecirc;n Batdongsan.com.vn</h4>
<div style="padding: 0 50px; margin-bottom: 20px;">
    &Ocirc;ng Lại Văn Tư - Trưởng ph&ograve;ng Kinh doanh C&ocirc;ng ty Dịch vụ Địa ốc ACB:
    <div style="margin: 5px 0px;">
    Trước đ&acirc;y ch&uacute;ng t&ocirc;i thường <strong>đăng tin rao vặt nh&agrave; đất</strong> l&ecirc;n nhiều tờ b&aacute;o hoặc website kh&aacute;c nhau nhưng giờ ch&uacute;ng t&ocirc;i chủ yếu chỉ sử dụng Batdongsan.com.vn v&igrave; hiệu quả mang lại của phi&ecirc;n bản mới rất tốt, lượng kh&aacute;ch h&agrave;ng của t&ocirc;i tăng l&ecirc;n đ&aacute;ng kể, việc mua b&aacute;n trở n&ecirc;n thuận lợi hơn...</div>
</div>
<div style="margin-bottom:10px;color:#319C00; font-size: 18px; text-align:center; font-weight:bold;">
    Rao vặt nh&agrave; đất tại Hải Ph&ograve;ng, Vũng T&agrave;u, Đồng Nai, B&igrave;nh Dương, Đ&agrave; Nẵng, Cần Thơ...</div>
</div>
</div>
<div style="clear:both;"></div></div>
<div class="banner-bottom">
    <div id="SubBottomLeftMainContent" style="float: left; width: 560px"></div>
    <div id="SubBottomRightMainContent" style="float: left; width: 430px;
margin-left: 5px"></div>
</div>
<div id="boxLinkFooter_boxLink" class="footer-link-other boxlink-footer">
    <ul><li><a href="/khu-thuong-mai-dich-vu-cau-giay/grand-plaza-pj384">Grand Plaza</a></li><li><a href="/ban-can-ho-chung-cu-discovery-complex">Discovery Complex</a></li><li><a href="/ban-can-ho-chung-cu-phuc-thinh-tower">Chung cư Phúc Thịnh</a></li><li><a href="/cho-thue-can-ho-chung-cu-vincom-village">Biệt thự vincom village</a></li><li><a href="/ban-can-ho-chung-cu-khu-do-thi-moi-duong-noi">Bán chung cư Dương Nội</a></li><li><a href="/ban-can-ho-chung-cu-vp5-linh-dam">VP5 Linh Đàm</a></li><li><a href="/khu-can-ho-quan-2/tropic-garden-pj765">Tropic Garden</a></li><li><a href="/ban-can-ho-chung-cu-mulberry-lane">Mulberry Lane</a></li><li><a href="/khu-can-ho-quan-7/him-lam-riverside-pj360">Him Lam Riverside</a></li><li><a href="/khu-do-thi-moi-binh-chanh/happy-city-khu-do-thi-hanh-phuc-pj766">Happy City</a></li></ul><ul><li><a href="/khu-phuc-hop-thanh-xuan/golden-land-pj741">Golden Land</a></li><li><a href="/ban-dat-nen-du-an-golden-bay">Golden Bay</a></li><li><a href="/ban-can-ho-chung-cu-emerald">Emerald</a></li><li><a href="/ban-can-ho-chung-cu-dolphin-plaza">Dolphin Plaza</a></li><li><a href="/khu-do-thi-moi-tay-ho/khu-do-thi-nam-thang-long-ciputra-ha-noi-pj2">Ciputra</a></li><li><a href="/ban-can-ho-chung-cu-khu-do-thi-moi-duong-noi">Chung cư Dương Nội</a></li><li><a href="/nha-dat-ban-bac-ninh">Nhà đất Bắc Ninh</a></li><li><a href="/ban-can-ho-chung-cu-usilk-city">Usilk City</a></li><li><a href="/ban-can-ho-chung-cu-khu-do-thi-kim-van-kim-lu-golden-silk">Kim Văn Kim Lũ</a></li><li><a href="/ban-can-ho-chung-cu-ehome-4">EHome 4</a></li></ul><ul><li><a href="/ban-can-ho-chung-cu-golden-land">Chung cư Golden Land</a></li><li><a href="/ban-can-ho-chung-cu-celadon-city">Celadon City</a></li><li><a href="/ban-can-ho-chung-cu-sunrise-city">Căn hộ Sunrise City</a></li><li><a href="/nha-dat-ban-thai-nguyen">Nhà đất Thái Nguyên</a></li><li><a href="/khu-thuong-mai-dich-vu-long-bien/vincom-center-long-bien-pj994">Vincom Long Bien</a></li><li><a href="/ban-can-ho-chung-cu-sunview-1-2">Sunview Town</a></li><li><a href="/ban-can-ho-chung-cu-times-city">Chung cư Times City</a></li><li><a href="/ban-can-ho-chung-cu-chung-cu-golden-west-le-van-thiem">Chung cư Golden West</a></li><li><a href="/ban-can-ho-chung-cu-golden-palace">Chung cư Golden Palace</a></li><li><a href="/ban-can-ho-chung-cu-discovery-complex">Chung cư Discovery Complex</a></li></ul><ul><li><a href="/nha-dat-ban-nam-dinh">Nhà đất Nam Định</a></li><li><a href="/nha-dat-ban-hai-phong">Nhà đất Hải Phòng</a></li><li><a href="/nha-dat-ban-hai-duong">Nhà đất Hải Dương</a></li><li><a href="/nha-dat-ban-can-tho">Nhà đất Cần Thơ</a></li><li><a href="/khu-do-thi-moi-long-bien/vincom-village-pj761">Vincom Village</a></li><li><a href="/khu-phuc-hop-binh-thanh/saigon-pearl-pj84">Saigon Pearl</a></li><li><a href="/ban-can-ho-chung-cu-khu-can-ho-ehome-3">EHome 3</a></li><li><a href="/tags/cho-thue/Sang-quan-cafe">Sang quán café</a></li><li><a href="/khu-phuc-hop-cau-giay/khu-phuc-hop-mandarin-garden-pj612">Mandarin Garden</a></li><li><a href="/khu-can-ho-tu-liem/golden-palace-pj720">Golden Palace</a></li></ul><ul><li><a href="/tags/cho-thue/Saigon-square">Saigon square</a></li><li><a href="/khu-du-lich-nghi-duong-nha-trang-kh/vinpearl-resort-spa-pj638">Vinpearl</a></li><li><a href="/ban-can-ho-chung-cu-the-garden">The Garden</a></li><li><a href="/khu-phuc-hop-quan-7/sunrise-city-pj527">Sunrise City</a></li><li><a href="/ban-can-ho-chung-cu-khu-do-thi-ecopark">Ecopark</a></li><li><a href="/ban-can-ho-chung-cu-vp5-linh-dam">Chung cư VP5 Linh Đàm</a></li><li><a href="/cho-thue-can-ho-chung-cu-keangnam-hanoi-landmark-tower">Keangnam</a></li><li><a href="/ban-can-ho-chung-cu-khu-do-thi-kim-van-kim-lu-golden-silk">Chung cư Kim Văn Kim Lũ</a></li><li><a href="/ban-can-ho-chung-cu-times-city">Times City</a></li><li><a href="/ban-can-ho-chung-cu-royal-city">Royal City</a></li></ul>
</div>
<script type="text/javascript">
if ($("#boxLinkFooter_boxLink").height() >= 240) { $("#boxLinkFooter_boxLink").css("height", "240px"); $("#boxLinkFooter_boxLink").css("overflow", "hidden") }
</script>
<style type="text/css">
.footer-bottom-top-1 a {
    white-space:nowrap;
}
</style>
<div class="footer">
    <div class="footer-bottom">
    <div class="clearboth pad-bot-10" >
    <div class='footer-nothome'>
    <div id="footerBottom_pnHome" class="footer-bottom-top-1">
    <a href="/" rel="nofollow">Trang chủ</a>
</div>
<div class="footer-bottom-top-1">
    <a href="/gioi-thieu" rel="nofollow">Giới thiệu</a>
</div>
<div class="footer-bottom-top-1">
    <a href="/dieu-khoan-thoa-thuan" rel="nofollow">Điều khoản thỏa thuận</a>
</div>
<div class="footer-bottom-top-1">
    <a href="/quy-dinh-su-dung" rel="nofollow">Quy chế hoạt động</a>
</div>
<div class="footer-bottom-top-1">
    <a href="/bao-gia-quang-cao" rel="nofollow">Báo giá & hỗ trợ</a>
</div>
<div class="footer-bottom-top-1">
    <a href="/nhung-cau-hoi-thuong-gap" rel="nofollow">Những câu hỏi thường gặp</a>
</div>
<div class="footer-bottom-top-1">
    <a href="/tuyen-dung" rel="nofollow">Tuyển Dụng</a>
</div>
<div class="footer-bottom-top-1">
    <a href="/lien-he" rel="nofollow">Liên hệ</a>
</div>
<div class="footer-bottom-top-1">
    <a href="/ve-batdongsancomvn">Về Batdongsan.com.vn</a>
</div>
<div class="footer-bottom-top-1" style="border-right:none;">
    <a href="/rss" rel="nofollow">Rss</a>
    </div>
    <div class="clear">
    </div>
    </div>
    <div class="clear">
    </div>
    </div>
    <div class="inter" id="inter" style="height:22px;">
    <div id="title">
    International</div>
    <ul id="country">
    <li>
    <a target="_blank" href="http://www.rumah.com" title="Indonesia Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/indonesia.jpg" alt="Indonesia Real Estate"/>Indonesia</a></li>
<li>
<a target="_blank" href="http://www.ddproperty.com" title="Thailand Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/thailand.jpg" alt="Thailand Real Estate"/>Thailand</a></li>
<li>
<a target="_blank" href="http://www.homeguru.com.my" title="Malaysia Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/malaysia.jpg" alt="Malaysia Real Estate"/>Malaysia</a></li>
<li>
<a target="_blank" href="http://www.propertyguru.com.sg/" title="Singapore Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/singapore.jpg" alt="Singapore Real Estate"/>Singapore</a>
    </li>
    <li>
    <a target="_blank" href="http://www.28hse.com/en/" title="Hong Kong Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/hongkong.png" alt="Hong Kong"/>Hong Kong</a>
</li>
<li>
<a target="_blank" href="http://www.immobiliare.it/" style="width:100%; float:left;" rel="nofollow" title="Italy Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/italy.png" alt="Italy"/>Italy</a>
    </li>
    <li>
    <a target="_blank" href="http://www.luxuryestate.com/" style="width:100%; float:left;" title="Luxury homes">
    <img src="http://file4.batdongsan.com.vn/images/earth.png" alt="Italy"/>Italy</a>
    </li>
    <li>
    <a target="_blank" href="http://www.propertyfinder.co.tz/" style="width:100%; float:left;" title="Tanzania Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/tanzania.jpg" alt="Tanzania Real Estate"/>Tanzania</a>
    </li>
    <li>
    <a target="_blank" href="http://aqarmap.com/" style="width:100%; float:left;" title="Egypt Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/egypt.jpg" alt="Egypt Real Estate"/>Egypt</a>
    </li>
    <li>
    <a target="_blank" href="http://american-european.net" title="Costa Rica Real Estate">
    <img src="http://file4.batdongsan.com.vn/images/costa-rica.jpg" alt="Costa Rica Real Estate"/>Costa Rica</a>
</li>
<li>
<a target="_blank" href="http://www.malimalihome.net/" title="Macau Estate">
    <img src="http://file4.batdongsan.com.vn/images/Icons/macau.jpg" alt="Macau Real Estate"/>Macau</a>
    </li>
    </ul>
    </div>
    <div class="footer-bottom-end">
    <div class="footer-bottom-end-row1" style="padding-bottom: 10px; color:#000;">
    <strong style="font-size: 1.2em;">Công ty Cổ phần Đầu tư và Công nghệ Đại Việt</strong></div>
<div class="footer-bottom-end-row1" style="font-weight: bold; color: #555754">
    Copyright © 2007 - 2015 Batdongsan.com.vn. ® Ghi rõ nguồn "Batdongsan.com.vn" khi
phát hành lại thông tin từ website này.</div>
<div class="footer-bottom-end-row1" style="color: #555754">
    Giấy chứng nhận ĐKKD số 0104630479 do Sở Kế hoạch & Đầu tư TP.Hà Nội cấp</div>
<div class="footer-bottom-end-row1" style="color: #555754">
    Giấy phép số 3399/GP-STTTT do Sở Thông tin và Truyền thông Hà Nội cấp</div>
<div class="footer-bottom-end-row1" style="color: #555754">
    Fax: 043.941.0964 - Email: hotro@batdongsan.com.vn | cskh@batdongsan.com.vn
<a rel="nofollow" href="ymsgr:sendim?bds_hotro&amp;m=Xin chao!" title="Chat với bds_hotro" style="background-image:url(http://file4.batdongsan.com.vn/images/iconym.png);height: 17px;width: 58px;display: inline-block; text-decoration: none;">&nbsp;
</a>
<a rel="nofollow" href="skype:cskh.batdongsan?chat" title="Chat với cskh.batdongsan" style="text-decoration: none;">
    <img src="http://file4.batdongsan.com.vn/images/skype.png" alt="skype" style="vertical-align: bottom; height: 20px;" />
    </a>
    </div>
    <div class="footer-bottom-end-row1" style="color: #555754; position: relative;">
    Phát triển bởi Daiviet Software Jsc <a style="color: #555754" href='http://daivietgroup.net' target="_blank">http://daivietgroup.net</a>
<div style="position: absolute; right: 20px; bottom: 0;">
    <a href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=5488" target="_blank" rel="nofollow">
    <img src="http://file4.batdongsan.com.vn/images/dangkyBCT.jpg" alt="Đã đăng ký với Bộ Công Thương" width="96px;"/>
    </a>
    </div>
    </div>
    <div class="footer-bottom-end-row1" style="padding: 10px 0 10px;">
    <img src="http://file4.batdongsan.com.vn/images/line-footer.png" alt="" noloaderror="true"/>
    </div>
    <div class="footer-bottom-end-row1">
    <div style="width: 100%; text-align: center;">
    <div><strong>Trụ sở chính</strong></div>
<div>Phòng 1901, tầng 19, Keangnam Hanoi Landmark Tower, khu E6, khu đô thị Cầu Giấy, phường Mễ Trì, quận Nam Từ Liêm, TP. Hà Nội</div>
<div>Hotline: (04) 3 562 5939 | (04) 3 562 5940 - Mobile: 0936 365 158 | 0904 999 607</div>
</div>
<div class="clear10"></div>
    <div class="add-left" style="width: 340px; padding-right: 15px;">
    <div><strong>Chi nhánh TP. Hồ Chí Minh</strong></div>
<div>Phòng 3F - A2, tầng 3, tòa nhà Mirae Business Center, số 268 Tô Hiến Thành, phường 15, quận 10, TP. Hồ Chí Minh</div>
<div>Hotline: (08) 3 979 8726 - Mobile: 0904 893 279</div>
</div>
<div class="add-left" style="width: 298px; padding-right: 15px;">
    <div><strong>Chi nhánh Nha Trang</strong></div>
<div>Tầng 4, tòa nhà Chánh Bổn, số 02 Lê Thành Phương, phường Phương Sài, TP. Nha Trang, tỉnh Khánh Hòa</div>
<div>Hotline: (058) 3 818 886 - Mobile: 0902 169 295</div>
</div>
<div class="add-right" style="width: 290px; ">
    <div><strong>Chi nhánh Vũng Tàu</strong></div>
<div>Tầng 4, tòa nhà ACB, số 111 Hoàng Hoa Thám, phường 2, TP. Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu</div>
<div>Hotline: (064) 3 511 339 - Mobile: 0904 509 293</div>
</div>
<div class="clear10"></div>
    <div class="add-left" style="width: 340px; padding-right: 15px;">
    <div><strong>Chi nhánh Đà Nẵng</strong></div>
<div>Tầng 9, tòa nhà Vĩnh Trung Plaza, số 255 – 257 Hùng Vương, phường Vĩnh Trung, quận Thanh Khê, TP. Đà Nẵng</div>
<div>Hotline: (0511) 3 666 968 - Mobile: 0904 907 279</div>
</div>
<div class="add-left" style="width: 298px; padding-right: 15px;">
    <div><strong>Chi nhánh Hải Phòng</strong></div>
<div>Phòng 601B, TD Business Center, lô 20A Lê Hồng Phong, quận Ngô Quyền, TP. Hải Phòng</div>
<div>Hotline: (031) 3 246 848 - Mobile: 0903 456 322</div>
</div>
<div class="add-right" style="width: 290px; ">
    <div><strong>Chi nhánh Bình Dương</strong></div>
<div>Số 400 Đại Lộ Bình Dương, phường Phú Lợi, TP. Thủ Dầu Một, tỉnh Bình Dương</div>
<div>Hotline: (0650) 3 819 558 - Mobile: 0919 255 580</div>
</div>
<div class="clear"></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div id="SiteRight" class="banner-right">
    <div class="container-default">
    <div id="ctl26_BodyContainer">
    <div id="ban_right" class="ban_scroll">
    <div class="adPosition" positionCode="BANNER_POSITION_RIGHT" style="margin-bottom: 0px;"></div>
    </div></div>
</div></div>
<script type="text/javascript">
//<![CDATA[
var Page_Validators = new Array(document.getElementById("ctl35_ctl00_RequiredFieldValidator1"), document.getElementById("ctl35_ctl00_RequiredFieldValidator2"), document.getElementById("ctl35_ctl00_RequiredFieldValidator3"));
//]]>
</script>
<script type="text/javascript">
//<![CDATA[
var ctl35_ctl00_RequiredFieldValidator1 = document.all ? document.all["ctl35_ctl00_RequiredFieldValidator1"] : document.getElementById("ctl35_ctl00_RequiredFieldValidator1");
ctl35_ctl00_RequiredFieldValidator1.controltovalidate = "ctl35_ctl00_txtPhoneNumber";
ctl35_ctl00_RequiredFieldValidator1.errormessage = "*";
ctl35_ctl00_RequiredFieldValidator1.display = "Dynamic";
ctl35_ctl00_RequiredFieldValidator1.validationGroup = "1";
ctl35_ctl00_RequiredFieldValidator1.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ctl35_ctl00_RequiredFieldValidator1.initialvalue = "";
var ctl35_ctl00_RequiredFieldValidator2 = document.all ? document.all["ctl35_ctl00_RequiredFieldValidator2"] : document.getElementById("ctl35_ctl00_RequiredFieldValidator2");
ctl35_ctl00_RequiredFieldValidator2.controltovalidate = "ctl35_ctl00_txtCardCode";
ctl35_ctl00_RequiredFieldValidator2.errormessage = "*";
ctl35_ctl00_RequiredFieldValidator2.display = "Dynamic";
ctl35_ctl00_RequiredFieldValidator2.validationGroup = "1";
ctl35_ctl00_RequiredFieldValidator2.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ctl35_ctl00_RequiredFieldValidator2.initialvalue = "";
var ctl35_ctl00_RequiredFieldValidator3 = document.all ? document.all["ctl35_ctl00_RequiredFieldValidator3"] : document.getElementById("ctl35_ctl00_RequiredFieldValidator3");
ctl35_ctl00_RequiredFieldValidator3.controltovalidate = "ctl35_ctl00_txtCardSerial";
ctl35_ctl00_RequiredFieldValidator3.errormessage = "*";
ctl35_ctl00_RequiredFieldValidator3.display = "Dynamic";
ctl35_ctl00_RequiredFieldValidator3.validationGroup = "1";
ctl35_ctl00_RequiredFieldValidator3.evaluationfunction = "RequiredFieldValidatorEvaluateIsValid";
ctl35_ctl00_RequiredFieldValidator3.initialvalue = "";
//]]>
</script>
<script type="text/javascript">
//<![CDATA[
    $(function () {$('.guestupload').each(function () {this.uploadhandler = new GuestUploadNonFlash($(this).attr('id'));});});
var Page_ValidationActive = false;
if (typeof(ValidatorOnLoad) == "function") {
    ValidatorOnLoad();
}
function ValidatorOnSubmit() {
    if (Page_ValidationActive) {
        return ValidatorCommonOnSubmit();
    }
    else {
        return true;
    }
}
//]]>
</script>
</form>
<script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/jquery.bt.js?v=127"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/jquery.ui.core.js"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/jquery.ui.datepicker.js"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/common.js?v=127"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/common.validator.js?v=127"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/jcarousellite.js"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/fengshui_divinations.js?v=127"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/scripts/fancybox215/lib/jquery.mousewheel-3.0.6.pack.js"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/scripts/fancybox215/source/jquery.fancybox.js"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/scripts/fancybox215/source/helpers/jquery.fancybox-buttons.js"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/jwplayer.js"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/ScrollBar/jquery.mCustomScrollbar.min.js"></script>
    <script type="text/javascript" src="http://content.batdongsan.com.vn/Scripts/usercomment.js?v=127"></script>
    <script type="text/javascript">
    (function () {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();
</script>
    <!-- Start Alexa Certify Javascript -->
<script type="text/javascript">
_atrk_opts = { atrk_acct: "b6pvi1aUS/00O2", domain: "batdongsan.com.vn", dynamic: true };
(function () { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://d31qbv1cthcecs.cloudfront.net/atrk.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(as, s); })();
</script>
<noscript>
<img src="https://d5nxst8fruw4z.cloudfront.net/atrk.gif?account=b6pvi1aUS/00O2" style="display: none" height="1" width="1" alt="" /></noscript>
        <!-- End Alexa Certify Javascript -->
    <a id="to_top" href="javascript:;" rel="nofollow" style="display: none;">
    <img title="Về đầu trang" alt="Về đầu trang" src="http://file4.batdongsan.com.vn/images/Icons/lendau.png"/>
    </a>
    <link rel="stylesheet" href="/Modules/Chats/styles/chat-style.css?v=127" />
    <link rel="stylesheet" href="/Modules/Chats/styles/emoticon.css" />
    <script type="text/javascript" src="http://s1.batdongsan.com.vn/scripts/jquery.signalR-2.1.2.min.js"></script>
    <script type="text/javascript" src="http://s1.batdongsan.com.vn/signalr/hubs"></script>
    <script type="text/javascript" src="/Modules/Chats/scripts/jquery.tmpl.min.js"></script>
    <script type="text/javascript" src="/Modules/Chats/scripts/jquery.emoticon.js"></script>
    <script type="text/javascript" src="/Modules/Chats/scripts/ChatUserTemplates.js?v=127"></script>
    <script type="text/javascript" src="/Modules/Chats/scripts/BDSChat.js?v=127"></script>
    <script type="text/javascript" src="/Modules/Chats/scripts/chatPopup.js?v=127"></script>
    <script type="text/javascript" src="/Modules/Chats/scripts/jquery.cookie.js"></script>
    <script type="text/javascript" src="/Modules/Chats/scripts/chatCommon.js?v=127"></script>
    <div class="chat-header-bds chat-with-bds" id="chat-width-bds-noreg" style="display: none;">
    <a class="link-chat-bds" href="javascript:void(0)" onclick="BDSChat.chatWithProductOwner('0','Đăng ký', 0)">
    <span class="link-chat-bds-header"></span>
    <span class="link-chat-bds-content">Chat với <b>Batdongsan.com.vn</b></span>
</a>
</div>
<div id="pnlQuickBoxChat" class="chat-quick-inbox-content" style="display: none;">
    <div class="inbox-body">
    <div class="chat-quick-inbox-content-arrow"></div>
    <ul></ul>
    <div class="chat-quick-view-all"><a href="/trang-ca-nhan/uspg-chatinbox" onclick="window.location.href='/trang-ca-nhan/uspg-chatinbox'">Xem tất cả</a></div>
</div>
</div>
<div id="hiddenDivChat" class="chat-hiddendiv"></div>
    <script type="text/javascript">
chatServerUrl = 'http://s1.batdongsan.com.vn';
//var hiddenDiv = $(document.createElement('div')), content = null;
//hiddenDiv.addClass('chat-hiddendiv');
//$("body").prepend(hiddenDiv);
</script>
</body>
</html>
<!--http://batdongsan.com.vn/Default.aspx?Sid=37&Pid=294&zrawurl=/dang-tin-rao-vat-ban-nha-dat&md5=kL5A0MsQ7esTyqyvEBi+Ow==-->