//Topbar Active-Deactive function start//
let actvlink = document.querySelectorAll('.leftgroup>ul>li>a')

actvlink.forEach(a =>{
    a.addEventListener('click', function(){
        actvlink.forEach(anc => anc.classList.remove('active'));
        this.classList.add('active');
    });
});
//Topbar Active-Deactive function end//

// mega-menu active click section start//
  function showhide(){
    let click=document.getElementById("mega-menu");
    if(click.style.display = "none"){
       click.style.display = "block";
       }
    else{
        click.style.display = "none";
    }
}
// mega-menu active click section end//

// mega-menu active click section start//
function any(){
    let click=document.getElementById("star-menu");
    if(click.style.display = "none"){
       click.style.display = "block";
       }
    else{
        click.style.display = "none";
    }
}
// mega-menu active click section end//
