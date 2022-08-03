window.onload = function() {
  setInterval(function() {
    let dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  }, 1000);
}