// light box
//create lightbox over lay
//add the over lay
//$variablename for jquery objects

var $overlaycovers = $('<div id="overlaycovers"></div>');
//disembodied element from the DOM
var $image = $("<img>");
//another diembodied element for caoption
var $caption = $("<p></p>");
// caption to acompany image overlay

//image is added to the overlay DIV disembodied element
$overlaycovers.append($image);
//append caption to overlay
$overlaycovers.append($caption);

//overlay object is added to the DOM here
$("body").append($overlaycovers);

//user clicks on link, around the image
//1.capture click event on image ***created ID in the top UL element named imageGallery to reference all child anchors
$("#anthcovers a").click(function() {
    event.preventDefault();
    //*this refers to the image anchor you clicked on
    var imagelocation = $(this).attr("href");
    //1.2 update overlay with image linked in link
    $image.attr("src", imagelocation)


    //1.1show overlay
    $overlaycovers.show();
    // console.log(href);


    //1.3 get child alt and set caption
    var captiontext = $(this).children("img").attr("alt");
    $caption.text(captiontext);

});


//2 add overlay
//2.1 add image
//2.2 caption

//3 user action to leave over lay, click overlay

$overlaycovers.click(function() {
    $(this).hide();

})

//3.1 hide overlay

// end light box



// 

//