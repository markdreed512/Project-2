function getNews() {
    var myKey = "e657221f63554ff492e2c70e8ecb8c86";
    var queryUrl =
        "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
        myKey;
    $.ajax({
        url: queryUrl,
        type: "GET"
    }).then(function(response) {
        console.log("RESPONSE: ", response.articles[0]);
        //loop through articles arr and display headlines, summaries and url to UI
        for (var i = 0; i < response.articles.length; i++) {
            if (response.articles[i].content) {
                $("#news").append(
                    "<h3>" +
                        response.articles[i].title +
                        "</h3><p>" +
                        response.articles[i].description +
                        "</p><a href='" +
                        response.articles[i].url +
                        "'>read full article</a><hr>"
                );
            }
        }
    });
}
getNews();
