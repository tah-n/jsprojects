const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
})
closeBtn.addEventListener('click', function() {
    sidebar.classList.remove("show-sidebar");   // remove the show class from sidebar when clicked on x button
})
window.addEventListener('click', function() {
    
})