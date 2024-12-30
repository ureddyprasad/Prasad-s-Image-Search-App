const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
let imagesPerPage = 9;

async function searchImages() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=${imagesPerPage}`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }

  const results = data.results;

  results.forEach((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const caption = document.createElement("div");
    caption.classList.add("caption");

    const viewLink = document.createElement("a");
    viewLink.href = result.urls.full;
    viewLink.target = "_blank";
    viewLink.classList.add("view");
    viewLink.innerHTML = '<i class="fas fa-eye"></i> View';

    const downloadLink = document.createElement("a");
    downloadLink.href = "#";
    downloadLink.classList.add("download");
    downloadLink.innerHTML = '<i class="fas fa-download"></i> Download';
    downloadLink.addEventListener("click", (event) => {
      event.preventDefault();
      downloadImage(result.urls.full, result.alt_description || "downloaded_image.jpg");
    });

    caption.appendChild(viewLink);
    caption.appendChild(downloadLink);
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(caption);
    searchResultsEl.appendChild(imageWrapper);
  });

  page++;

  if (results.length === imagesPerPage) {
    showMoreButtonEl.style.display = "block";
  } else {
    showMoreButtonEl.style.display = "none";
  }
}

function downloadImage(url, filename) {
  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => console.error("Download failed", error));
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
