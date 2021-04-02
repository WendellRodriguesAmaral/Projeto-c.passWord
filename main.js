const Esp =  `!@#$%¨&*_-+º^~.;/?`
const Num = `1234567890`
let Ltr = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
let newPass = ""
const PWheight = document.querySelector("input#Tam")
const span = document.querySelector("span#TamValue")
const cheks = [...document.querySelectorAll("input[type=checkbox]")]
const button =  document.querySelector("button")
let res = document.querySelector("input#res")
let powerPW = document.querySelector("small#powerPW")


PWheight.addEventListener("input" , () => span.innerHTML = PWheight.value )

function power(arr){
    if(arr.length === 0){
        return ""
    } else{
        if(arr.length == 1){
            powerPW.innerHTML = "SENHA FRACA"
            powerPW.style.color = "red"
        } else if(arr.length == 2){
            powerPW.innerHTML = "SENHA MÉDIA"
            powerPW.style.color = "#c28e00"
        } else{
            powerPW.innerHTML = "SENHA FORTE"
            powerPW.style.color = "green"
        }
    }
}

button.addEventListener("click", (b)=>{
    newPass=""
    b.preventDefault()
    const pass = cheks.filter(input=>input.checked)
                        .map(input => input.dataset.value)                            

    pass.includes("Num") ? newPass+= Num:""
    pass.includes("Esp") ? newPass+= Esp:""
    pass.includes("Ltr") ? newPass+= Ltr:""

    let finalPass=""
    for(let i=0; i< PWheight.value;i++){
        // chatAt retorna o elemento da posição passada
        finalPass += newPass.charAt(Math.floor(Math.random()*newPass.length)) 
    }
    res.value = finalPass
    power(pass)
})


