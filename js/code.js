function openNavigation() {
    document.getElementById("sideNavigation").style.width = "100%";
    document.getElementById("memberAccount").style.display = "flex";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%"
}

function closeNavigation() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("memberAccount").style.display = "none";
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
}