function movies(commands){
    let movies = [];
    let add = /addMovie .*/;
    let director = /.* directedBy .*/;
for (const iterator of commands) {
    if(add.test(iterator)){
        movies.push({"name": iterator.split(/addMovie /)[1]})
    }
    else if(director.test(iterator)){
        let splitted = iterator.split(/ directedBy /);
        let movie = movies.find(x => x.name === splitted[0]);
        if(movie !== undefined){
            movie.director = splitted[1];
        }
    }
    else{
        let splitted = iterator.split(/ onDate /);
        let movie = movies.find(x => x.name === splitted[0]);
        if(movie !== undefined){
            movie.date = splitted[1];
        }
    }
}
for (const iterator of movies) {
    if(Object.keys(iterator).length === 3){
        console.log(JSON.stringify(iterator))
    }
}
}