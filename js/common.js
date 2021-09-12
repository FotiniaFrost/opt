

$(document).ready(function(){
	new WOW().init();

  
  $("#pageform").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $("#pageform").serialize()
		}).done(function() {
			alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
			$("#pageform").trigger('reset');//id_form - ID вашей формы

		});
		return false;
	});
 
 $("#pageform").trigger('reset');//id_form - ID вашей формы

  $('.burger, .mob-navigate li').on('click', function(){    
    $('.mob-navigate').slideToggle("slow");
    $('.burger').toggleClass("close");
  }); 
 
  $(".owl-carousel").owlCarousel({
  	items:1,
  	loop:true,
  	nav:false,
  	dots:false,
  	autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });

  var owl = $('.owl-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
	});


  $(".navigate").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
	         
    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top}, 500);

	});
});

var img1=document.getElementById('bg1');
var opac;
var count=0;
window.setInterval (function BG(){
  
  count++;
  
  if(count==1200){
  	count=0;
  }
  
  if(count<=600&&count>=500)
  	opac=600-count;
  else if(count>=1100&&count<=1200)
  	opac=count-1100;
  else
  	opac=opac;
   img1.style.opacity=opac/100;
}, 30);

