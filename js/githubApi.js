$(function() {
	const portfolioTable = ["Game", "Carousel", "Layout-example", "spellingGame"];

	function getCommit(repoName) {
		const url = "https://api.github.com/repos/arkadiusz-cichosz/" + repoName + "/commits";
		$.getJSON(url, function(commits) {
			const jsonObj = commits;
			console.log(jsonObj.length);
			const commitNumber = jsonObj.length;
			const tag = ".commits #" + repoName;
			$(tag).text(commitNumber);
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