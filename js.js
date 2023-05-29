

const containerRoom = document.getElementById('container-room');
let isGrabbing = false;
let startX;
let scrollLeft;
containerRoom.addEventListener('wheel', (event) => {
  containerRoom.scrollLeft += event.deltaY;
});
containerRoom.addEventListener('mousedown', (event) => {
  isGrabbing = true;
  startX = event.pageX - containerRoom.offsetLeft;
  scrollLeft = containerRoom.scrollLeft;
});

containerRoom.addEventListener('mouseup', () => {
  isGrabbing = false;
});

containerRoom.addEventListener('mouseleave', () => {
  isGrabbing = false;
});

containerRoom.addEventListener('mousemove', (event) => {
  if (!isGrabbing) return;
  event.preventDefault();
  const x = event.pageX - containerRoom.offsetLeft;
  const walk = (x - startX) * 1.5; // Ajusta la velocidad de desplazamiento
  containerRoom.scrollLeft = scrollLeft - walk;
});







const artworks = document.querySelectorAll('.artwork img');

// Agregar un controlador de eventos de clic a cada imagen
artworks.forEach((artwork) => {
  artwork.addEventListener('click', () => {
    // Aplicar una clase CSS para hacer zoom en la imagen
    artwork.classList.toggle('zoomed');
  });
});
$(document).ready(function() {
  // Manejar el evento de clic en las imágenes
  $('img[data-toggle="modal"]').click(function() {
    var src = $(this).attr('src');
    $('#modal-image').attr('src', src);
    $('#myModal').modal('show');
  });
});

// Manejar el evento de presionar "Esc" o darle hacia atrás
$(document).keyup(function(event) {
  if (event.which === 27) {
    $('#myModal').modal('hide');
  }
});

function toggleLights() {
  var lightEffects = document.getElementsByClassName("light-effect");

  for (var i = 0; i < lightEffects.length; i++) {
    var lightEffect = lightEffects[i];
    lightEffect.classList.toggle("light-on");
  }
}
function openModal(img) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-image");
  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
