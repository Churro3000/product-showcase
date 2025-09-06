// Handle star button clicks
document.querySelectorAll('.star-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('starred');

    const product = btn.closest('.product').cloneNode(true);
    product.querySelector('.star-btn').remove(); // remove star in panel

    const starredList = document.getElementById('starred-list');

    if (btn.classList.contains('starred')) {
      // Add to starred list
      starredList.appendChild(product);
    } else {
      // Remove from starred list by product title
      const title = product.querySelector('h2').innerText;
      starredList.querySelectorAll('.product').forEach(p => {
        if (p.querySelector('h2').innerText === title) {
          p.remove();
        }
      });
    }
  });
});

// Toggle starred panel
const starredBtn = document.getElementById('starred-btn');
const starredPanel = document.getElementById('starred-panel');
const closeStarred = document.getElementById('close-starred');

starredBtn.addEventListener('click', () => {
  starredPanel.classList.add('active');
});

closeStarred.addEventListener('click', () => {
  starredPanel.classList.remove('active');
});
