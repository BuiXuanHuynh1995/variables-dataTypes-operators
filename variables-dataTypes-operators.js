function ketqua() {
    let banKinh = document.getElementById("bankinh").value;
    let dv1 = document.getElementById("donVi1").value;
    let dv2 = document.getElementById("donVi2").value;
    let dv3 = document.getElementById("donVi3").value;
    let p = ((2 * 3.14 * banKinh * dv1) / dv2);
    let s = ((3.14 * banKinh*banKinh*dv1) / dv3);
    document.getElementById("chuvi").value = p;
    document.getElementById("dientich").value = s;
}
function ketQua1() {
    let ly = parseInt(document.getElementById("diemVatLy").value);
    let hoa = parseInt(document.getElementById("diemHoaHoc").value);
    let sinh = parseInt(document.getElementById("diemSinhHoc").value);
    let tong = parseInt(ly + hoa + sinh);
    let trb = (ly + hoa + sinh) / 3;
    document.getElementById("tong").value = tong;
    document.getElementById("tb").value = trb;
}
function chuyenDo() {
    let nhapdo = document.getElementById("nhapDo").value;
    let nhiet1 = document.getElementById("dvNhiet1").value;
    let nhiet2 = document.getElementById("dvNhiet2").value;
    let chuyen= (nhapdo * nhiet1) / nhiet2;
    document.getElementById("chuyenDoi").value = chuyen;
}