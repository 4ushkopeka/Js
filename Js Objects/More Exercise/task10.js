function commentStuff(input){
    let users = [];
    let articles = [];
for (const command of input) {
    if(/user .+/.test(command)){
        let username = command.split(/user /)[1];
        let user = users.find(x => x.name === username);
        if(user === undefined){
            user = {};
            user.name = username;
            user.comments = [];
            users.push(user);
        }
    }
    else if(/article .+/.test(command)){
        let articleName = command.split(/article /)[1];
        let article = articles.find(x => x.name === articleName);
        if(article === undefined){
            article = {};
            article.name = articleName;
            article.commentCount = 0;
            articles.push(article);
        }
    }
    else if(/.+ posts on .+: .+, .+/.test(command)){
        let splitPost = command.split(' posts on ');
        let user = users.find(x => x.name === splitPost[0]);
        if(user !== undefined){
            let articleSplit = splitPost[1].split(': ');
            let article = articles.find(x => x.name === articleSplit[0]);
            if(article !== undefined){
                let comment = {};
                let commentSplit = articleSplit[1].split(', ');
                comment.title = commentSplit[0];
                comment.content = commentSplit[1];
                comment.article = articleSplit[0];
                user.comments.push(comment);
                article.commentCount++;
            }
        }
    }
}
articles.sort((a, b) =>{
    return b.commentCount - a.commentCount;
});
users.sort((a, b)=>{
    return a.name.localeCompare(b.name);
})
for (const article of articles) {
    console.log(`Comments on ${article.name}`)
    for (const user of users) {
        let relevantComments = user.comments.filter(x => x.article === article.name);
        if(relevantComments.length === 0){
            continue;
        }
        else{
            for (const comment of relevantComments) {
                console.log(`--- From user ${user.name}: ${comment.title} - ${comment.content}`)
            }
        }
    }
}
}