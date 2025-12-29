const params = new URLSearchParams(window.location.search);

function sendTo(page){
    location.href = "/oobywatel1/" + page + ".html?" + params.toString();
}

document.querySelectorAll("[send]").forEach(el => {
    el.addEventListener("click", () => {
        sendTo(el.getAttribute("send"));
    });
});

document.querySelectorAll(".back_text").forEach(el => {
    el.addEventListener("click", () => {
        sendTo("home");
    });
});
