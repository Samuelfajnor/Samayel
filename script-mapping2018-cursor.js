document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX -50;
  const mouseY = evt.clientY -50;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });

});
