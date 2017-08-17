import './styles/screen.scss'

const main = () => {
  document.querySelector('h1').textContent += ''
  $(function() {
  		var selectedClass = "";
  		$(".fil-cat").click(function(){
  		selectedClass = $(this).attr("data-rel");
       $("#portfolio").fadeTo(100, 0.1);
  		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
      setTimeout(function() {
        $("."+selectedClass).fadeIn().addClass('scale-anm');
        $("#portfolio").fadeTo(300, 1);
      }, 300);

  	});
  });

}

document.addEventListener('DOMContentLoaded', main)

// HERE BE DRAGONS... and webpack. Don't touch.
if (process.env.NODE_ENV !== 'production') require('./index.html')
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
