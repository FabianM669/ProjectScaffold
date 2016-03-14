// (function ($) {

//     var images = ['src/img/highway.jpg', 'src/img/jalapenos.jpg', 'src/img/lightbulb.jpg', 'src/img/pan.jpg', 'src/img/piano.jpg', 'src/img/trash.jpg', 'src/img/soundboard.jpg'];
//     var container = $('#gallery');
//     var current = container.find('.gallery-current');
//     var scroll = container.find('.gallery-scroll');

//     function setCurrentSrc (url) {
//         current.attr('src', url);
//     }

//     var scrollElements = images.reduce(function (prev, next) {
//         // Create a new image
//         var image = $('<img>');
//         // Set the 'src' attribute to the url
//         image.attr('src', next);
//         // Add and return the updated collection
//         return prev.add(image);
//     }, $());

//     scroll.append(scrollElements);

//     setCurrentSrc(images[0]);

//     scroll.on('click', function (e) {

//         if ($(e.target).is('img')) {
//             current.attr('src', $(e.target).attr('src'));
//         }

//     });

// })(window.jQuery);


// function photoGallery (el,arr) {
//     el = $(el);
//     var current = el.find('.gallery-current');
//     var scroll = el.find('.gallery-scroll');

//     //

//     return {
//         destroy: function (){},
//         addImage: function (){
//             scroll.append(addImage(url));
//         },
//         removeImage: function () {}
//     }
// }

(function containerFunction () {

var images = ['src/img/highway.jpg', 'src/img/jalapenos.jpg', 'src/img/lightbulb.jpg', 'src/img/pan.jpg', 'src/img/piano.jpg', 'src/img/trash.jpg', 'src/img/soundboard.jpg'];

function photoGallery (el, arr) {

    el = $(el);

    var gallery = $('<div></div>', {
        class: 'gallery'
    });

    var galleryCurrent = $('<img>', {
        class: 'galleryCurrent'
    });

    var galleryScroll = $('<div></div>', {
        class: 'galleryScroll'
    });

    gallery.append(galleryCurrent, galleryScroll);

    el.append(gallery);


    function setCurrentSrc (url) {
        galleryCurrent.attr('src', url);
    }

    function createImage (url) {
        // Create a new image
        var image = $('<img>');
        // Set the 'src' attribute to the url
        image.attr('src', url);
        return image;
    }

    var scrollElements = arr.reduce(function (prev, next) {
        // Create a new image
        var image = createImage(next);
        // Add and return the updated collection
        return prev.add(image);
    }, $());

    galleryScroll.append(scrollElements);

    setCurrentSrc(arr[0]);

    galleryScroll.on('click', function (e) {

        if ($(e.target).is('img')) {
            galleryCurrent.attr('src', $(e.target).attr('src'));
        }
    });

    return {
        addImage: function (url) {
            var image = createImage(url);
            galleryScroll.append(image);
        },
        removeImage: function (url) {
            $('[src="' + url + '"]').remove();
        },
        destroy: function () {
            galleryScroll.remove();
            galleryCurrent.remove();
            gallery.remove();
        }
    };
}

    var myGallery = photoGallery(document.body, images);

})();