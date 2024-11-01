
        // Back to Top Button Logic
        const backToTopButton = document.getElementById('backToTop');
        
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Simple form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form handling logic here
            alert('Message sent! (Demo only)');
            this.reset();
        });
    