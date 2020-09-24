// CSSインポート
import "../scss/app.scss";

// JSインポート
import "bootstrap";
import "bootstrap-input-spinner";
import "slick-carousel";
import "select2";
const feather = require("feather-icons");

$(function () {
  let head_h = $("#header").outerHeight() + 16;
  let window_w = $(window).outerWidth();
  let telephone_no = '<meta name="format-detection" content="telephone=no">';

  // meta制御
  $("head meta:last").after(telephone_no);

  // featherIcons
  feather.replace({
    width: 18,
  });

  // OnlyTOP
  $("#FirstSelect").modal("show");

  // STEP1
  $("#step1")
    .find(".btn")
    .on("click", function () {
      $("#step1").removeClass("show active");
      $("#step2").addClass("show active");
      $("#first-progress .steps").text("2/3");
      $("#first-progress .progress-bar").css("width", "33.33333%");
      $("#first-progress .progress-bar").attr("aria-valuenow", "33.33333");
    });
  // STEP1
  $("#step2")
    .find(".btn")
    .on("click", function () {
      $("#step2").removeClass("show active");
      $("#step3").addClass("show active");
      $("#first-progress .steps").text("3/3");
      $("#first-progress .progress-bar").css("width", "66.66666%");
      $("#first-progress .progress-bar").attr("aria-valuenow", "66.66666%");
    });
  $("#step2")
    .find(".btn-step-back")
    .on("click", function () {
      $("#step2").removeClass("show active");
      $("#step1").addClass("show active");
      $("#first-progress .steps").text("1/3");
      $("#first-progress .progress-bar").css("width", "0");
      $("#first-progress .progress-bar").attr("aria-valuenow", "0");
    });
  // STEP3
  $("#step3")
    .find(".btn-step-back")
    .on("click", function () {
      $("#step3").removeClass("show active");
      $("#step2").addClass("show active");
      $("#first-progress .steps").text("2/3");
      $("#first-progress .progress-bar").css("width", "33.33333%");
      $("#first-progress .progress-bar").attr("aria-valuenow", "33.33333");
    });

  // スムーススクロール
  $(".smooth").on("click", function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - head_h;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // SPメニュー
  $("#spopen, .overray, .spmenu-close").on("click", function () {
    $(this).toggleClass("active");
    $("#spmenu").toggleClass("active");
    $("body").toggleClass("spopen");
  });

  // bootstrap-input-spinner
  $(".num-spinner").inputSpinner();

  // slick
  $(".home-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "10vw",
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0",
        },
      },
    ],
  });
  $(".modal-slide").slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: false,
    arrows: false,
  });

  // carousel
  $(".carousel").carousel({
    interval: false,
  });

  // --- home ------------------------------------ //
  if (window_w >= 990) {
    $("#catalog").addClass("container");
  }
  $(".addcart").on("click", function () {
    alert("カートに追加されました");
    $(".modal").modal("hide");
  });
  $("#deliveryShop").select2({
    theme: "bootstrap4",
    placeholder: "キーワードで検索",
  });

  // --- cart ------------------------------------ //
  $(".okimochi-btns .btn").on("click", function () {
    $(".okimochi-btns .btn").removeClass("active");
    $(this).addClass("active");
  });

  // --- form ------------------------------------ //
  // 支払い方法
  $("select#pay").on("change", function () {
    if ($(this).val() != 0) {
      $("#payjp_checkout_box").css("display", "none");
    } else {
      $("#payjp_checkout_box").css("display", "block");
    }
  });
  // クーポン
  $("#coupon").on("change", function () {
    if ($(this).val() != "") {
      $("#couponSuccess").css("display", "block");
    } else {
      $("#couponSuccess").css("display", "none");
    }
  });
});
