var yourConnection = 500;
var connectionRequest = 2;

var requestNum = document.querySelector(".requests");

requestNum.innerHTML = connectionRequest;

var lrConnections = document.querySelector(".lr-connections");

lrConnections.innerHTML = yourConnection;

function removeRequest(element) {
  var entry = document.querySelector(".entry");

  entry.parentNode.removeChild(entry);

  if (element.classList == "entry-check") {
    requestNum.innerHTML = requestNum.innerHTML - 1;
    lrConnections.innerHTML = Number(lrConnections.innerHTML) + 1;
  }
}

var editname = document.querySelector(".name h1");

function edit(element) {
  console.log(editname);
  editname.innerHTML = "J.J. Twice";
}
