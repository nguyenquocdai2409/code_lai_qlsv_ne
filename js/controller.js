function renderDSSV() {
    var contentHTML = "";
    for (i = 0; i < dssv.length; i++) {
        var data = dssv[i];
        var contentTr = `
                            <tr>
                                <td>${data.ma}</td>
                                <td>${data.ten}</td>
                                <td>${data.email}</td>
                                <td>${data.tinhDTB()}</td>
                                <td>
                                <button onclick="suaSv('${data.ma}')" class="btn btn-warning">Sửa</button>
                                <button class="btn btn-danger" onclick="xoaSv('${data.ma}')">Xoá</button>
                            </td>
                            </tr>      
        `;
        contentHTML += contentTr;
    }
    document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}
function timViTri(id, dssv) {
    var viTri = dssv.findIndex(function (sv) {
        return sv.ma == id;
    });
    return viTri;
}
function showThongTinLenForm(sv) {
    document.getElementById("txtMaSV").value = sv.ma;
    document.getElementById("txtTenSV").value = sv.ten;
    document.getElementById("txtEmail").value = sv.email;
    document.getElementById("txtPass").value = sv.matkhau;
    document.getElementById("txtDiemToan").value = sv.toan;
    document.getElementById("txtDiemLy").value = sv.ly;
    document.getElementById("txtDiemHoa").value = sv.hoa;
}
function layThongTinTuForm() {
    var _ma = document.getElementById("txtMaSV").value;
    var _ten = document.getElementById("txtTenSV").value;
    var _email = document.getElementById("txtEmail").value;
    var _matkhau = document.getElementById("txtPass").value;
    var _toan = document.getElementById("txtDiemToan").value * 1;
    var _ly = document.getElementById("txtDiemLy").value * 1;
    var _hoa = document.getElementById("txtDiemHoa").value * 1;
    var sv = new SinhVien(_ma, _ten, _email, _matkhau, _toan, _ly, _hoa);
    return sv;
}

