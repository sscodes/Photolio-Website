// Get the modal
var modal = document.getElementById("myModal6");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption6");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close6")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
