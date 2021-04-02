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

function power(value){
    
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

    powerPW.innerHTML = power(PWheight.value)

    console.log(pass)
    console.log(newPass)
})


