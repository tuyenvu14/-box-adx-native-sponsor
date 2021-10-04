"use strict";

var dataBox = {
  image: "../images/Rectangle_6.4.jpg",
  description: {
    title: "Kỳ nghỉ 5 sao tại thiên đường nghỉ dưỡng Vinpearl",
    link: "wowholiday.vn/",
    content:
      "Tận hưởng ưu đãi đặc biệt dành cho thành viên mới, trọn gói 3N2Đ chỉ từ 1,250,000/khách. Tận hưởng ưu đãi đặc biệt dành cho thành viên mới",
    donors: ["Vinpearl"],
    imageClose: "../images/adxlogo-2.jpg",
  },
};
function showBox(dataBox) {
  var result = document.getElementById("boxid");
  result.innerHTML = "";
  result.innerHTML += `<div class="container">
      <div class="container-image">
          <img src="${dataBox.image}" />
      </div>

      <div class="container-description">
          <div class="container-description-close">
              <img src="${dataBox.description.imageClose}" />
          </div>
          <div class="container-description-next">
              <i class="fas fa-arrow-circle-right fa-2x"></i>
          </div>
          <div class="container-description-title">${dataBox.description.title}</div>
          <div class="container-description-link">${dataBox.description.link}</div>
          <div class="container-description-content">${dataBox.description.content}</div>
          <div class="container-description-logo">
              <span>${dataBox.description.donors}</span>
              <span>tài trợ</span>
          </div>

      </div>
    </div>`;
}
showBox(dataBox);
