function div_none(theclass, background) {
    var allPageTags = new Array();
    var allPageTags = document.getElementsByTagName("div");
    for (i = 0; i < allPageTags.length; i++) {
        if (allPageTags[i].className == theclass) {
            var obj = allPageTags[i];
            if (obj.style.display == "none") {
                obj.style.display = "";
            }
        }
        if (allPageTags[i].className == background && theclass != background) {
            var obj = allPageTags[i];
            obj.style.display = "none";

        }
    }
}

function showDiv(div1, div2) {
    if (div1.style.display == 'none') {
        div1.style.display = 'block';
        div2.style.display = 'none';
    }
}