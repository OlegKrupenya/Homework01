function init() {
	var searchResults = document.getElementById('searchResults');
	var homeNavBar = document.getElementById('homeNavBar');
	var btnSearch = document.getElementById('btnSearch');
	var mainContainer = document.getElementById('mainContainer');
	searchResults.style.display = "none";
	btnSearch.addEventListener('click', doSearch, false);
}

function doSearch(event) {
	event.preventDefault();
	searchResults.style.display = "block";
	mainContainer.style.display = "none";
	homeNavBar.style.display = "none";
}
