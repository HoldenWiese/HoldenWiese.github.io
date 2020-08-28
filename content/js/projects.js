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

//Adding outer tab highlights.
function outerTabHighlight(clickedTab){
    let activeTab = document.getElementsByClassName("active-tab")
    activeTab[0].classList.remove("active-tab")

    let newActiveTab = document.getElementById(clickedTab)
    newActiveTab.classList.add("active-tab")
}

//Adding inner tab highlights.
function innerTabHighlight(clickedTab){
    let activeTab = document.getElementsByClassName("inner-active-tab")
    activeTab[0].classList.remove("inner-active-tab")

    let newActiveTab = document.getElementById(clickedTab)
    newActiveTab.classList.add("inner-active-tab")
}