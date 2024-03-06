// Place this JavaScript in the file 'fuse-loading-bar.js'
document.addEventListener("DOMContentLoaded", function(event) {
    var loadingBar = document.getElementById('fuse-loading-bar');
    loadingBar.style.display = 'block';
  
    function hideLoadingBar() {
      loadingBar.style.display = 'none';
    }
  
    // You can use this function to hide the loading bar after your content is loaded.
    // For example, after your images are loaded:
    window.onload = function() {
      hideLoadingBar();
    };
  });
  