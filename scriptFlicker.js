//var gData;
var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=processData&format=json&tag=cat";
window.onload = function () {
    let result = document.querySelector("#result");
    let button = document.querySelector("#button");
    button.addEventListener("click", loadData, false);

    //<img src="domain.com/img.jpg">


}
function processData(data) {
    this.gData = data;
    console.log(data);
    for (let i= 0; i<data.items.length;i++){
        let img = document.createElement("img");
        img.setAttribute("src", data.items[i].media.m);
        console.log(data.items[i].media.m);
        result.appendChild(img);
    }

}

function loadData() {
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=processData&format=json&tag=cat";
    var script = document.createElement("script");
    script.setAttribute("src", url);
    var head = document.head;
    head.appendChild(script);
}