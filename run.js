//Start of video autoplay script
/* Used JS for functions ng autoplay ng video */
let options = {
    root: null,
    rootMargin:'1px',
    threshold:2.0
};
let callback = (entries, observer)=>{
    entries.forEach(entry => {
        if (entry.target.id == 'kbdm'){
            if (entry.isIntersecting){
                entry.target.play();
            }
            else {
                entry.target.pause();
            }
        }

    });
}
let observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector('#kbdm'));
// End of video autoplay script

//for responsive site setting
var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(){
    if (menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "130px"
    }else {
        menuList.style.maxHeight = "0px"
    }
}