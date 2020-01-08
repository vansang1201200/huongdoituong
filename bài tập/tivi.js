function Tivi(name, chanel, volum, status) {
    this.name = name;
    this.chanel = chanel;
    this.volum = volum;
    this.status = status;
    this.getname = function () {
        return this.name;
    }
    this.getchanel = function () {
        for(let i=0 , i
            )
    }
    this.getvolum = function () {
        return this.volum;
    }
    this.getstatus = function () {
        return this.status
    }
}
function Remote(name,code) {
    this.name = name;
    this.code = code;
    this.connect = function(TV){
        this.TV = TV;
    }
    this.getname = function () {
        return this.name
    }
    this.getchanel = function (num) {
        if (this.chanel > 0 && this.chanel <= 9)
            return num
        else
            alert("tivi hong")
        show()
    }

    this.getvolum = function () {
        if (this.volum >= 0 && this.volum < 100)
            this.volum++;
        else
            alert("tivi hong")
        show()
    }
    this.status = function () {
        if (this.status)
            return "on"
        else
            return "off"
    }
}
let Tivi = new viti(sonic,vtv3,8,on);
let Remote = new remote(sonic,vtv4,9,on);
function show() {
    document.getElementById("nametv").innerHTML=tivi.getname();
    document.getElementById("chaneltv").innerHTML=tivi.getchanel();
    document.getElementById("volumtv").innerHTML=tivi.getvolum();
    document.getElementById("starttv").innerHTML=tivi.getstart();
    document.getElementById("namerm").innerHTML=remote.getname();
}
