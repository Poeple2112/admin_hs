const darkmode_change = document.querySelector(".setting_btn");
const nav_bar = document.querySelector(".left_side");
const right_ct = document.querySelector(".right_side");
// const navicon = document.querySelector("#nav");
let dark_light = true;
let check_nav = true;
function darkmode() {
    if(dark_light){
        right_ct.style.backgroundColor = ' rgba(0, 0, 0, 0.826);'
        dark_light = false;
    }else{
        right_ct.style.backgroundColor = 'white'
        dark_light = true;
    }
}
function bar() {
  if (check_nav) {
    nav_bar.innerHTML = ``;
    nav_bar.style.transform = `  translateX(-140px) `;

    check_nav = false;
  } else {
    nav_bar.innerHTML = `<a><p style="margin-top:60px;">Dashboard</p></a><br /> <a><p>manager</p></a><br /><a><p>setting</p></a>`;

    nav_bar.style.transform = `  translateX(0px) `;

    check_nav = true;
  }
}
