$(document).ready(function(){
    var i=2; 
    //Kiểm tra tên: Chữ đầu viết hoa
    function kiemTraTen() {
        var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        if($("#txtTen").val() == ""){
            $("#tbTen").html("*Bắt buộc nhập !!");
            return false;
        }
        if(!kt.test($("#txtTen").val())){
            $("#tbTen").html("*Chữ cái đầu của mỗi từ phải viết hoa!!");
            return false;
        }
        $("#tbTen").html("");
        return true;
    };
    $("#txtTen").blur(kiemTraTen);
    //Kiểm tra địa chỉ: chữ đầu viết hoa
    function kiemTraDiaChi() {
        var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        if($("#txtDC").val() == ""){
            $("#tbDC").html("*Bắt buộc nhập !!");
            return false;
        }
        if(!kt.test($("#txtDC").val())){
            $("#tbDC").html("*Chữ cái đầu của mỗi từ phải viết hoa!!");
            return false;
        }
        $("#tbDC").html("");
        return true;
    }
    $("#txtDC").blur(kiemTraDiaChi);
    //Kiểm tra số điện thoại: bắt đầu bằng 03, 05, 07,08, 09
    function kiemTraSDT() {
        var re = /^(^[0]{1})([3]|[5]|[7]|[8]|[9]{1})([0-9]{8})$/;
        if ($("#txtDT").val() == "") {
            $("#tbDT").html("*Bắt buộc nhập");
            return false;
        }

        if (!re.test($("#txtDT").val())) {
            $("#tbDT").html("*Số điện thoại có 10 số phải bắt đầu từ 03, 05, 07, 08 hoặc 09");
            return false;
        }
        $("#tbDT").html("");
        return true;
    }
    $("#txtDT").blur(kiemTraSDT);
    //Kiểm tra email
    function kiemTraEmail() {
        var ema = /^[A-Za-z0-9]+(@gmail.com){1}$/;
        if ($("#txtEm").val() == "") {
            $("#tbEm").html("*Bắt buộc nhập !!");
            return false;
        }
        if (!ema.test($("#txtEm").val())) {
            $("#tbEm").html("*Email nhập theo dạng xxxxx@gmail.com!");
            return false;
        }
        $("#tbEm").html("");
        return true;
    };
    $("#txtEm").blur(kiemTraEmail);
    //Kiểm tra ngày sinh
    var txtNS = $("#txtNS");
    var tbNS = $("#tbNS");

    function kiemTraTuoi() {
        if (txtNS.val() == ""){
            tbNS.html("*Bắt buộc nhập");
            return false;
        }
        var ngaySinh = new Date(txtNS.val());
        var today = new Date();
        var namsinh = ngaySinh.getFullYear();
        var namnay = today.getFullYear();
        var tuoi = namnay - namsinh;
        if(tuoi < 18){
            tbNS.html("*Người dùng phải từ 18 tuổi trở lên");
            return false;
        }
        tbNS.html("");
        return true;
    }
    txtNS.blur(kiemTraTuoi);
    //Kiểm tra tên tài khoản
    function kiemTraTenTK() {
        var kt =  /^[A-Za-z0-9_\.]{6,32}$/;
        if($("#txtTenTK").val() == ""){
            $("#tbTenTK").html("*Bắt buộc nhập");
            return false;
        }
        if(!kt.test($("#txtTenTK").val())) {
            $("#tbTenTK").html("*Tên tài khoản có 6 đến 32 kí tự bao gồm các ký tự chữ cái, chữ số, dấu gạch dưới, dấu chấm");
            return false;
        }
        $("#tbTenTK").html("");
        return true;
    }
    $("#txtTenTK").blur(kiemTraTenTK);
    //Kiểm tra password
    function kiemTraPassWord() {
        var pas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if ($("#txtPw").val() == "") {
            $("#tbPw").html("*Bắt buộc nhập !!");
            return false;
        }
        if (!pas.test($("#txtPw").val())) {
            $("#tbPw").html("*Password ít nhất 8 kí tự buộc có 1 kí tự là chữ hoa, 1 kí tự là chữ thường, 1 kí tự số và 1 kí tự đặc biệt");
            return false;
        }
        $("#tbPw").html("");
        return true;
    };
    $("#txtPw").blur(kiemTraPassWord);
    //Kiểm tra nhập lại password
    function kiemTraLaiPassWord() {
        if ($("#txtPw1").val() == ""){
            $("#tbPw1").html("*Bắt buộc nhập");
            return false;
        }
        if(($("#txtPw1").val()) !== ($("#txtPw").val())){
            $("#tbPw1").html("*Mật khẩu phải trùng");
            return false;
        }
        $("#tbPw1").html("");
        return true;
    }
    $("#txtPw1").blur(kiemTraLaiPassWord);

    $("#btn-dangKy").click(function() {
        if(!kiemTraTen() || !kiemTraEmail() || !kiemTraTuoi() || !kiemTraTenTK() || !kiemTraPassWord() || !kiemTraLaiPassWord() || !kiemTraSDT() || !kiemTraDiaChi()) {
          alert("Bạn nhập sai hoặc thiếu thông tin vui lòng nhập lại !!");
          return false;
        }
        else {
          alert("Đăng kí thành công");
          alert(" Tên tài khoản là: "+ $("#txtPw").val());
          return true;
        }
      })
      //Kiểm tra tên tài khoản ở trang đăng nhập
        function kiemTraTenTKdn() {
            var kt =  /^[A-Za-z0-9_\.]{6,32}$/;
            if($("#txtTenTKdn").val() == ""){
                $("#tbTenTKdn").html("*Bắt buộc nhập");
                return false;
            }
            if(!kt.test($("#txtTenTKdn").val())) {
                $("#tbTenTKdn").html("*Tài khoản không tồn tại");
                return false;
            }
            $("#tbTenTKdn").html("");
            return true;
        }
        $("#txtTenTKdn").blur(kiemTraTenTKdn);
        //Kiểm tra password ở trang đăng nhập
        function kiemTraPassWorddn() {
            var pas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if ($("#txtPwdn").val() == "") {
                $("#tbPwdn").html("*Bắt buộc nhập !!");
                return false;
            }
            if (!pas.test($("#txtPwdn").val())) {
                $("#tbPwdn").html("*Sai mật khẩu");
                return false;
            }
            $("#tbPwdn").html("");
            return true;
        };
        $("#txtPwdn").blur(kiemTraPassWorddn);

        $("#btn-dangNhap").click(function() {
            if(!kiemTraTenTKdn() || !kiemTraPassWorddn()) {
                alert("Bạn nhập sai hoặc thiếu thông tin vui lòng nhập lại !!");
                return false;
            }
            else {
                alert("Đăng nhập thành công");
                return true;
            }
        })

      
      
      
});