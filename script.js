let hamburger = document.querySelector('.hamburger');
let nav_links = document.querySelector('.nav_links');
let links = document.querySelectorAll('.link')

/* Mobile menu js */

/* Open */
hamburger.addEventListener('click', () => {
    if (window.innerWidth <= 600){
        nav_links.style.transform = "translate(0)";
        nav_links.style.transition = "all 0.6s ease";
    }
});

/* Close */
links.forEach (linkItem => {
    linkItem.addEventListener('click', () => {
        if (window.innerWidth <= 600){
            nav_links.style.transform = "translate(-150%)";
            nav_links.style.transition = "all 0.6s ease";
        }
    });
});

/* Reset for full size */
window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        nav_links.style.transform = "";
        nav_links.style.transition = ""; 
    }
})



/* Catalog tabs */

window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is_active').classList.remove('is_active');
            tab_switcher.parentNode.classList.add('is_active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    console.log(page_id);

    const current_page = document.querySelector('.pages .page.is_active');
    current_page.classList.remove('is_active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
    next_page.classList.add('is_active');
}