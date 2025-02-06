let navMenu = document.querySelectorAll(".nav-menu a");

for (let i = 0; i < navMenu.length; i++) {
    navMenu[i].addEventListener("click", function (e) {
        e.preventDefault();
        
        let targetSectionID = this.getAttribute("href").substring(1); // Get ID from href
        let targetSection = document.getElementById(targetSectionID);
        
        if (!targetSection) {
            console.error("Target section not found:", targetSectionID);
            return;
        }

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}
