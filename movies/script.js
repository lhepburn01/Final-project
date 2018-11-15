let movies = [
	{title:'Superman', director:'MJ', year:1982, status: 'Yes'},
	{title:'Batman', director:'Snoop', year:1994, status: 'No'},
	{title:'Wonder Woman', director:'PK', year:2017, status: 'No'}
];

function addMovie(){
	let movieTitle = document.getElementById('title').value;
	let movieDirector = document.getElementById('director').value;
	let movieYear = document.getElementById('year').value;
	let movieStatus = document.getElementById('status').value;

	movies.push({
		title: movieTitle,
		director: movieDirector,
		year: movieYear,
		status: movieStatus,
	});

	displayMovies();
}
function displayMovies(){
	document.getElementById('display').innerHTML = '';
	for(let i = 0; i < movies.length; i++){
		document.getElementById('display').innerHTML +=    `<h1>${movies[i].title} directed by ${movies[i].director} </h1>
			<h1>${movies[i].year} <h1>Shown Status${movies[i].status} />`;
	}

	
}
