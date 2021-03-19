document.onmousemove = function(e) {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  };
  
  // hover effect
  const clickableElements = document.querySelectorAll(".clickable");
  clickableElements.forEach(elm => {
    elm.addEventListener("mouseover", function() {
      document.body.classList.add("img-hovered");
    });
    elm.addEventListener("mouseleave", function() {
      document.body.classList.remove("img-hovered");
    });
  });
  
  //click effect
  