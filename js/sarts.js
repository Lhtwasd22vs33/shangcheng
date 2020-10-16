//通过id获取元素的函数
function getid(id){
    return document.getElementById(id)
}
var paybtn=getid('pay')

var box=getid('box')

var goodslist=[
    {id:'gds1',name:'C#编程基础',price:78,num1:1},
    {id:'gds2',name:'计算机基础',price:988,num1:2},
    {id:'gds3',name:'photoshop',price:688,num1:8},
    {id:'gds4',name:'web基础',price:898,num1:3},
    {id:'gds5',name:'h5+c3',price:9,num1:18},
    {id:'gds6',name:'javascript',price:8,num1:21},
]

var s=''

function co(goodslist){
    for(let i=0;i<goodslist.length;i++){
        s+=`<div class="cardsitem" id="">
        <div class="cds-tit">
            <label for="gds1">
                <input type="checkbox" id="gds1">
                ${goodslist[i].name}
            </label>
        </div>
        <div class="cds-detail flx">
            <div class="cds-img"></div>
            <div class="cds-txt">
                <div class="txt-ctt">名称 ：${goodslist[i].name}</div>
                <div class="txt-ctt">编著 ：</div>
                <div class="txt-ctt">出版 : </div>
                <div class="txt-ctt">简介 : </div>
            </div>
        </div>
        <div class="cds-price flx">
            <div class="cds-pri">定价: ￥${goodslist[i].price}</div>
            <i class="iconfont cds-del">&#xe61a;</i>
        </div>
        <div class="cds-count flx">
            <div class="cds-cnt">总计: ￥${goodslist[i].price*goodslist[i].num1}</div>
            <div class="cds-btn flx">
                <span class="mdf">-</span>
                <span class="mdf">${goodslist[i].num1}</span>
                <span class="mdf">+</span>
            </div>
        </div>
    </div>`
    }
    
    box.innerHTML=s
}

co(goodslist)