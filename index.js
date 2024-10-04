// sticker.style.setProperty('--rotation', Math.random() +'deg');

window.onload = function () {
  // Get the viewport width and height
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const textHeight = 150;

  const max = 60;
  const min = -55;

  const sticker = document.getElementsByClassName("sticker");

  Array.from(sticker).map((element) => {
    const rotation = Math.random() * (max - min) + min;;
    element.style.transform = `rotate(${rotation}deg)`;

    // Generate random values for top and left (inside viewport bounds)
    const randomTop = Math.floor(
      Math.random() * ((viewportHeight * 2) - element.offsetHeight)
    );
    const randomLeft = Math.floor(
      Math.random() * (viewportWidth - element.offsetWidth)
    );

    element.style.zIndex = `${Math.floor(Math.random() * (3 - 1) + 1)}`;

    // Set the random top and left positions
    element.style.top = `${randomTop + textHeight}px`;
    element.style.left = `${randomLeft}px`;
  });  
};
