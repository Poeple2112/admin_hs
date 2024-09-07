const darkmode_change = document.querySelector(".setting_btn");
const nav_bar = document.querySelector(".left_side");
const right_ct = document.querySelector(".right_side");
// const navicon = document.querySelector("#nav");
let dark_light = false;
let check_nav = true;
function darkmode() {
    console.log(dark_light)

    if(dark_light){
        right_ct.style.backgroundColor = ' rgba(0, 0, 0, 0.826)';
        darkmode_change.innerHTML = `<i class="fa-regular fa-moon"></i> Dark`;
        darkmode_change.style.backgroundColor = "white";
         darkmode_change.style.color = "black";
        dark_light = false;
        
    }else{
        right_ct.style.backgroundColor = 'rgb(255, 255, 255)';
        darkmode_change.style.backgroundColor = "black";
        darkmode_change.style.color = "white";
        darkmode_change.innerHTML = `<i class="fa-regular fa-sun"></i> Light`;
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
const logos = ['<i class="fa-brands fa-css3-alt"></i>', '<i class="fa-brands fa-html5"></i>','<i class="fa-brands fa-js"></i>']; // Danh sách các hình ảnh logo
const logoh1 = document.getElementById('logoh1');
let currentLogoIndex = 0;

// Hàm thay đổi logo
function changeLogo() {
    
    logoh1.style.opacity = 0; // Ẩn logo hiện tại
    logoh1.style.transform = `translateX(0px)` 
    setTimeout(function() {
        currentLogoIndex = (currentLogoIndex + 1) % logos.length; // Chuyển sang logo tiếp theo
        console.log(currentLogoIndex)
        logoh1.innerHTML = `${logos[currentLogoIndex]}`; // Đặt hình ảnh mới
        logoh1.style.opacity = 1;
        logoh1.style.transform = `translateX(-60px)` 
    }, 500); // Thời gian chuyển đổi 0.5 giây
}

// Gọi hàm thay đổi logo mỗi 2 giây
setInterval(changeLogo, 2000); // Chuyển đổi mỗi 2 giây