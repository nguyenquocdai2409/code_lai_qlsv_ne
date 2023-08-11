var dssv = [];
var jsonData = localStorage.getItem("DSSV");
if(jsonData!=null) {
    var list = JSON.parse(jsonData);
    dssv = list.map(function(item){
        return new SinhVien(item.ma,item.ten,item.email,item.matkhau,item.toan,item.ly,item.hoa);
    });
    renderDSSV(dssv);
}
function themSv(){
    var sv = layThongTinTuForm();
    dssv.push(sv);
    renderDSSV(dssv);
    var jsonData = JSON.stringify(dssv);
    localStorage.setItem("DSSV", jsonData);
}
function xoaSv(id){
    var index = timViTri(id,dssv);
    dssv.splice(index,1);
    renderDSSV(dssv);
    var jsonData = JSON.stringify(dssv);
    localStorage.setItem("DSSV", jsonData);
}
function suaSv(id){
    var index = timViTri(id,dssv);
    var sv = dssv[index];
    showThongTinLenForm(sv);   
    document.getElementById('txtMaSV').disabled = true;
}
function capNhatSv(){
    var sv = layThongTinTuForm();
    var index = timViTri(sv.ma, dssv);
    dssv[index] = sv;
    renderDSSV(dssv);
    var jsonData = JSON.stringify(dssv);
    localStorage.setItem("DSSV", jsonData);
}