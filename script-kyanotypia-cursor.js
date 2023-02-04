document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX -30;
  const mouseY = evt.clientY -30;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });

});
