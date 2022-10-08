// ****** scrollup ******
//display btn
window.addEventListener("scroll", function () {
    let scroll = this.document.querySelector(".scrolltop");
    scroll.classList.toggle("active", window.scrollY > 300);
});
// scrollup
const btn = document.querySelector(".scrolltop");
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});
