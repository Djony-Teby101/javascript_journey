// Globale constante.

const side= document.getElementById('side');
const submitBtn=document.getElementById('submit');

const submit=()=>{
    if (side.value.trim().length==0){
        return;
    }
        const sideValue=Number(side.value);
        const calculeArea=(sideValue * sideValue)
        console.log(calculeArea)

        const resultat= document.getElementById('resultat');
        resultat.textContent=`${calculeArea} cm.`;

        side.value=""
}

submitBtn.addEventListener('click',submit);