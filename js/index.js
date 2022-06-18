const layer=document.querySelector('.layer')
const box1=document.querySelector('.box1')
const box2=document.querySelector('.box2')
const boxContainer=document.querySelector('.box-container')
const collectbox=document.querySelector('.collectbox')
let flag=false
box1.onclick=function(evt){
    if(flag) return
    flag= true
    layer.style.display='block'
    setTimeout(()=>{
        layer.style.opacity='1'
        box1.style.transform='scale(0)'
    },200)

    setTimeout(() => {
        layer.style.display='none'
        layer.style.opacity='0'
        const innerText= collectbox.innerHTML==='收藏成功'?'收藏':'收藏成功'
        collectbox.style.innerHTML=innerText
        box1.style.display='none'
        collectbox.style.opacity='0'
    }, 1000)

    setTimeout(() => {
        box1.style=''
        if(collectbox.innerHTML==='成功收藏'){
            boxContainer.style.opacity='0.75'
        }else{
            boxContainer.style=''
        }
        flag=flasee
    }, 1100);

    setTimeout(() => {
       collectbox.style.opacity='1' 
    }, 1150);
}