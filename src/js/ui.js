var user = document.querySelector('.user');
var board = document.querySelector('.board');
var pullIcon = document.querySelector('.pullIcon');
var triangle = document.querySelector('.triangle');
var fullCover = document.querySelector('.fullCover');
var create = document.querySelector('.create');
var add = document.querySelector('.add');
var addButton = add.querySelector('img');
var out = create.querySelector('.out');
var cancel = create.querySelector('.cancel');
var albumNameInput = create.querySelector('input');
var selected = document.querySelector('select');
var album = document.querySelector('.album');
var showBorad = document.querySelector('.showPicture');
var insert = document.querySelector('.insert');
var createButton = create.querySelector('.check');
var albumBoxes = document.querySelectorAll('.albumBox');


//console.log(selected.options[selected.selectedIndex].text);
//设置遮罩层高度
var h = document.documentElement.clientHeight;
fullCover.style.height = h + 'px';

function getStyle(element, attr) {
    if (element.currentStyle) {
        return element.currentStyle[attr];
    } else {
        return window.getComputedStyle(element, null)[attr];
    }
}

function displayBoard() {
    if (getStyle(board, 'display') === 'block') {
        board.style.display = 'none';
        triangle.style.display = 'none';
    } else {
        board.style.display = 'block';
        triangle.style.display = 'block';
    }
}

function hideCreateBoard() {
    create.style.display = 'none';
    create.style.opacity = 0;
    fullCover.style.display = 'none';
    albumNameInput.value = '';
    selected.selectedIndex = 0;
}

function getTime() {
    var time;
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    time = year + '-' + month + '-' + day;
    return time;
}
getTime();

function createAlbum() {
    var firstAlbum = document.querySelectorAll('.albumBox')[0];
    var newAlbum = document.createElement('div');
    newAlbum.className = 'albumBox';

    var albumName = create.querySelector('input').value;
    var permission = selected.options[selected.selectedIndex].text;

    if (albumName.length > 13) {
        alert('The name is too long !');
        return;
    }

    newAlbum.innerHTML = '<div class="cover">' +
        '<img src="" alt="">' +
        '</div>' +
        '<p class="albumName">' + '<span>' + albumName + '</span>' + ' <span>(' + 0 + ')</span>' + '</p>' +
        '<p class="time">' + 'Created at ' + getTime() + '</p>' +
        '<p class="status">' + permission + '</p>';

    if (firstAlbum) {
        album.insertBefore(newAlbum, firstAlbum);
    } else {
        album.insertBefore(newAlbum, add);
    }

    hideCreateBoard();

    //重新获取相册数目
    albumBoxes = document.querySelectorAll('.albumBox');
    newAlbum.addEventListener('click', showAlbumPictures, false);
}

user.addEventListener('click', displayBoard, false);
pullIcon.addEventListener('click', displayBoard, false);
out.addEventListener('click', hideCreateBoard, false);
cancel.addEventListener('click', hideCreateBoard, false);
addButton.addEventListener('click', function() {
    create.style.display = 'block';
    setTimeout(function() {
        fullCover.style.display = 'block';
        create.style.opacity = 1;
    }, 200)
}, false);

createButton.addEventListener('click', createAlbum, false);

var albumName = showBorad.querySelector('.albumName'),
    pictureNum = showBorad.querySelector('.num'),
    permission; //= showBorad.querySelector('.permission');

function showAlbumPictures (event) {
    album.style.display = 'none';
    showBorad.style.display = 'block';

    var event = event || window.event,
        e = event.target || event>srcElement,
        albumBox = e.parentNode;


    // var name,
    //     num,
    //     perm;

    albumName.innerHTML = albumBox.childNodes[1].childNodes[0].innerHTML;
    pictureNum.innerHTML = '共 ' + albumBox.childNodes[1].childNodes[2].innerHTML.replace(/[^\d]/g, '') + ' 张';
    perm = albumBox.childNodes[3].innerHTML;

}

var back = showBorad.querySelector('.back');
function backUpper () {
    showBorad.style.display = 'none';
    album.style.display = 'block';
}

back.addEventListener('click', backUpper, false);




//The end