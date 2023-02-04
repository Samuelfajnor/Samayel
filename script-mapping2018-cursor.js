document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX +100;
  const mouseY = evt.clientY +100;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });

});
