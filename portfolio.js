let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');
let readLess = document.getElementById('read-less');

function showInfo() {
  moreInfo.style.display = 'inline-block';
  readLess.style.display = 'inline-block';
  readMore.style.display = 'none'
}

function hideInfo() {
  moreInfo.style.display = 'none'
  readLess.style.display = 'none'
  readMore.style.display = 'inline-block'
}

readMore.addEventListener('click', showInfo)

readLess.addEventListener('click', hideInfo)