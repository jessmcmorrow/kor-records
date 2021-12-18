function logoRotate() {
    window.onscroll = function() {
        var rotate = Math.round(360 * (window.scrollY / (document.body.scrollHeight - window.innerHeight))) *2;
        document.getElementById('logo').style.transform = "rotate(" + rotate + "deg)";
    // make it move down the page alongside the scroller
    //    document.getElementById('logo').style.top = (window.innerHeight-document.getElementById('logo').height) * (window.scrollY / (document.body.scrollHeight - window.innerHeight)) +"px";         
    }
}

function slider() {

    var slider = document.getElementById('slider')
    var sliderItems = [].slice.call(slider.getElementsByClassName('banner-container'));
    var dotsContainer = document.getElementById('dots');
    var paused = false;

    sliderItems.forEach(function(item, i) {
        var dot = document.createElement('li');
        dotsContainer.appendChild(dot);
        dot.classList.add('list-inline-item');
        dot.setAttribute("id", i);
        dot.innerHTML = i;
        dot.onclick = runSlider;
        if (i == 0) {
            dot.classList.add('active')
        }
    })

    var dots = [].slice.call(dotsContainer.getElementsByTagName('li'));

    function runSlider() {
        var dnum = this.id;
        sliderItems.forEach(function(item, i) {
            item.classList.remove('active');
            dots[i].classList.remove('active');
            sliderItems[dnum].classList.add('active');
            dots[dnum].classList.add('active');
        });

    }

    function goToNextSlide() {
        var lastSlideId = (dots.length - 1).toString();

        var currentSlideId = dots.filter(function(x) {
            return x.className.indexOf('active') != -1
        })[0].id;

        var nextSlideId = currentSlideId !== lastSlideId ? (parseInt(currentSlideId) + 1).toString() : "0";

        document.getElementById(nextSlideId).click();
    }

    function autoSlide() {

        var secondsPerSlide = 7;
        var framesPerSlide = secondsPerSlide * 60;
        var c = 0;


        var slideLoader = document.getElementById('slide-loader');

        function animation() {
            c++;
            if (c % (framesPerSlide) == 0 && !paused) {
                goToNextSlide();
            }
            if (!paused) {
                slideLoader.style.width = ((c % (framesPerSlide)) / (framesPerSlide)) * 100 + "%";
            }
            window.requestAnimationFrame(animation);

        }

        window.requestAnimationFrame(animation);

        sliderItems.forEach(function(item) {
            item.onclick = function(e) {
                paused = !paused;
                return false;
            }
        });

    }

    autoSlide();

}

logoRotate();
slider();
