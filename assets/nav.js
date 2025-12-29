const params = new URLSearchParams(window.location.search);

function go(page) {
    location.href = page + ".html?" + params.toString();
}

// dolny pasek
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[send]").forEach(el => {
        el.addEventListener("click", () => {
            go(el.getAttribute("send"));
        });
    });
});
