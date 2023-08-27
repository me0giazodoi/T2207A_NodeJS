exports.home = (req,res)=>{
    // res.send("Hello T2207A");
    var abc = "T2207A";
    var students = [
        "Nguyễn Hoàng Hiệp",
        "Đào Thị Khánh Ly"
    ];
    res.render("home",{
        className: abc,
        students: students
    });
}
exports.about = (req,res)=>{
    // res.send("About Us");
    res.render("aboutus");
}