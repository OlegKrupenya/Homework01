function init() {
	var searchResults = document.getElementById('searchResults');
	var homeNavBar = document.getElementById('homeNavBar');
	var btnSearch = document.getElementById('btnSearch');
	var mainContainer = document.getElementById('mainContainer');
	var resultsNavBar = document.getElementById('resultsNavBar');
	var filterForm = document.getElementById('filterForm');
	var navPath = document.getElementById('navPath');
	searchResults.style.display = "none";
    resultsNavBar.style.display = "none";
    filterForm.style.display = "none";
    navPath.style.display = "none";
	btnSearch.addEventListener('click', doSearch, false);
}

function doSearch(event) {
	event.preventDefault();
	searchResults.style.display = "block";
    filterForm.style.display = "block";
    navPath.style.display = "block";
    resultsNavBar.style.display = "block";
	mainContainer.style.display = "none";
	homeNavBar.style.display = "none";
}
