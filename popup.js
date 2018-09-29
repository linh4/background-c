let image = {heh: 'https://www.tabeer.pk/wallpaper/wp-content/uploads/2018/01/Doge-Wallpaper-1920x1080-57.jpg',
cat: 'http://humaneforpets.com/wp-content/uploads/2014/02/CatSnow.jpg'}

function click(e) {
  chrome.tabs.executeScript(null,
    {code: "document.body.style.backgroundImage='url(" + image[e.target.id] + "'"})
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  let div = document.querySelectorAll('div');
  div.forEach(pic => {
    pic.addEventListener('click', click)
  })
})
