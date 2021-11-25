let likes = document.querySelectorAll('.fa')
let btnPlus=document.querySelectorAll('.plus-btn')
let btnMinus=document.querySelectorAll('.minus-btn')
console.log(btnPlus)
let counter=document.querySelectorAll('.Quant')
let deleteC=document.querySelectorAll('.delete')

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
    counter[i].value=Number(counter[i].value)+1
    totalPrice()
})}
    // btnMinus feature

 for(let i=0;i<btnMinus.length;i++){
     btnMinus[i].addEventListener('click',function(){
         if(counter[i].value>1){
             counter[i].value=Number(counter[i].value)-1
             totalPrice()
         }
     })
 }
// Delete feature

 for (let i=0;i<deleteC.length;i++){
     deleteC[i].addEventListener('click',function(){
         deleteC[i].parentNode.remove()    
         totalPrice()
     })
     }

function totalPrice(){
         let prices=document.querySelectorAll('.price')
         let count=document.querySelectorAll('.Quant')
         let sum =0
         console.log(prices);
         console.log(count);
         for (let i=0;i<count.length;i++){
             sum=prices[i].innerHTML*count[i].value+sum
         }
         console.log(sum);
         document.querySelector('#finalPrice').value=sum
     }