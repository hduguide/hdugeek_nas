var file_pri = 10;//如果没改就是链接失败
var desk_pri = 10;//如果没改就是链接失败
var vpnflag=1;//VPN可用
var notschoolflag=1 ;//非校园网
var timeflag=0;//记录执行次数
var document_change_shade_flag =1;//修改首页

//src 不可以以/结尾，pri是优先级，数值越低越优先
var file_json = [{"src":"http://10.21.16.117:7000","pri":1,"success_flag":0},
    {"src":"http://10.21.16.117/file","pri":2,"success_flag":0},
    {"src":"http://172.22.22.22:7000","pri":3,"success_flag":0},
    {"src":"https://nas1.hdugeek.me:17000","pri":5,"success_flag":0},
    {"src":"https://nas2.hdugeek.me:17000","pri":5,"success_flag":0},
    {"src":"http://net.dreamer2q.me:17000","pri":5,"success_flag":0},
    {"src":"http://net2.dreamer2q.me:17000","pri":5,"success_flag":0},
    {"src":"http://net3.dreamer2q.me:17000","pri":5,"success_flag":0},]

var desk_json = [{"src":"http://10.21.16.117:5000","pri":1,"success_flag":0},
    {"src":"http://172.22.22.22:5000","pri":3,"success_flag":0},
    {"src":"https://nas1.hdugeek.me:18080","pri":5,"success_flag":0},
    {"src":"https://nas2.hdugeek.me:18080","pri":5,"success_flag":0},
    {"src":"http://net.dreamer2q.me:15000","pri":5,"success_flag":0},
    {"src":"http://net2.dreamer2q.me:15000","pri":5,"success_flag":0},
    {"src":"http://net3.dreamer2q.me:15000","pri":5,"success_flag":0},]

//var google_img = {"img_src":"https://www.google.com/favicon.ico","success_flag":0,"success_alert":"当前可访问国际网络，如需加速下载可以使用直连镜像"};
//var test_img = {"img_src":"https://www.baidu.com/favicon.ico","success_flag":0,"success_alert":"当前网络环境正常"};
var webvpn_img = {"img_src":'http://pwd.hdu.edu.cn/images/m_logo.png',"success_flag":0,"success_alert":"当前代理速度最高30Mbps，若资料下载太慢请刷新节点或使用HDU VPN，超过4G以上大文件用直连镜像或者校园网可能更快"};

var file_list=[];
var desk_list=[];

//nas端口可用访问
function image_loader(dict){
    var image = new Image();
    image.onerror=function(){};
    image.onload=function(){
        dict["success_flag"]=1;
        if (dict["success_alert"] !== undefined) {
            alert(dict["success_alert"]);}
        };
    image.src = dict["src"]+"/webman/resources/images/default/1x/preview_bar_bg.png" + '?t=' +(+new Date());
}

//一般端口可用访问
function image_loader_const(dict){
    var image = new Image();
    image.onerror=function(){};
    image.onload=function(){
        dict["success_flag"]=1;
        if (dict["success_alert"] !== undefined) {
            alert(dict["success_alert"]);}
    };
    image.src = dict["img_src"]+'?t='+(+new Date());
}

//加载图片
function Load_img(){
    for (i  = 0; i < file_json.length; i++) {
        image_loader(file_json[i]);
    }
    for (i  = 0; i < desk_json.length; i++) {
        image_loader(desk_json[i]);
    }
}

//改文字
function document_change_index(tab_1){
    document.getElementById("tab_1").innerHTML=tab_1;
}

//改文字动画
function document_change_shade(success_call){
    if(document_change_shade_flag){
        document_change_shade_flag=0;
        setTimeout(function(){document_change_index("Loadin")},300);
        setTimeout(function(){document_change_index("Loadi")},600);
        setTimeout(function(){document_change_index("Load")},750);
        setTimeout(function(){document_change_index("Loa")},900);
        setTimeout(function(){document_change_index("Lo")},1000);
        setTimeout(function(){document_change_index("L")},1100);
        setTimeout(function(){document_change_index("")},1200);
        if(success_call){
            setTimeout(function(){document_change_index("a")},1500);
            setTimeout(function(){document_change_index("as")},1650);
            setTimeout(function(){document_change_index("ass")},1800);
            setTimeout(function(){document_change_index("assi")},1900);
            setTimeout(function(){document_change_index("assig")},2000);
            setTimeout(function(){document_change_index("assign")},2050);
            setTimeout(function(){document_change_index("assigne")},2100);
            setTimeout(function(){document_change_index("assigned")},2150);
        }
        else {
            setTimeout(function(){document_change_index("f")},1500);
            setTimeout(function(){document_change_index("fa")},1650);
            setTimeout(function(){document_change_index("fai")},1800);
            setTimeout(function(){document_change_index("fail")},2000);
            setTimeout(function(){document_change_index("faile")},2200);
            setTimeout(function(){document_change_index("failed")},2500);
        }
    }
}

//改标题
function document_change_mbps(tab_mbps){
    document.getElementById("tab_MBPS").innerHTML=tab_mbps;
}

//改文件链接
function document_change_file(herfof,innertext,title){
    var Obj = document.getElementById("tab_2");
    Obj.href = herfof;
    Obj.innerText = innertext;
    Obj.title = title;
}

//改桌面链接
function document_change_desk(herfof,innertext,title){
    var Obj = document.getElementById("tab_3");
    Obj.href = herfof;
    Obj.innerText = innertext;
    Obj.title = title;
}

//文件端口判断
function onLineJump_file() {
    for (i  = 0; i < file_json.length; i++) {
        if(file_json[i]["success_flag"]){
            if (file_json[i]["pri"]<file_pri){
                file_pri=file_json[i]["pri"];
            }
        }
    }
    if(file_pri!=10){
        document_change_shade(1);
        if(timeflag<2) {
            document_change_mbps("GEEK NAS<br>Successful");
        } else{
            file_list=[];
            for (i  = 0; i < file_json.length; i++) {
                if (file_json[i]["success_flag"]) {
                    if (file_json[i]["pri"] == file_pri) {
                        file_list.push(file_json[i]["src"]);
                    }
                }
            }
            if (file_pri==1){
                document_change_mbps("GEEK NAS<br>HDU 内网<br><100Mbps");
                document_change_file(file_list[Math.floor((Math.random()*file_list.length))], "资料下载", "内网节点-100Mbps");
            }else if(file_pri==2){
                document_change_mbps("GEEK NAS<br>HDU VPN<br><100Mbps");
                document_change_file(file_list[Math.floor((Math.random()*file_list.length))],"资料下载","杭电VPN节点-100Mbps");
                if(vpnflag && (timeflag>=3) ){
                    alert("欢迎VPN用户，资料下载速度最高达10MB/S，但如遇人多速度慢时，建议使用其它方式");
                    vpnflag=0;
                }
            }else if(file_pri==3){
                document_change_mbps("GEEK NAS<br>HDU 虚拟局域网<br><50Mbps");
                document_change_file(file_list[Math.floor((Math.random()*file_list.length))],"资料下载","虚拟局域网节点-50Mbps");
                if(timeflag>=3 ){
                    alert("欢迎虚拟局域网用户，资料下载速度由您网络穿透情况而定，如速度低于30Mbps建议关闭虚拟局域网");
                }
            }else if(file_pri==5){
                document_change_mbps("GEEK NAS<br>杭电电信代理<br><30Mbps");
                document_change_file(file_list[Math.floor((Math.random()*file_list.length))],"资料下载","电信代理节点-30Mbps");
                if(notschoolflag  && (timeflag>=3) ){
                    image_loader_const(webvpn_img);
                    notschoolflag=0;
                }
            }
        }
    }
    timeflag++;
}

//桌面端口判断
function onLineJump_desk(){
    for (i  = 0; i < desk_json.length; i++) {
        if(desk_json[i]["success_flag"]){
            if (desk_json[i]["pri"]<desk_pri){
                desk_pri=desk_json[i]["pri"];
            }
        }
    }
    if(desk_pri!=10) {
        desk_list = [];
        for (i = 0; i < desk_json.length; i++) {
            if (desk_json[i]["success_flag"]) {
                if (desk_json[i]["pri"] == desk_pri) {
                    desk_list.push(desk_json[i]["src"]);
                }
            }
        }
        if (desk_pri == 1) {
            document_change_desk(desk_list[Math.floor((Math.random() * desk_list.length))], "应用桌面", "内网节点-100Mbps");
        } else if (desk_pri == 3) {
            document_change_desk(desk_list[Math.floor((Math.random() * desk_list.length))], "应用桌面", "虚拟局域网节点-50Mbps");
        } else if (desk_pri == 5) {
            document_change_desk(desk_list[Math.floor((Math.random() * desk_list.length))], "应用桌面", "电信代理节点-30Mbps");
        }
    }
}
//失败加载
function onLineJump_file_fail(){
    if( file_pri==10){
        setTimeout(function(){var jumpmessage=alert("文件服务器连接失败，服务器可能维护或网络状况不佳，尝试刷新或者使用校园网/VPN（见帮助），亦可直接使用镜像");},2600);
        document_change_shade(0);
        document_change_mbps("GEEK NAS<br>Failed Connect");
        document_change_file("","连接失败","网络异常");
    }
}
//失败加载
function onLineJump_desk_fail(){
    if( desk_pri==10){
        document_change_desk("","连接失败","网络异常");
    }
}


window.onload = function(){
    Load_img();
    init();
    animate();
    setTimeout(onLineJump_file,500);
    setTimeout(onLineJump_file,1500);
    setTimeout(onLineJump_desk,500);
    setTimeout(onLineJump_desk,1500);
    setTimeout(safariBrowserAlert,1000);
    setTimeout(onLineJump_file,3000);
    setTimeout(onLineJump_file,4500);
    setTimeout(onLineJump_desk,3000);
    setTimeout(onLineJump_desk,4500);
    setTimeout(onLineJump_file_fail,5000);
    setTimeout(onLineJump_desk_fail,5000);
};

//判断苹果设备
var isSafariBrowser = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
function safariBrowserAlert(){
    if(isSafariBrowser){
        alert("您的苹果设备可能存在兼容性问题，如果Wifi下无法连接但其他平台正常，请关闭低数据模式");
    }
}

function showInformation(){
    alert("欢迎访问GEEK文件服务器，点击右下角+开始");
}
