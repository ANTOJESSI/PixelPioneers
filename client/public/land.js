// document.addEventListener("DOMContentLoaded", function() {
//     const academicAlly = document.getElementById('academic-ally');
//     const tagline = document.getElementById('tagline');

//     // Add swipe-in effect to "AcademicAlly"
//     academicAlly.style.opacity = '1';
//     academicAlly.style.transform = 'translateX(0)';

//     // Add fade-in effect to tagline after "AcademicAlly" is displayed
//     setTimeout(() => {
//         tagline.style.opacity = '1';
//     }, 1000); // delay tagline animation for 1 second
// });

// function getStarted() {
//     alert("Get Started button clicked!");
//     // You can redirect to another page or perform other actions here.
// }

document.addEventListener("DOMContentLoaded", function() {
    const academicAlly = document.getElementById('academic-ally');
    const tagline = document.getElementById('tagline');

    // Add swipe-in effect to "AcademicAlly"
    academicAlly.style.opacity = '1';
    academicAlly.style.transform = 'translateX(0)';

    // Add fade-in effect to tagline after "AcademicAlly" is displayed
    setTimeout(() => {
        tagline.style.opacity = '1';
    }, 1000); // delay tagline animation for 1 second
});

function getStarted() {
    // Redirect to the dashboard page
    window.location.href = '/dash.html';
}
