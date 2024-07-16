function getTheTitles() {
    const newArray = []
    books.forEach(function(item) {
        const itemTitle = item.title
        newArray.push(itemTitle)
    })
    return newArray
};

getTheTitles();

// Do not edit below this line
module.exports = getTheTitles;
