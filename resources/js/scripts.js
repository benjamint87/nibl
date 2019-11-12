cssVars();

// opnen and close nav
// get nav-prompt button, listen to click
$('.nav-prompt').click(function() {

// get and check value of aria-expanded
if ($('.nav-inner').attr('aria-expanded') == 'false' ){

// change value of aria-expanded to trigger nav to be shown
    $('.nav-inner' ).attr('aria-expanded', 'true' );
    
} else {
    // change value of aria-expanded to trigger nav to be hidden
    $('.nav-inner' ).attr('aria-expanded', 'false' );

};

// if( $('.nav-prompt').text() == 'Close Navigation' ){
// $('.nav-prompt').text( 'Open Navigation' );
// } else {
//     $('.nav-prompt').text( 'Close Navigation' );
// }

});

$('.nav-inner').click(function() {
    // change value of aria-expanded to trigger nav to be hidden
    $('.nav-inner' ).attr('aria-expanded', 'false' );

});


function myFunction(x) {
    x.classList.toggle("change");
}
  

// image galery

function imageGallery(){

    //get image-gallery length
if( $('.image-gallery').length  ){
    $('.image-gallery a').simpleLightbox();
}

}

imageGallery();

// active nav

function activeMenu(){

    var url = window.location.href;

    $( '.nav-inner a' ).filter(function(){

return this.href == url;

    }).addClass('active');

}

activeMenu();

/* animated hamburger menu */
function myFunction(x) {
    x.classList.toggle("change");
  }
  



//get
//listen
//do