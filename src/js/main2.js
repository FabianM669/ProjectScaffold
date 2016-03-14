var gallery = document.createElement('div');
gallery.className = 'gallery';

var galleryCurrent = document.createElement('img');
galleryCurrent.className = 'galleryCurrent';

var galleryScroll = document.createElement('img');
galleryScroll.className = 'galleryScroll';

gallery.appendChild(galleryCurrent);
gallery.appendChild(galleryScroll);

var images = ['src/img/highway.jpg', 'src/img/jalapenos.jpg', 'src/img/lightbulb.jpg', 'src/img/pan.jpg', 'src/img/piano.jpg', 'src/img/trash.jpg', 'src/img/soundboard.jpg'];

var scripTags = document.querySelector('script');

document.body.insertBefore(gallery, scripTags);

galleryCurrent.setAttribute('src', images[0]);

var createImage = document.createElement('img')

function createScroll (array) {
    array.reduce(function (prev, next){
        galleryScroll + galleryScroll.setAttribute('src' + next);
    });
    return galleryScroll;
}


