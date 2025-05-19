document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX -15;
  const mouseY = evt.clientY -30;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });

});


