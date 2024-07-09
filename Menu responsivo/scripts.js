const BotaoFeito = document.getElementById('BotaoFeito')
const otlado = document.getElementsByClassName('otlado')[0]
const BotaoAnimação = [...document.getElementsByClassName('line')]
const Lis = [...document.getElementsByTagName('li')]
let trocar = true

BotaoFeito.addEventListener('click' , ()=>{
    if (trocar){
        otlado.style.transform = 'translateX(-100%)'
        otlado.style.opacity = '100%'
        BotaoAnimação.map((v,p)=>{
            BotaoAni(v,p)
        })
        Lis.map((v,p)=>{
            v.style.opacity = '100%'
            v.style.transform = 'translate(-125px)'
            v.style.transition = `${alternar(p)}s`
        })
        trocar = false
    } else if (!trocar){
        otlado.style.transform = ''
        otlado.style.opacity = ''
        BotaoAnimação.map((v,p)=>{
            BotaoAniFechar(v,p)
        })
        Lis.map((v,p)=>{
            v.style.opacity = '20%'
            v.style.transform = ''
        })
        trocar = true
    } 
})


const BotaoAni=(val,posi)=>{
    if(posi==0){
        val.style.transform = 'rotate(-40deg)'
    }else if (posi==1){
        val.style.transform = 'rotate(40deg) translate(-4px , -5px)'
    }else if (posi==2){
        val.classList.toggle('sumir')
    }
}

const BotaoAniFechar=(val,posi)=>{
    if(posi==0){
        val.style.transform = ''
    }else if (posi==1){
        val.style.transform = ''
    }else if (posi==2){
        val.classList.toggle('sumir')
    }
}

const alternar=(val)=>{
    if(val==0){
        return 0.50
    } else if (val==1){
        return 0.75
    } else if (val==2){
        return 1
    } else if (val==3){
        return 1.25
    }
}