let darkMode = false;

function changeDarkMode() {
if (darkMode) {
    //light mode
    darkMode = false;
    document.documentElement.style.setProperty("--ecriture", "black") ;
    document.documentElement.style.setProperty("--fond", "#e7e8da");
    document.getElementById("dark_light_mode").innerHTML = "Dark mode" ;
}else {
    //dark mode
    darkMode = true;
    document.documentElement.style.setProperty("--ecriture", "#f1f1f1");
    document.documentElement.style.setProperty("--fond", "black");
    document.getElementById("dark_light_mode").innerHTML = "Light mode";

}
}

