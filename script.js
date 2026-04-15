let pages = document.querySelectorAll(".page");
let current = 0;

function showPage(index) {
  pages.forEach((page, i) => {

    page.classList.remove("active", "flipped");

    if (i < index) {
      page.classList.add("flipped");
    } else if (i === index) {
      page.classList.add("active");
    }

  });

  updateZIndex(); // WAJIB
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    showPage(current);
  }
}

function updateZIndex() {
  pages.forEach((page, i) => {
    page.style.zIndex = pages.length - i;
  });
}

updateZIndex();
showPage(current);