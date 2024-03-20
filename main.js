let htmlSection;
let cssSection;
let jsSection;
let resultSection;


if (typeof jQuery == "undefined") {
  alert("Der Link für jQuery funktioniert nicht")
}

$(document).ready(function () {
  let getSectionWidth = $("section").outerWidth();
  if (getSectionWidth <= 274) {
    $("section button").addClass("bigButton");
    $("textarea").addClass("paddingTextarea");
    $("p").addClass("resultTextSmallScreen");
  }

  let getMenuWidth = $("nav").outerWidth();
  if (getMenuWidth <= 214) {
    $("nav").css("width", "50%");
    $("nav").css("left", "27%");
    $("nav").css("right", "23%");
  }


  /** NAV MENU **/

  $(function toggleButtons() {
    htmlSection = true;
    cssSection = false;
    jsSection = false;
    resultSection = true;
    sectionWidth();

    // SECTIONS ANZEIGEN
    $("#htmlButton").on("click", function () {
      if (htmlSection) {
        $("#htmlButton").css("background", "inherit");
        $("#htmlSection").css("display", "none");
        htmlSection = false;
        sectionWidth();
      } else {
        $("#htmlButton").css("background", "rgba(17, 114, 181, 0.50)");
        $("#htmlSection").css("display", "block");
        htmlSection = true;
        sectionWidth();
      }
    })

    $("#cssButton").on("click", function () {
      if (!cssSection) {
        $("#cssButton").css("background", "rgba(232, 79, 27, 0.50)");
        $("#cssSection").css("display", "block");
        cssSection = true;
        sectionWidth();
      } else {
        $("#cssButton").css("background", "inherit");
        $("#cssSection").css("display", "none");
        cssSection = false;
        sectionWidth();
      }
    })

    $("#jsButton").on("click", function () {
      if (!jsSection) {
        $("#jsButton").css("background", "rgba(250, 177, 49, 0.50)");
        $("#jsSection").css("display", "block");
        jsSection = true;
        sectionWidth();
      } else {
        $("#jsButton").css("background", "inherit");
        $("#jsSection").css("display", "none");
        jsSection = false;
        sectionWidth();
      }
    })

    $("#resultButton").on("click", function () {
      if (resultSection) {
        $("#resultButton").css("background", "inherit");
        $("#resultSection").css("display", "none");
        resultSection = false;
        sectionWidth();
      } else {
        $("#resultButton").css("background", "rgba(128, 128, 128, 0.50)");
        $("#resultSection").css("display", "block");
        resultSection = true;
        sectionWidth();
      }
    })
  });

  function sectionWidth() {
    /*ANZAHL AN SECTIONS*/
    let sectionsZahl = [];

    if (htmlSection) {
      sectionsZahl.push("html");
    }
    if (cssSection) {
      sectionsZahl.push("css");
    }
    if (jsSection) {
      sectionsZahl.push("js");
    }
    if (resultSection) {
      sectionsZahl.push("result");
    }

    if (sectionsZahl.length === "1") {
      $("section").css("width", "100%");
    } else if (sectionsZahl.length === "2") {
      $("section").css("width", "49.5%");
    } else if (sectionsZahl.length === "3") {
      $("section").css("width", "33%");
    } else if (sectionsZahl.length === "4") {
      $("section").css("width", "24.5%");
    }
  }

  $("#runButton").on("click", function () {

    let htmlText = $("#htmlText").val();
    let cssText = $("#cssText").val();

    let jsText = $("#jsText").val();

    document.getElementById("resultText").innerHTML =
      htmlText + "<style>" + cssText + "</style>";

    document.getElementById("resultText").contentWindow.eval(jsText);
  });

  $(document).tooltip();

});
