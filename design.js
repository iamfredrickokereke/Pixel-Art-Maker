// Select color input

function startColor() {
  $("td").click(function () {
  const color = $("#colorPicker").val();
  if ($(this).attr("style")) {
      $(this).removeAttr("style");
   } else {
      $(this).attr("style", "background-color:" + color);
   }
  }
 );
}
// Select size input

$("#sizePicker").submit(function (evt) {
  evt.preventDefault();
  let height = $("#inputHeight").val();
  let width = $("#inputWeight").val();
  makeGrid(height, width);
  startColor();
  console.log(`the height is ${height} and the width is ${width}`);
});

// When size is submitted by the user, call makeGrid()

function makeGrid(row, col) {

  $("tr").remove();

let x=1;
while(x <= row){
 $("#pixelCanvas").append("<tr></tr>");
  x++;
  }
 for(let y=0; y<col; y++){
$("tr").append("<td></td>");
  
}
  
}

