// Arrow listener
document.addEventListener('keydown', function (event) {
	if (event.key == 'ArrowLeft') {
		// Left
		moveLeft();
	} else if (event.key == 'ArrowUp') {
		// Up
		moveUp();
	} else if (event.key == 'ArrowRight') {
		// Right
		moveRight();
	} else if (event.key == 'ArrowDown') {
		// Down
		moveDown();
	}
});

function generateTileContent() {
	var tileContent = Math.random() < 0.9 ? 2 : 4;
	return tileContent;
}

function mergeTiles(currentTile, nextTile) {
	nextTile.innerText *= 2;
	nextTile.merged = true;
	currentTile.innerText = "";
	currentTile.classList.add('empty-tile');
}

function moveLeft() {
	console.log('Left');
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			console.log(`Row: ${row} Col: ${col}`)
			let currentTile = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
			if (currentTile) {
				let currentTileContent = currentTile.innerText;
				if (currentTileContent == "") {
					currentTileContent = 0;
				}
				col++;
				let nextTile = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
				if (nextTile) {
					let nextTileContent = nextTile.innerText;
					if (nextTileContent == "") {
						nextTileContent = 0;
					}
					if (currentTileContent == nextTileContent) {
						mergeTiles(currentTile, nextTile, "left");
					}
				}
			}
		}
	}
	// Find non-empty tiles and generate new tiles
	let emptyTiles = document.querySelectorAll('.game-tile');
	if (emptyTiles.length > 0) {
		let randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
		randomTile.innerText = generateTileContent();
		randomTile.classList.remove('empty-tile');
		addClass(randomTile);
	}

}

function addClass(tile) {
	switch (tile.innerText) {
		case "2":
			tile.classList.add('game-tile-2');
			break;
		case "4":
			tile.classList.add('game-tile-4');
			break;
		case "8":
			tile.classList.add('game-tile-8');
			break;
		case "16":
			tile.classList.add('game-tile-16');
			break;
		case "32":
			tile.classList.add('game-tile-32');
			break;
		case "64":
			tile.classList.add('game-tile-64');
			break;
		case "128":
			tile.classList.add('game-tile-128');
			break;
		case "256":
			tile.classList.add('game-tile-256');
			break;
		case "512":
			tile.classList.add('game-tile-512');
			break;
	}

}

function moveUp() {
	console.log('Up');
}

function moveRight() {
	console.log('Right');
}

function moveDown() {
	console.log('Down');
}