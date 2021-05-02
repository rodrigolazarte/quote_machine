import quotesData from '../data/quotes.data';

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

export const generateRandomNumber = (number) => {
    var size = quotesData.length;
    var num = Math.floor((Math.random() * (size))+1);
        while (num === number){
            num = Math.floor((Math.random() * (size))+1);
        }
    return num;    
}

export const pickRandomColor = () => {
    return {
        backgroundColor: `${getRandomColor()}`,
        transition:'background-color 1s ease-out'
    }
}

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }