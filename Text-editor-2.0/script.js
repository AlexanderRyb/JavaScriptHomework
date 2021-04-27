//change font style
$(document).ready(function () {
  $(".bold-button").click(function () {
    $(".content").toggleClass("bold");
  });
});
$(document).ready(function () {
  $(".italic-button").click(function () {
    $(".content").toggleClass("italic");
  });
});
$(document).ready(function () {
  $(".underline-button").click(function () {
    $(".content").toggleClass("underline");
  });
});
$(document).ready(function () {
  $(".strike-through-button").click(function () {
    $(".content").toggleClass("strike-through");
  });
});
//change text alignment
$(document).ready(function () {
  $(".align-left-button").click(function () {
    $(".content").css("text-align", "left");
  });
});
$(document).ready(function () {
  $(".align-right-button").click(function () {
    $(".content").css("text-align", "right");
  });
});

$(document).ready(function () {
  $(".align-center-button").click(function () {
    $(".content").css("text-align", "center");
  });
});
//open dropdown menu for changing font family
$(document).ready(function () {
  $(".font-family-button").click(function () {
    $(".font-family-choice").toggleClass("visible");
  });
});
//change font family
$(document).ready(function () {
  $(".font-family-choice li:nth-of-type(1)").click(function () {
    $(".content").css("font-family", "Arial");
  });
});

$(document).ready(function () {
  $(".font-family-choice li:nth-of-type(2)").click(function () {
    $(".content").css("font-family", "Giorgia");
  });
});
$(document).ready(function () {
  $(".font-family-choice li:nth-of-type(3)").click(function () {
    $(".content").css("font-family", "Impact");
  });
});
$(document).ready(function () {
  $(".font-family-choice li:nth-of-type(4)").click(function () {
    $(".content").css("font-family", "Tahoma");
  });
});
$(document).ready(function () {
  $(".font-family-choice li:nth-of-type(5)").click(function () {
    $(".content").css("font-family", "Times New Roman");
  });
});
$(document).ready(function () {
  $(".font-family-choice li:nth-of-type(6)").click(function () {
    $(".content").css("font-family", "Verdana");
  });
});

//open dropdown menu for changing font size

$(document).ready(function () {
  $(".font-size-button").click(function () {
    $(".font-size-choice").toggleClass("visible");
  });
});
//change font size
$(document).ready(function () {
  $(".font-size-choice li:nth-of-type(1)").click(function () {
    $(".content").css("font-size", "12px");
  });
});

$(document).ready(function () {
  $(".font-size-choice li:nth-of-type(2)").click(function () {
    $(".content").css("font-size", "14px");
  });
});
$(document).ready(function () {
  $(".font-size-choice li:nth-of-type(3)").click(function () {
    $(".content").css("font-size", "16px");
  });
});
$(document).ready(function () {
  $(".font-size-choice li:nth-of-type(4)").click(function () {
    $(".content").css("font-size", "18px");
  });
});
$(document).ready(function () {
  $(".font-size-choice li:nth-of-type(5)").click(function () {
    $(".content").css("font-size", "20px");
  });
});
$(document).ready(function () {
  $(".font-size-choice li:nth-of-type(6)").click(function () {
    $(".content").css("font-size", "22px");
  });
});
$(document).ready(function () {
  $(".font-size-choice li:nth-of-type(7)").click(function () {
    $(".content").css("font-size", "25px");
  });
});
$(document).ready(function () {
  $(".font-size-choice li:nth-of-type(8)").click(function () {
    $(".content").css("font-size", "30px");
  });
});
//font color menu
$(document).ready(function () {
  $("#dialog").dialog({
    autoOpen: false,
    closeOnEscape: false,
    width: 500,
    resizable: false,
    position: { my: "top", at: "top+50" },

    resizable: false,
  });

  $(".font-color-button").click(function () {
    $("#dialog").dialog("open");
    $("#grayout-background").css("display", "block");
  });
});

//change font color

$(document).ready(function () {
  $(".color-grid div:nth-of-type(1)").click(function () {
    $(".content").css("color", "#0AA999");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(2)").click(function () {
    $(".content").css("color", "#089083");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(3)").click(function () {
    $(".content").css("color", "#1FB66C");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(4)").click(function () {
    $(".content").css("color", "#1B9B5E");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(5)").click(function () {
    $(".content").css("color", "#1B9B5E");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(6)").click(function () {
    $(".content").css("color", "#207AB9");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(7)").click(function () {
    $(".content").css("color", "#9B64B5");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(8)").click(function () {
    $(".content").css("color", "#9051AD");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(9)").click(function () {
    $(".content").css("color", "#31485E");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(10)").click(function () {
    $(".content").css("color", "#283D4F");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(11)").click(function () {
    $(".content").css("color", "#F7BC05");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(12)").click(function () {
    $(".content").css("color", "#F89B0A");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(13)").click(function () {
    $(".content").css("color", "#ED821B");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(14)").click(function () {
    $(".content").css("color", "#DB5C00");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(15)").click(function () {
    $(".content").css("color", "#DB5C00");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(16)").click(function () {
    $(".content").css("color", "#C84425");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(17)").click(function () {
    $(".content").css("color", "#EAEEF0");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(18)").click(function () {
    $(".content").css("color", "#BBC1C4");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(19)").click(function () {
    $(".content").css("color", "#90A2A2");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(20)").click(function () {
    $(".content").css("color", "#7C8A8B");
  });
});
$(document).ready(function () {
  $(".color-grid div:nth-of-type(21)").click(function () {
    $(".content").css("color", "black");
  });
});

//background color or image

$(document).ready(function () {
  $("#background-dialog").dialog({
    autoOpen: false,
    closeOnEscape: false,
    width: 450,
    resizable: false,
    position: { my: "top", at: "top+50" },

    resizable: false,
  });

  $(".background-color-button").click(function () {
    $("#background-dialog").dialog("open");
    $("#grayout-background").css("display", "block");
  });
});

$(document).ready(function () {
  $(".close-button").click(function () {
    $(".ui-dialog-content").dialog("close");
    $("#grayout-background").css("display", "none");
  });
});

function removeImage() {
  $("body").css("background-image", "none"); //removes background image so you could switch back to background color
}

$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(1)").click(function () {
    $("body").css("background-color", "#0AA999");
    $("body").css("background-image", "none");
  });
});

//change color on click functions
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(1)").click(function () {
    $("body").css("background-color", "#0AA999");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(2)").click(function () {
    $("body").css("background-color", "#089083");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(3)").click(function () {
    $("body").css("background-color", "#1FB66C");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(4)").click(function () {
    $(".body").css("background-color", "#1B9B5E");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(5)").click(function () {
    $("body").css("background-color", "#1B9B5E");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(6)").click(function () {
    $("body").css("background-color", "#207AB9");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(7)").click(function () {
    $("body").css("background-color", "#9B64B5");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(8)").click(function () {
    $("body").css("background-color", "#9051AD");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(9)").click(function () {
    $("body").css("background-color", "#31485E");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(10)").click(function () {
    $("body").css("background-color", "#283D4F");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(11)").click(function () {
    $("body").css("background-color", "#F7BC05");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(12)").click(function () {
    $("body").css("background-color", "#F89B0A");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(13)").click(function () {
    $("body").css("background-color", "#ED821B");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(14)").click(function () {
    $("body").css("background-color", "#DB5C00");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(15)").click(function () {
    $("body").css("background-color", "#DB5C00");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(16)").click(function () {
    $("body").css("background-color", "#C84425");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(17)").click(function () {
    $("body").css("background-color", "#EAEEF0");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".backgrond-color-grid div:nth-of-type(18)").click(function () {
    $("body").css("background-color", "#BBC1C4");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(19)").click(function () {
    $("body").css("background-color", "#90A2A2");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(20)").click(function () {
    $("body").css("background-color", "#7C8A8B");
    $("body").css("background-image", "none");
  });
});
$(document).ready(function () {
  $(".background-color-grid div:nth-of-type(21)").click(function () {
    $("body").css("background-image", "none");
    $("body").css("background-color", "black");
  });
});
//
$(document).ready(function () {
  $(".colors").click(function () {
    $(".background-color-grid").css("display", "flex");
    $(".background-image-grid").css("display", "none");
    $(".file-upload").css("display", "none");
  });
});
$(document).ready(function () {
  $(".images").click(function () {
    $(".background-image-grid").css("display", "flex");
    $(".background-color-grid").css("display", "none");
    $(".file-upload").css("display", "none");
  });
});
$(document).ready(function () {
  $(".files").click(function () {
    $(".file-upload").css("display", "flex");
    $(".background-color-grid").css("display", "none");
    $(".background-image-grid").css("display", "none");
  });
});
$(document).ready(function () {
  $(".default-image-1").click(function () {
    $("body").css("background-image", "url(/images/image-1.jpg)");
  });
});
$(document).ready(function () {
  $(".default-image-2").click(function () {
    $("body").css("background-image", "url(/images/image-2.jpg)");
  });
});
$(document).ready(function () {
  $(".default-image-3").click(function () {
    $("body").css("background-image", "url(/images/image-3.jpg)");
  });
});
$(document).ready(function () {
  $(".default-image-4").click(function () {
    $("body").css("background-image", "url(/images/image-4.jpg)");
  });
});
$(document).ready(function () {
  $(".default-image-5").click(function () {
    $("body").css("background-image", "url(/images/image-5.jpg)");
  });
});
$(document).ready(function () {
  $(".default-image-6").click(function () {
    $("body").css("background-image", "url(/images/image-6.jpg)");
  });
});
$(document).ready(function () {
  $(".default-image-7").click(function () {
    $("body").css("background-image", "url(/images/image-7.jpg)");
  });
});
$(document).ready(function () {
  $(".default-image-8").click(function () {
    $("body").css("background-image", "url(/images/image-8.jpg)");
  });
});
$(document).ready(function () {
  $(".default-image-9").click(function () {
    $("body").css("background-image", "url(/images/image-9.jpg)");
  });
});

$(document).ready(function () {
  $("#file").change(function () {
    var value = $("#file").val();
    $("body").css("background-image", "url(" + value + ")");
    console.log(value);
  });
});

//log in dialog

$(document).ready(function () {
  $("#log-in-dialog").dialog({
    autoOpen: false,
    closeOnEscape: false,
    width: 550,
    resizable: false,
    position: { my: "top", at: "top+50" },
    resizable: false,
  });

  $(".login-button").click(function () {
    $("#log-in-dialog").dialog("open");
    $("#log-in-dialog").css("display", "block");
    $("#grayout-background").css("display", "block");
  });
});

$(document).ready(function () {
  $("#signin").click(function () {
    var correctName = "admin";
    var correctPass = "123";
    var txt2 = $("<p></p>").text("Text.");
    var name = $("#name").val();
    var password = $("#password").val();
    // Checking for blank fields.
    if (name == "" || password == "") {
      $('input[type="text"],input[type="password"]').css(
        "border",
        "2px solid #C27371"
      );
      $('input[type="text"],input[type="password"]').css(
        "box-shadow",
        "0 0 3px #C27371"
      );
      $("#empty-value").css("display", "block");
      $("#wrong-login-password").css("display", "none");
    } else if (name != correctName || password != correctPass) {
      $("#wrong-login-password").css("display", "block");
      $("#empty-value").css("display", "none");
    } else {
      $("#log-in-dialog").dialog("close");
      $("#grayout-background").css("display", "none");
      $(".redact-code-button").attr("disabled", false);
      $(".logout-button").css("display", "block");
      $(".login-button").css("display", "none");
    }
  });
});
//logout
$(document).ready(function () {
  $(".logout-button").click(function () {
    $(".redact-code-button").attr("disabled", true);
    $(".logout-button").css("display", "none");
    $(".login-button").css("display", "block");
  });
});
//swap menu and make content editable
$(document).ready(function () {
  $(".redact-code-button").click(function () {
    {
      $(".menu").css("display", "none");
      $(".second-menu").css("display", "flex");
      $(".content").attr("contenteditable", "true");
      let data = $(".content").html();
      $(".content").text(data);
    }
  });
});

// save changes

$(document).ready(function () {
  $(".save-button").click(function () {
    {
      $(".menu").css("display", "flex");
      $(".second-menu").css("display", "none");
      $(".content").attr("contenteditable", "false");
      let input = $(".content").text();
      $(".content").html(input);

      var tdWidth = $("#width-td").val();
      var tdHeight = $("#height-td").val();
      var tdBorderWidth = $("#width-border").val();
      var styleBorder = $("#style-border").val();
      var colorBorder = $("#color-border").val();

      $("td").width(tdWidth + "px");
      $("td").height(tdHeight + "px");
      $("td").css("border-width", tdBorderWidth + "px");
      $("td").css("border-style", styleBorder);
      $("td").css("border-color", colorBorder);
    }
  });
});

//open table dialog

$(document).ready(function () {
  $("#table-dialog").dialog({
    autoOpen: false,
    closeOnEscape: false,
    width: 950,
    resizable: false,
    position: { my: "top", at: "top+50" },

    resizable: false,
  });

  $(".table-button").click(function () {
    $("#table-dialog").dialog("open");
    $("#grayout-background").css("display", "block");
  });
});

// open ol dialog
$(document).ready(function () {
  $("#ol-dialog").dialog({
    autoOpen: false,
    closeOnEscape: false,
    width: 450,
    resizable: false,
    position: { my: "top", at: "top+50" },

    resizable: false,
  });

  $(".ol-button").click(function () {
    $("#ol-dialog").dialog("open");
    $("#grayout-background").css("display", "block");
  });
});
// open ul dialog
$(document).ready(function () {
  $("#ul-dialog").dialog({
    autoOpen: false,
    closeOnEscape: false,
    width: 450,
    resizable: false,
    position: { my: "top", at: "top+50" },

    resizable: false,
  });

  $(".ul-button").click(function () {
    $("#ul-dialog").dialog("open");
    $("#grayout-background").css("display", "block");
  });
});

// table validation
$(document).ready(function () {
  $(".create-table-button").click(function () {
    var isValid = true;
    $(".first-column >input, .second-column>input").each(function () {
      if ($(this).val() === "") isValid = false;
    });
    console.log(isValid);
    if (isValid) {
      createTable();
      $(".invalid-value").css("display", "none");
      $("input, select").css("border", "1px solid #d3d3d3");
    } else {
      $(".invalid-value").css("display", "block");
      $("input, select").css("border", "2px solid #C27371");
    }
  });
});

//  table

function createTable() {
  var number_of_rows = $("#count-tr").val();
  var number_of_cols = $("#count-td").val();
  var tdWidth = $("#width-td").val();
  var tdHeight = $("#height-td").val();
  var tdBorderWidth = $("#width-border").val();
  var styleBorder = $("#style-border").val();
  var colorBorder = $("#color-border").val();

  var table_body = "<table >";
  for (var i = 0; i < number_of_rows; i++) {
    table_body += "<tr>";
    for (var j = 0; j < number_of_cols; j++) {
      table_body += "<td>";
      table_body += "TD";
      table_body += "</td>";
    }
    table_body += "</tr>";
  }
  table_body += "</table>";

  let content = $(".content").text();
  $(".content").text(content + table_body);

  $("td").width(tdWidth + "px");
  $("td").height(tdHeight + "px");
  $("td").css("border-width", tdBorderWidth + "px");
  $("td").css("border-style", styleBorder);
  $("td").css("border-color", colorBorder);
}
//unordered list validation
$(document).ready(function () {
  $(".create-ul-button").click(function () {
    var isValid = true;
    $("#ul-dialog>input, select").each(function () {
      if ($(this).val() === "") isValid = false;
    });
    console.log(isValid);
    if (isValid) {
      createUl();
      $(".invalid-value").css("display", "none");
      $("input, select").css("border", "1px solid #d3d3d3");
    } else {
      $(".invalid-value").css("display", "block");
      $("input, select").css("border", "2px solid #C27371");
    }
  });
});

//unordered list

function createUl() {
  let numberOfLi = $("#count-ul-li").val();
  let unorderedList = "<ul";
  let type = $("#type-mark-ul").val();
  let content = $(".content").text();
  unorderedList += ' type="' + type + '">';

  for (var i = 0; i < numberOfLi; i++) {
    unorderedList += "<li>";
    unorderedList += "item " + (i + 1);
  }
  unorderedList += "</ul>";
  console.log(unorderedList);
  $(".content").text(content + unorderedList);
}

//ordered list validation
$(document).ready(function () {
  $(".create-ol-button").click(function () {
    var isValid = true;
    $("#ol-dialog>input,select").each(function () {
      if ($(this).val() === "") isValid = false;
    });
    console.log(isValid);
    if (isValid) {
      createOl();
      $(".invalid-value").css("display", "none");
      $("input, select").css("border", "1px solid #d3d3d3");
    } else {
      $(".invalid-value").css("display", "block");
      $("input, select").css("border", "2px solid #C27371");
    }
  });
});

//ordered list

function createOl() {
  let numberOfLi = $("#count-li").val();
  let orderedList = "<ol";
  let type = $("#type-mark-ol").val();
  let content = $(".content").text();
  orderedList += ' type="' + type + '">';

  for (var i = 0; i < numberOfLi; i++) {
    orderedList += "<li>";
    orderedList += "item " + (i + 1);
  }
  orderedList += "</ol>";
  $(".content").text(content + orderedList);
}
//reset button
$(document).ready(function () {
  $(".reset-button").click(function () {
    $(".ui-dialog-content").find("input").val("");
  });
});

//hover effects
$(document).ready(function () {
  $(".menu button, .second-menu button").hover(
    function () {
      $(this).css("background-color", "#D8DEE4");
      $(this).css("border-top", "2px solid #AFB1B1");
      $(this).css("border-bottom", "2px solid #AFB1B1");
    },
    function () {
      $(this).css("background-color", "#EFEFEF");
      $(this).css("border", "none");
    }
  );
});
