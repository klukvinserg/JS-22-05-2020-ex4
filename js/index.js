let time;
let i = 0;

let heightW;
let heightEl;

let arrNews = [
  {
    title: "News4",
    description:
      "Cursus vitae congue mauris rhoncus aenean vel elit. Nulla posuere sollicitudin aliquam ultrices. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Suscipit tellus mauris a diam. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Nibh mauris cursus mattis molestie a iaculis. Leo duis ut diam quam nulla porttitor massa id neque. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Eleifend quam adipiscing vitae proin sagittis. Lorem donec massa sapien faucibus et. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Praesent elementum facilisis leo vel fringilla. Facilisis gravida neque convallis a cras semper auctor. Maecenas sed enim ut sem viverra aliquet eget. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Nam libero justo laoreet sit amet. Amet nisl suscipit adipiscing bibendum est.",
  },
  {
    title: "News5",
    description:
      "Suspendisse faucibus interdum posuere lorem ipsum. Morbi tempus iaculis urna id volutpat lacus laoreet non. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Lacinia quis vel eros donec ac.",
  },
  {
    title: "News6",
    description:
      "Libero nunc consequat interdum varius sit amet. Morbi tincidunt augue interdum velit euismod in pellentesque. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Magna ac placerat vestibulum lectus mauris. Amet est placerat in egestas erat imperdiet sed euismod nisi.",
  },
  {
    title: "News7",
    description:
      "Non quam lacus suspendisse faucibus interdum posuere. Tellus elementum sagittis vitae et leo duis ut diam quam.",
  },
];

window.addEventListener("scroll", function myScroll() {

  if (arrNews.length - i === 0) {
    return;
  }

  let heightWindow = document.documentElement.clientHeight;
  let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

  if (windowRelativeBottom - heightWindow <= 1) {
    loaderId.style.display = "block";
    time = setTimeout(nextNews, 2000);
  }
});

function nextNews() {

  loaderId.style.display = "none";
  let createEl = document.createElement("div");
  createEl.classList.add("news");

  let str = `<div class="titleNews"><h3>${arrNews[i].title}</h3></div>
             <div class="description">
             ${arrNews[i].description}
             </div>`;
             
  createEl.innerHTML = str;
  mainEl.appendChild(createEl);

  clearTimeout(time);

  i++;

  heightW = document.documentElement.clientHeight;
  heightEl = document.documentElement.scrollHeight;

  onTop();
}

function onTop() {

  let sm = heightEl - heightW - 50;

  window.scrollTo({
    top: sm,
    behavior: "smooth",
  });
}
