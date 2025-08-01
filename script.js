function loadPage(page) {
    document.getElementById('main-content').src = page;
}

window.addEventListener('message', function(event) {
      if (event.data && event.data.type === 'updateTitle') {
        document.querySelector('.page-title').textContent = event.data.title;
      }
    });