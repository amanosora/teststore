function inedxsearch() {
    let indexsearch = document.getElementById("indexsearch");
    if (indexsearch.style.display === "none") {
        indexsearch.style.display = "inline-block";
        indexsearch.focus();
    } else {
        indexsearch.style.display = "none";
    }
}