AOS.init();
//anime.js
anime({
  targets: '.line',
  width: '100px',
  easing: 'easeInOutSine',
  duration: 750,
  loop: true,
  direction: 'alternate'
});
anime({
    targets: '.line2',
    width: '140px',
    duration: 1300,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate'
  });
  var slide2 = anime({
      targets: '.slide',
      translateX: ['-100%', '0%'],
      duration: 1500,
      easing: 'easeInOutSine',
      loop: false,
      autoplay: false,
    });
var slide = anime({
    targets: '.slide',
    translateX: ['0%', '-100%'],
    duration: 1500,
    easing: 'easeInOutSine',
    loop: false,
    autoplay: false,
    });
$(document).ready(function () {
    $("#next").click(function() {
        slide.play(); 
    })        
    $("#back").click(function() {
        slide2.play();
    })        
    $("#pilih").click(function(){
        anime({
            duration:1500,
            targets: '#bola',
            translateX: -675,
            translateY:-350,
            easing:'easeInOutExpo'
          });
    })
    $("#pilih2").click(function(){
        anime({
            duration:1500,
            targets: '#bola',
            translateX: 675,
            translateY: -350,
            easing:'easeInOutExpo'
          });
    })
//Content1
// $("#next").click(function() {
//     //Content Slider
//     var title = document.querySelector('.content h1');
//     var text = document.querySelector('.content p');
//     var image = document.querySelector('.content-img img');

//     var judul = ["Title 1", "Title 2"];
//     var sub = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sint fuga dignissimos similique voluptatem voluptatum maxime, ipsam, debitis atque quas minima facere at quisquam illo doloribus excepturi quam vero necessitatibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sint fuga dignissimos similique voluptatem voluptatum maxime, ipsam, debitis atque quas minima facere at quisquam illo doloribus excepturi quam vero necessitatibus."];
//     var number = 0;
//     var max = judul.length-1;

//     $(title).text(judul[number]);
//     $(text).text(sub[number]);  
//     $(image).attr("src", "img/content"+(number+1)+".png");
    
//     $("#next").click(function() {
        
//         if(number == max){
//             number = 0;
//         }else{
//             number++;
//         }
//         $(".content-slider").fadeOut('fast', function(){
//             $(title).text(judul[number]);
//             $(text).text(sub[number]);
//             $(image).attr("src", "img/content"+(number+1)+".png");
//             $(".content-slider").fadeIn('fast');
//         });
//     });

//     $("#back").click(function() {
//         if(number == 0){
//             number = max;
//         }else{
//             number--;
//         }
//         $(".content-slider").fadeOut('fast', function(){
//             $(title).text(judul[number]);
//             $(text).text(sub[number]);
//             $(image).attr("src", "img/content"+(number+1)+".png");
//             $(".content-slider").fadeIn('fast');
//         });
//     });

//ScrollTop
    // var play = false;
    // $(window).scroll(function (event) {



    //     $('.glow').each( function(i){
            
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            

    //         if( bottom_of_window > bottom_of_element+505 ){
    //             if(play == false){
    //             line1glow.play();
    //             line1.play();
    //             play = true;
    //             console.log('Animation started');
    //             }
                
    //         }else{
    //             line1glow.stop();
    //             line1.stop();
    //             play = false;
    //         }            
    //     }); 
    // });
});
//Parallax
// document.querySelectorAll('.parallax').forEach((elem) => {
	
//     const modifier = elem.getAttribute('data-mody')
//     const modifier2 = elem.getAttribute('data-modx')
//     const from = elem.getAttribute('data-from')
	
// 	basicScroll.create({
// 		elem: elem,
// 		from: from,
// 		to: from+800,
// 		direct: true,
// 		props: {
// 			'--ty': {
// 				from: '0',
//                 to: `${ 5 * modifier }px`,

//             },'--tx': {
//                 from: '0',
//                 to: `${ 5 * modifier2 }px`,
//              }
           
// 		}
// 	}).start();
// });
