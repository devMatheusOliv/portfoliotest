$(function () {
  // Menu links
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });

  // Dropdowns
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdowns.forEach((c) => c.classList.remove("is-active"));
      dropdown.classList.add("is-active");
    });
  });

  // Document click to close dropdowns
  $(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      dd.removeClass("is-active");
    }
  });

  // Content wrapper overlay
  $(".dropdown").on("click", function (e) {
    $(".content-wrapper").addClass("overlay");
    e.stopPropagation();
  });

  $(document).on("click", function (e) {
    if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
    }
  });

  // Status button and popup
  $(".status-button:not(.open)").on("click", function (e) {
    $(".overlay-app").addClass("is-active");
    $(".pop-up").addClass("visible");
  });

  $(".pop-up .close").click(function () {
    $(".overlay-app").removeClass("is-active");
    $(".pop-up").removeClass("visible");
  });

  // Theme toggle
  const checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("change", () => {
    $("body").toggleClass("light-mode");
  });

  // Load saved theme preference
  if (localStorage.getItem("theme") === "light-mode") {
    $("body").addClass("light-mode");
    checkbox.checked = true;
  }

  // Save theme preference
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.setItem("theme", "dark-mode");
    }
  });

  // Hover para a sidebar
  $(".side-menu a").hover(
    function () {
      $(this).addClass("hover-bg");
    },
    function () {
      $(this).removeClass("hover-bg");
    }
  );
});
