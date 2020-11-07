// Get the modal
var modal = document.getElementById("myModal10");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg10");
var modalImg = document.getElementById("img10");
var captionText = document.getElementById("caption10");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close10")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
