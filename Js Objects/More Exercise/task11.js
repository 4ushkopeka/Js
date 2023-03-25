function bookshelfStuff(input){
let shelves = [];
for (const command of input) {
    if(/.+ -> .+/.test(command)){
        let shelfInfo = command.split(' -> ');
        let shelf = shelves.find(x => x.id === Number(shelfInfo[0]));
        if(shelf === undefined){
            shelf = {};
            shelf.id = Number(shelfInfo[0]);
            shelf.genre = shelfInfo[1];
            shelf.books = [];
            shelves.push(shelf);
        }
    }
    else if(/.+: .+, .+/.test(command)){
        let bookInfo = command.split(': ');
        let authGenre = bookInfo[1].split(', ');
        let shelf = shelves.find(x => x.genre === authGenre[1]);
        if(shelf !== undefined){
            let book = {};
            book.title = bookInfo[0];
            book.author = authGenre[0];
            book.genre = authGenre[1];
            shelf.books.push(book);
        }
    }
}
shelves.sort((a, b)=>{
    return b.books.length - a.books.length;
});
for (const shelf of shelves) {
    shelf.books.sort((a, b) =>{
        return a.title.localeCompare(b.title);
    });
    console.log(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`)
    for (const book of shelf.books) {
        console.log(`--> ${book.title}: ${book.author}`)
    }
}
}