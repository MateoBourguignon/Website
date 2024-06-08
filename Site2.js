document.addEventListener("DOMContentLoaded", function() {
    var toggleButton1 = document.getElementById("toggleButton1");
    var toggleButton2 = document.getElementById("toggleButton2");
    var toggleButton3 = document.getElementById("toggleButton3");
    var toggleButton4 = document.getElementById("toggleButton4");
    var toggleButton5 = document.getElementById("toggleButton5");
    var toggleButton6 = document.getElementById("toggleButton6");
    var div1 = document.getElementById("myDiv1");
    var div2 = document.getElementById("myDiv2");
    var div3 = document.getElementById("myDiv3");
    var div4 = document.getElementById("myDiv4");
    var div5 = document.getElementById("myDiv5");
    var div6 = document.getElementById("myDiv6");

    toggleButton1.addEventListener("click", function() {
        if (div1.style.display === "none" || div1.style.display === "") {
        div1.style.display = "block";
        setTimeout(function() {
            div1.style.opacity = "1"; 
        }, 10);
        } else {
        setTimeout(function() {
            div1.style.display = "none"; 
        }, 300);
        div1.style.opacity = "0";
        }
    });
    toggleButton2.addEventListener("click", function() {
        if (div2.style.display === "none" || div2.style.display === "") {
        div2.style.display = "block";
        setTimeout(function() {
            div2.style.opacity = "1"; // Make the div visible after a slight delay
        }, 10);
        } else {
        setTimeout(function() {
            div2.style.display = "none"; // Hide the div after the transition
        }, 300);
        div2.style.opacity = "0";
        }
    });
    toggleButton3.addEventListener("click", function() {
        if (div3.style.display === "none" || div3.style.display === "") {
        div3.style.display = "block";
        setTimeout(function() {
            div3.style.opacity = "1"; // Make the div visible after a slight delay
        }, 10);
        } else {
        setTimeout(function() {
            div3.style.display = "none"; // Hide the div after the transition
        }, 300);
        div3.style.opacity = "0";
        }
    });
    toggleButton4.addEventListener("click", function() {
        if (div4.style.display === "none" || div4.style.display === "") {
        div4.style.display = "block";
        setTimeout(function() {
            div4.style.opacity = "1"; // Make the div visible after a slight delay
        }, 10);
        } else {
        setTimeout(function() {
            div4.style.display = "none"; // Hide the div after the transition
        }, 300);
        div4.style.opacity = "0";
        }
    });

    toggleButton5.addEventListener("click", function() {
        if (div5.style.display === "none" || div5.style.display === "") {
        div5.style.display = "block";
        setTimeout(function() {
            div5.style.opacity = "1"; // Make the div visible after a slight delay
        }, 10);
        } else {
        setTimeout(function() {
            div5.style.display = "none"; // Hide the div after the transition
        }, 300);
        div5.style.opacity = "0";
        }
    });
    toggleButton6.addEventListener("click", function() {
        if (div6.style.display === "none" || div6.style.display === "") {
        div6.style.display = "block";
        setTimeout(function() {
            div6.style.opacity = "1"; // Make the div visible after a slight delay
        }, 10);
        } else {
        setTimeout(function() {
            div6.style.display = "none"; // Hide the div after the transition
        }, 300);
        div6.style.opacity = "0";
        }
    });
});