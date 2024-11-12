const openTab=(evt, tabName)=>{
    // recuperer tous les elements ayants la classe designé.
    let tabContents=document.getElementsByClassName("tab-content");
    for(let i=0;i<tabContents.length; i++){
        tabContents[i].classList.remove("active") //Recuperer Tous les elements etsupprimer le tag ayant la classe active.
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}