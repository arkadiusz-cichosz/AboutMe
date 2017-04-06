$(function() {
	const portfolioTable = ["Game", "Carousel", "Layout-example", "spellingGame", "openWeather"];

	function getCommit(repoName) {
		const url = "https://api.github.com/repos/arkadiusz-cichosz/" + repoName + "/commits";
		$.getJSON(url, function(commits) {
			console.log(commits.length);
			const tag = ".commits #" + repoName;
			$(tag).text(commits.length);
		});
	}

	for(let i = 0; i < portfolioTable.length; i++) {
			getCommit(portfolioTable[i]);
		}

	setInterval(function() {
		for(let i = 0; i < portfolioTable.length; i++) {
			getCommit(portfolioTable[i]);
		}
	}, 60000);
});
