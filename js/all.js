function logoRotate(){
    window.onscroll = function(){
        var rotate = Math.round(360 * (window.scrollY / (document.body.scrollHeight - window.innerHeight)));
        document.getElementById('logo').style.transform = "rotate("+rotate+"deg)";;
    }
}
    
    function slider(){

    var slider = document.getElementById('slider')
    var sliderItems = [].slice.call(slider.getElementsByClassName('banner-container'));
    var dotsContainer = document.getElementById('dots');
    
    
    sliderItems.forEach(function(item,i){
        var dot = document.createElement('li');
        dotsContainer.appendChild(dot);
        dot.classList.add('list-inline-item');
        dot.setAttribute("id", i);
        dot.innerHTML = i;
        dot.addEventListener("click", runSlider);
        if(i==0){
            dot.classList.add('active')
        }
    })

    var dots = [].slice.call(dotsContainer.getElementsByTagName('li'));

    
    function runSlider() {
        var dnum = this.getAttribute("id");
        
    sliderItems.forEach(function(item,i){
            item.classList.remove('active');
            dots[i].classList.remove('active');

            sliderItems[dnum].classList.add('active');
            dots[dnum].classList.add('active');
    });
        
    }

    function goToNextSlide(){
        var lastSlideId = (dots.length - 1).toString();
                
        var currentSlideId = dots.filter(x=>x.className.indexOf('active')!=-1)[0].id;
        
        var nextSlideId = currentSlideId !== lastSlideId ? (parseInt(currentSlideId)+1).toString() : "0";
    
        document.getElementById(nextSlideId).click();
    }
    
    
    function autoSlide(){

        var secondsPerSlide = 2;
        var c = 0;
        var paused = false;

var slideLoader = document.getElementById('slide-loader');

        setInterval(function () {
            c++;
            if(c % (secondsPerSlide*1000) == 0 && !paused){
                goToNextSlide();
        }
        if(!paused){
            slideLoader.style.width = ((c % (secondsPerSlide*1000)) / (secondsPerSlide*1000))*100 + "%";
        }

        },1)

        // slider.onmousein = function(){
        //     paused = true;
        // }

        // slider.onmouseout = function(){
        //     paused = false;
        // }

        // slider.onclick = function(){
        //     paused = !paused;
        // }

    }

    autoSlide();

    }
    
    

logoRotate();
slider();