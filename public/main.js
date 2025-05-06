// Function to redirect to the links
document.addEventListener('DOMContentLoaded', function() {
    const linkButtons = document.querySelectorAll('.link-btn')
    
    linkButtons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url')
            if (url) {
                window.open(url)
            }
        })
    })
})