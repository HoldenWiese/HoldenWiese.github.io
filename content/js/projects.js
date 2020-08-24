//AJAX function
function loadDoc(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//projects.html AJAX callbacks
function loadProject(xhttp) {
    document.getElementById("ajax-content").innerHTML =
        xhttp.responseText;
}

//Tabs within ajax-content
function ajaxProjectTab(xhttp) {
    document.getElementById("ajax-boot-camp").innerHTML =
        xhttp.responseText;
}