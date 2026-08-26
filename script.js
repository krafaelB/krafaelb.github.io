/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener(
    "click",
    function () {

        navMenu.classList.toggle(
            "active"
        );

    }
);


/* Close menu after clicking */

document
    .querySelectorAll(".nav-menu a")
    .forEach(function(link) {

        link.addEventListener(
            "click",
            function() {

                navMenu.classList.remove(
                    "active"
                );

            }
        );

    });



/* =========================
   PORTFOLIO FILTER
========================= */

const filters =
    document.querySelectorAll(
        ".filter"
    );

const projects =
    document.querySelectorAll(
        ".project"
    );


filters.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {


            /* Remove active */

            filters.forEach(
                function(btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            /* Activate clicked button */

            button.classList.add(
                "active"
            );


            const selected =
                button.dataset.filter;


            projects.forEach(
                function(project) {


                    const categories =
                        project
                        .dataset
                        .category
                        .split(" ");


                    if (
                        selected === "all" ||
                        categories.includes(
                            selected
                        )
                    ) {

                        project.classList.remove(
                            "hide"
                        );

                    } else {

                        project.classList.add(
                            "hide"
                        );

                    }

                }
            );

        }
    );

});



/* =========================
   CURRENT YEAR
========================= */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();



/* =========================
   SCROLL REVEAL
========================= */

const revealItems =
    document.querySelectorAll(
        ".service, " +
        ".project, " +
        ".stat, " +
        ".certificate, " +
        ".tool"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


revealItems.forEach(
    function(element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    }
);
