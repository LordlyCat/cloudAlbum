import '../css/index.css';
import '../js/ui.js';
import ajax from '../js/Ajax.js';
import icon from '../icon/pullDown.png';
//const requireContext = require.context("../img/", true, /^\.\/.*\.jpg$/);
//const imgArr = requireContext.keys().map(requireContext);


var heightArr = [];

function getMinBoxIndex(val, arr) {
    for (var i in arr) {
        if (val === arr[i]) {
            return i;
        }
    }
}

// var wrapper = document.querySelector('.wrapper');
// for (var i = 0; i < imgArr.length; i++) {
//     var img = document.createElement('img');
//     img.src = imgArr[i];
//     wrapper.appendChild(img);
// }

// var imgDOM = wrapper.querySelectorAll('img');
// var loading = document.querySelector('.loading');


//等待图片加载完毕
var n = 0;
// for (var i = 0; i < imgArr.length; i++) {
//     imgDOM[i].onload = function() {
//         if (n < imgDOM.length) {
//             n++;
//             loading.style.display = 'inline-block';
//         }
//         if (n === imgDOM.length) {
//             show();
//             wrapper.style.opacity = 1;
//             loading.style.display = 'none';
//         }
//     }
// }

//排列图片
function show() {
    var col = 4; //列数
    for (var i = 0; i < imgArr.length; i++) {
        if (i <= col - 1 && i !== 0) {
            heightArr.push(imgDOM[i].height);
            imgDOM[i].style.left = 310 * i + 'px';
        } else if (i === 0) {
            heightArr.push(imgDOM[i].height);
            imgDOM[i].style.left = '0px';
        } else {
            //求出最矮的队列高度
            var minHeight = Math.min.apply(null, heightArr);
            //求出最矮队列对应的索引
            var minIndex = getMinBoxIndex(minHeight, heightArr);
            if (minIndex == 0) {
                imgDOM[i].style.left = '0px';
            } else {
                imgDOM[i].style.left = 310 * minIndex + 'px';
            }
            imgDOM[i].style.top = minHeight + 15 + 'px';
            heightArr[minIndex] += (imgDOM[i].height + 15);
            //求出最高的队列高度
            var maxHeight = Math.max.apply(null, heightArr);
            wrapper.style.width = 310 * col - 10 + 'px';
            wrapper.style.height = maxHeight + 10 + 'px';
        }
    }
}


var imgInput = document.querySelector('input');

ajax({
    url: '/',
    method: 'POST',
    
    data: {
        0: 2
    },
    contentType: 'application/x-www-form-urlencoded',
    success: function (data) {
        console.log(data);
    },
    error: function () {
        console.log(0);
    }
})



//The end