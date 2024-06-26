function toggleNavbar() {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  var navItems = document.querySelectorAll(".navbar a");
  navItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
      // Prüfe, ob das geklickte Element die Klasse "icon" hat
      if (!this.classList.contains("icon")) {
        // Entferne zuerst alle vorhandenen aktiven Klassen
        navItems.forEach(function(item) {
          item.classList.remove("active");
        });
        // Füge dann die aktive Klasse zum geklickten Element hinzu
        this.classList.add("active");
  
        // Schließe das Nav-Menü in der mobilen Ansicht
        var navbar = document.querySelector(".navbar");
        if (navbar.classList.contains("responsive")) {
          navbar.classList.remove("responsive");
        }
      }
    });
  });
