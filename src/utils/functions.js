export const pickRandomProperty = (obj) => {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

export const tweetUrl = (completeQuote) => {
    var author = completeQuote.author.replaceAll(" ", "%20");
    var text = completeQuote.text.replaceAll(" ", "%20");
    var url = "https://twitter.com/intent/tweet?text=" + text + '%20-%20' + author;
    return url;
}