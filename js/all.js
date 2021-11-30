window.onscroll = function(){
    var rotate = Math.round(360 * (window.scrollY / (document.body.scrollHeight - window.innerHeight)));
    document.getElementById('logo').style.transform = "rotate("+rotate+"deg)";;
}