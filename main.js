let likes = document.querySelectorAll('.fa')
console.log(likes)
let btnPlus=document.querySelectorAll('.plus-btn')
let btnMinus=document.querySelectorAll('.minus-btn')
console.log(btnPlus)
let counter=document.querySelectorAll('.Quant')

for (let i=0;i<likes.length;i++){
    likes[i].addEventListener('click',function(){
        if (likes[i].style.color ==='rgb(226, 192, 209)'){
            likes[i].style.color='red'
        }
        else{
            likes[i].style.color ='rgb(226,192,209)'
        }
    })
}
// btnPlus feature
for(let i=0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click',function(){
        console.log('aa')
    counter[i].value=Number(counter[i].value)+1
})}
    // btnMinus feature

 for(let i=0;i<btnMinus.length;i++){
     btnMinus[i].addEventListener('click',function(){
         if(counter[i].value>1){
             counter[i].value=Number(counter[i].value)-1
         }
     })
 }
// Delete feature

 for (let i=0;i<deleteC.length;i++){
     deleteC[i].addEventListener('click',function(){
         deleteC[i].parentNode.remove()    
     })
     }