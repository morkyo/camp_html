$(function () {
  const slot_disp01 = $(".slot_disp01");
  const slot_disp02 = $(".slot_disp02");
  const slot_disp03 = $(".slot_disp03");
  //STOPボタン押下時の挙動
  let btnClick = function (e) {
    let random = Math.ceil(Math.random() * 4);
    if (e.data.result === slot_disp01) {
      e.data.result.find(".dot01").removeClass("default");
      e.data.result.find("[class^='dot']").hide().removeClass("open");
      if (random === 1) {
        e.data.result.find(".dot02").fadeIn(200).addClass("open");
      }
      if (random === 2) {
        e.data.result.find(".dot03").fadeIn(200).addClass("open");
      }
      if (random === 3) {
        e.data.result.find(".dot04").fadeIn(200).addClass("open");
      }
      if (random === 4) {
        e.data.result.find(".dot05").fadeIn(200).addClass("open");
      }
      $(".slot_btn01").addClass("active");
    }
    if (e.data.result === slot_disp02) {
      e.data.result.find(".dot01").removeClass("default");
      e.data.result.find("[class^='dot']").hide().removeClass("open");
      if (random === 1) {
        e.data.result.find(".dot02").fadeIn(200).addClass("open");
      }
      if (random === 2) {
        e.data.result.find(".dot03").fadeIn(200).addClass("open");
      }
      if (random === 3) {
        e.data.result.find(".dot04").fadeIn(200).addClass("open");
      }
      if (random === 4) {
        e.data.result.find(".dot05").fadeIn(200).addClass("open");
      }
      $(".slot_btn02").addClass("active");
    }
    if (e.data.result === slot_disp03) {
      e.data.result.find(".dot01").removeClass("default");
      e.data.result.find("[class^='dot']").hide().removeClass("open");
      if (random === 1) {
        e.data.result.find(".dot02").fadeIn(200).addClass("open");
      }
      if (random === 2) {
        e.data.result.find(".dot03").fadeIn(200).addClass("open");
      }
      if (random === 3) {
        e.data.result.find(".dot04").fadeIn(200).addClass("open");
      }
      if (random === 4) {
        e.data.result.find(".dot05").fadeIn(200).addClass("open");
      }
      $(".slot_btn03").addClass("active");
    }
    if (e.data.result.find(".dot02").hasClass("open") == true) {
      $(".slot_stts").append("<p>フシギダネが あらわれた!</p>");
    }
    if (e.data.result.find(".dot03").hasClass("open") == true) {
      $(".slot_stts").append("<p>ヒトカゲが あらわれた!</p>");
    }
    if (e.data.result.find(".dot04").hasClass("open") == true) {
      $(".slot_stts").append("<p>ゼニガメが あらわれた!</p>");
    }
    if (e.data.result.find(".dot05").hasClass("open") == true) {
      $(".slot_stts").append("<p>ピカチュウが あらわれた!</p>");
    }
    // 3つ揃った場合の挙動
    if ($(".slot_disp").find(".dot02.open").length == 3) {
      $(".slot_stts").empty().append("<p>フシギダネが そろった!</p>");
      $(".slot_disp").css("background", "#fab595");
    }
    if ($(".slot_disp").find(".dot03.open").length == 3) {
      $(".slot_stts").empty().append("<p>ヒトカゲが そろった!</p>");
      $(".slot_disp").css("background", "#fab595");
    }
    if ($(".slot_disp").find(".dot04.open").length == 3) {
      $(".slot_stts").empty().append("<p>ゼニガメが そろった!</p>");
      $(".slot_disp").css("background", "#fab595");
    }
    if ($(".slot_disp").find(".dot05.open").length == 3) {
      $(".slot_stts").empty().append("<p>ピカチュウが そろった!</p>");
      $(".slot_disp").css("background", "#fab595");
    }

    $(this).prop("disabled", true);
  };
  $(".slot_btn01").on("click", { result: slot_disp01 }, btnClick);
  $(".slot_btn02").on("click", { result: slot_disp02 }, btnClick);
  $(".slot_btn03").on("click", { result: slot_disp03 }, btnClick);

  //STARTボタン押下時の挙動
  let count = 0;
  $(".slot_btn_start").on("click", function () {
    ++count;
    $(".slot_count_disp").html(count.toString().padStart(4, "0"));
    $(".slot_stts").empty().html("スタート!");
    $("[class^='dot'].open").hide().removeClass("open");
    $(".dot01").fadeIn(200).addClass("default");
    $(".slot_btn01,.slot_btn02,.slot_btn03")
      .prop("disabled", false)
      .removeClass("active");
    $(".dot01").css("animation", "fuwafuwa 1s infinite linear alternate");
    $(".slot_disp").css("background", "none");
  });
});
