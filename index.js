<script type="text/javascript">
// Search filter functionality
const searchInput = document.getElementById('searchInput');
const gameTiles = document.querySelectorAll('.game-tile');

searchInput.addEventListener('input', function () {
    const filter = searchInput.value.toLowerCase(); // Get the search input and convert to lowercase
    gameTiles.forEach(tile => {
        const gameTitle = tile.querySelector('h3').textContent.toLowerCase(); // Get the title of the game
        if (gameTitle.includes(filter)) {
            tile.style.display = ''; // Show tile if it matches
        } else {
            tile.style.display = 'none'; // Hide tile if it doesn't match
        }
    });
});



</script>