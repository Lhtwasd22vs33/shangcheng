//通过id获取元素的函数
function getid(id){
    return document.getElementById(id)
}

var cka=getid('ckall')

var totalprice=getid('totalprice')

var paybtn=getid('pay')

var box=getid('box')

var goodslist=[
    {id:'gds1',name:'C#编程基础',price:78,num1:1,check:false},
    {id:'gds2',name:'计算机基础',price:988,num1:2,check:false},
    {id:'gds3',name:'photoshop',price:688,num1:8,check:false},
    {id:'gds4',name:'web基础',price:898,num1:3,check:false},
    {id:'gds5',name:'h5+c3',price:9,num1:18,check:false},
    {id:'gds6',name:'javascript',price:8,num1:21,check:false},
]

var cks= document.getElementsByClassName('ck')
console.log(cks)

var flag=true



function coeatecards(goodslist){
    
    var s=''

    for(let i=0;i<goodslist.length;i++){
        s+=`<div class="cardsitem" id="">
        <div class="cds-tit">
            <label for="gds1">
                <input type="checkbox" class="ck" ${goodslist[i].check ?'checked':''} data=${goodslist[i].id}>
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
            <div class="cds-pri">定价: ￥ ${goodslist[i].price}</div>
            <i class="iconfont cds-del" data= ${goodslist[i].id}>&#xe61a;</i>
        </div>
        <div class="cds-count flx">
            <div class="cds-cnt">总计: ￥ ${goodslist[i].price*goodslist[i].num1}</div>
            <div class="cds-btn flx">
                <span class="mdf reduce" data= ${goodslist[i].id}>-</span>
                <span class="mdf" >${goodslist[i].num1}</span>
                <span class="mdf add"  data= ${goodslist[i].id}>+</span>
            </div>
        </div>
    </div>`
    }
    
    box.innerHTML=s
    bindEvents()
}
coeatecards(goodslist)
countprice()

function countprice(){
    var n=0

    for(let i=0;i<goodslist.length;i++){
        if(goodslist[i].check){
            n+=goodslist[i].price*goodslist[i].num1
        }
    }
    totalprice.innerText='总计 ： ￥'+n
}

function bindEvents(){

    for(let i=0;i<cks.length;i++){
        cks[i].addEventListener('change',function(){
            console.log(this)
            console.log(this.attributes.data.value)
            console.log(this.checked)
            for(let j=0;j<goodslist.length;j++){
    
                if(goodslist[j].id==this.attributes.data.value){
                    goodslist[j].check=this.checked
                    flag=this.checked
                }
                // if(goodslist[j].check==false){
                //     flag=false
                //     cka.checked=false
                // }
                // if(flag==true){
                //     cka.checked=true
                // }
                countprice()
            }
            for(let j=0;j<goodslist.length;j++){
                if(goodslist[j].check==false){
                    flag=false
                    cka.checked=false
                }
                cka.checked=flag
            }
        })
    }

    cka.addEventListener('change',function(){
        console.log(this.checked)
        if(this.checked){
            for(let i=0;i<cks.length;i++){
                cks[i].checked=true
            }
            for(let i=0;i<goodslist.length;i++){
                goodslist[i].check=true
            }
            console.log(goodslist)
        }else{
            for(let i=0;i<cks.length;i++){
                cks[i].checked=false
            }
            for(let i=0;i<goodslist.length;i++){
                goodslist[i].check=false
            }
            console.log(goodslist)
        }
        countprice()
    })

    var add=document.getElementsByClassName('add')
    var rdu=document.getElementsByClassName('reduce')

    for(let i=0;i<add.length;i++){
        add[i].addEventListener('click',function(){
            console.log(this)
            console.log(this.attributes.data.value)
            for(let i=0;i<goodslist.length;i++){
                if(goodslist[i].id===this.attributes.data.value){
                        goodslist[i].num1+=1
                }
            }
            console.log(goodslist)
            coeatecards(goodslist)
            countprice()
        })
    }
    for(let i=0;i<rdu.length;i++){
        rdu[i].addEventListener('click',function(){
            console.log(this)
            console.log(this.attributes.data.value)
            for(let i=0;i<goodslist.length;i++){
                if(goodslist[i].id===this.attributes.data.value){
                    if(goodslist[i].num1>1){
                        goodslist[i].num1-=1
                    }
                }
            }
            console.log(goodslist)
            coeatecards(goodslist)
            countprice()
        })
    }
    var del=document.getElementsByClassName('cds-del')
    for(let i=0;i<del.length;i++){
        del[i].addEventListener('click',function(){
            console.log(this)
            console.log(this.attributes.data.value)
            for(let i=0;i<goodslist.length;i++){
                if(goodslist[i].id===this.attributes.data.value){
                    goodslist.splice(i,1)
                }
            }
            console.log(goodslist)
            coeatecards(goodslist)
            countprice()
            flag=true
            for(let i=0;i<goodslist.length;i++){
                if(!goodslist[i].check){
                    flag=false
                }
            }
            cka.checked=flag
        })
    }
}
paybtn.addEventListener('click',function(){
    var arr=[]
    for(let i=0;i<goodslist.length;i++){
        if(!goodslist[i].check)arr.push(goodslist[i])
    }
    console.log(arr)
    goodslist=arr
    coeatecards(goodslist)
    countprice()
    cka.checked=false
    alert('结算成功')
})