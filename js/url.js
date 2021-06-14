//这里只有url，逻辑请前往load.js修改

//src 不可以以/结尾，pri是优先级，数值越低越优先
var file_json = [{"src":"http://10.21.16.117:7000","pri":1,"success_flag":0},
    {"src":"http://10.21.16.117/file","pri":2,"success_flag":0},
    {"src":"http://172.22.22.22:7000","pri":3,"success_flag":0},
    {"src":"https://nasfile.redhome.hdu.edu.cn","pri":4,"success_flag":0},
    {"src":"http://net.dreamer2q.me:17000","pri":5,"success_flag":0},
    {"src":"http://net2.dreamer2q.me:17000","pri":5,"success_flag":0},
    {"src":"http://net3.dreamer2q.me:17000","pri":5,"success_flag":0},]

var desk_json = [{"src":"http://10.21.16.117:5000","pri":1,"success_flag":0},
    {"src":"http://172.22.22.22:5000","pri":3,"success_flag":0},
    {"src":"https://nasdesk.redhome.hdu.edu.cn","pri":4,"success_flag":0},
    {"src":"http://net.dreamer2q.me:15000","pri":5,"success_flag":0},
    {"src":"http://net2.dreamer2q.me:15000","pri":5,"success_flag":0},
    {"src":"http://net3.dreamer2q.me:15000","pri":5,"success_flag":0},]

// 其他一般图片
//var google_img = {"img_src":"https://www.google.com/favicon.ico","success_flag":0,"success_alert":"当前可访问国际网络，如需加速下载可以使用直连镜像"};
//var test_img = {"img_src":"https://www.baidu.com/favicon.ico","success_flag":0,"success_alert":"当前网络环境正常"};
var webvpn_img = {"img_src":'http://pwd.hdu.edu.cn/images/m_logo.png',"success_flag":0,"success_alert":"当前代理速度最高30Mbps，若资料下载太慢请刷新节点或使用HDU VPN，超过4G以上大文件用直连镜像或者校园网可能更快"};
