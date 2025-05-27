console.log("Hello World from Indira Canteen Bangalore!");
// Function to render canteen list into #canteenList
function renderList(items) {
  const list = document.getElementById('canteenList');
  list.innerHTML = ''; // clear existing

  if (items.length === 0) {
    list.innerHTML = '<li>No canteens found.</li>';
    return;
  }

  items.forEach(canteen => {
    const li = document.createElement('li');
    li.textContent = `${canteen.name} — ${canteen.locality}`;
    list.appendChild(li);
  });
}

// Initial render with full list
renderList(canteens);

// Add search functionality
document.getElementById('searchInput').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();

  const filtered = canteens.filter(c =>
    c.name.toLowerCase().includes(query) ||
    c.locality.toLowerCase().includes(query)
  );

  renderList(filtered);
});
