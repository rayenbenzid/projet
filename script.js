let plus_btn=document.getElementsByClassName("plus-btn")
let Quant_btn=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalprice=document.getElementById("finalPrice")
let price=document.getElementsByClassName('price')
let car=document.getElementsByClassName("car")
console.log("hl")
for (let index = 0; index < plus_btn.length; index++) {
    //heart_btn like
    
    //Plus Button
    plus_btn[index].addEventListener("click",function(){
        Quant_btn[index].value=Number(Quant_btn[index].value)+1
        finalprice.value=Number(finalprice.value)+Number(price[index].textContent)

    })

    //minus Button
    minus_btn[index].addEventListener("click",function(){
        Quant_btn[index].value=Number(Quant_btn[index].value)-1
        finalprice.value=Number(finalprice.value)+Number(price[index].textContent)

    })

    
       
}

