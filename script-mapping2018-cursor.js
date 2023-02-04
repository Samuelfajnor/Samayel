document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY +100;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });

});
