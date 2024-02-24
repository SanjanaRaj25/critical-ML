// add scroll animations using intersection observer
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElems = document.querySelectorAll('.hidden');
hiddenElems.forEach((el) => observer.observe(el));


// materialize css
M.AutoInit();

var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true,
    duration: 100
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

