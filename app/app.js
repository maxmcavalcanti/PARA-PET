// Passador automatico do carrosel

let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

$(".produto-galeria-index").click(function () {
  window.location = $(this).find("a").attr("href");
  return false;
});
