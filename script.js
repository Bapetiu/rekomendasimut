
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const produkItems = document.querySelectorAll('.produk-item');

function filterProduk() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  produkItems.forEach(item => {
    const title = item.querySelector('h4').textContent.toLowerCase();
    const category = item.getAttribute('data-kategori');
    const matchSearch = title.includes(searchText);
    const matchCategory = !selectedCategory || category === selectedCategory;

    if (matchSearch && matchCategory) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterProduk);
categoryFilter.addEventListener('change', filterProduk);
