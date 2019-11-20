//变量声明
var num = 0;
var link = new Array();
var lab = ["编号", "项目名称", "最短完成时间", "最长完成时间"];
var imporetbtn = document.getElementById('importbtn');
var newbtn = document.getElementById('newbtn');
var viewbtn = document.getElementById('viewbtn');
var addbtn = document.getElementById('addbtn');
var maindiv = document.getElementById('main');
var importdiv = document.getElementById('import');
var viewdiv = document.getElementById('view');
var newdiv = document.getElementById('new');
var picturediv = document.getElementById('picture');
var backbtn = document.getElementsByName("back");
var picturebtn = document.getElementById('lookpicture');
var viewclick = document.getElementById('viewclick');
var searchselect1 = document.getElementById('searchselect1');
var searchinput = document.getElementById('searchinput');
var deleteclick = document.getElementById('deletecilck');
var modifyclick = document.getElementById('modifyclick');
var link = new LinkedList();
//初始化

//打印
function print(){
    document.write('id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;项目名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EF')
}

//创建链表
function Node(name, maxtime, mintime){
    this.number = num;
    this.name = name;
    this.maxtime = maxtime;
    this.mintime = mintime;
    this.next = null;
    //num++;
    //this.pre = null;
}

function LinkedList(){
    this.head = new Node();
    //this.find = find;
    this.insert = insert;
    //this.remove = remove;
    //this.show = show;
}

function insert(name, maxtime, mintime){
    var p = this.head;
    //var q = new Node(name, longtime, shorttime);
    while(p.next != null)
    {
        p = p.next;
    }
    p.next = new Node(name, maxtime, mintime);
}

//点击事件
addbtn.onclick = function(){
    var name = document.getElementById("name").value;
    var shorttime = document.getElementById("shorttime").value;
    var longtime = document.getElementById("longtime").value;
    if(num == 0){
        num++;
        link.head = new Node(name, longtime, shorttime);
    }
    else{
        num++;
        link.insert(name, longtime, shorttime);
    }
    //alert("添加成功");
}

//创建表格
function creatTab(divname){
    rows = 4;//行
    cols = num;//列
    var p = link.head;
    //console.log(link[0].number);
    var tab = '<table border=1 width=500">'
    tab += '<tr>';
    for(var j = 0; j < rows; j++){
        tab += "<td style='background:white'>" + lab[j] + "</td>";
    }
    tab += '</tr>';
    for(var j = 0; j < cols; j++){
        tab += '<tr>';     
        tab += "<td style='background:white'>" + p.number + "</td>";
        tab += "<td style='background:white'>" + p.name + "</td>";
        tab += "<td style='background:white'>" + p.maxtime + "</td>";
        tab += "<td style='background:white'>" + p.mintime + "</td>";
        tab += '</tr>';
        p = p.next;
    }       
    tab += '</table>';
    div = document.getElementById(divname);
    div.innerHTML = tab;
}

//点击跳转
imporetbtn.onclick = function(){
    maindiv.style.display = 'none';
    importdiv.style.display = 'inline';
}

newbtn.onclick = function(){
    maindiv.style.display = 'none';
    newdiv.style.display = 'inline';
}

viewbtn.onclick = function(){
    maindiv.style.display = 'none';
    viewdiv.style.display = 'inline';
    creatTab('viewlist');
}

//点击返回主界面
for(i = 0; i < backbtn.length; i++)
{backbtn[i].onclick = function(){
    maindiv.style.display = 'inline';
    viewdiv.style.display = 'none';
    newdiv.style.display = 'none';
    importdiv.style.display = 'none';
    picturediv.style.display ='none';
    //alert("rinige");
}}

//点击展示网络计划图
picturebtn.onclick = function(){
    maindiv.style.display = 'none';
    picturediv.style.display = 'inline';
}

viewclick.onclick = function(){
    var tab = '<table border=1 width=500">';
    tab += '<tr>';
    for(var j = 0; j < rows; j++){
        tab += "<td style='background:white'>" + lab[j] + "</td>";
    }
    tab += '</tr>';
    for(var p = link.head; p != null; p = p.next){
        if(searchselect1.value == 0){
            if(p.number == searchinput.value){               
                tab += '<tr>';     
                tab += "<td style='background:white'>" + p.number + "</td>";
                tab += "<td style='background:white'>" + p.name + "</td>";
                tab += "<td style='background:white'>" + p.maxtime + "</td>";
                tab += "<td style='background:white'>" + p.mintime + "</td>";
                tab += '</tr>'; 
            }
        }
        if(searchselect1.value == 1){
            if(p.name == searchinput.value){               
                tab += '<tr>';     
                tab += "<td style='background:white'>" + p.number + "</td>";
                tab += "<td style='background:white'>" + p.name + "</td>";
                tab += "<td style='background:white'>" + p.maxtime + "</td>";
                tab += "<td style='background:white'>" + p.mintime + "</td>";
                tab += '</tr>'; 
            }
        }
    }
    tab += '</table>';
    div = document.getElementById('viewlist');
    div.innerHTML = tab;
}

deleteclick.onclick = function(){
    var tab = '<table border=1 width=500">';
    tab += '<tr>';
    for(var j = 0; j < rows; j++){
        tab += "<td style='background:white'>" + lab[j] + "</td>";
    }
    tab += '</tr>';
    for(var p = link.head; p != null; p = p.next){
        if(searchselect1.value == 0){
            if(p.next.number == searchinput.value){
                tab += '<tr>';     
                tab += "<td style='background:white'>" + p.next.number + "</td>";
                tab += "<td style='background:white'>" + p.next.name + "</td>";
                tab += "<td style='background:white'>" + p.next.maxtime + "</td>";
                tab += "<td style='background:white'>" + p.next.mintime + "</td>";
                tab += '</tr>'; 
                p.next = p.next.next;
                alert("删除成功");
            }
        }
        if(searchselect1.value == 1){
            if(p.next.name == searchinput.value){
                tab += '<tr>';     
                tab += "<td style='background:white'>" + p.next.number + "</td>";
                tab += "<td style='background:white'>" + p.next.name + "</td>";
                tab += "<td style='background:white'>" + p.next.maxtime + "</td>";
                tab += "<td style='background:white'>" + p.next.mintime + "</td>";
                tab += '</tr>'; 
                p.next = p.next.next;
                alert("删除成功");
            }    
        }
    } 
    tab += '</table>';
    div = document.getElementById('viewlist');
    div.innerHTML = tab;
}

modifyclick.onclick = function(){
     
}
