
    $(document).ready(function(){

        // 1. Smooth Scrolling for Navbar Links
        $('#main-nav .nav-link').on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 70 // Adjust for fixed navbar height
                }, 800);
            }
        });

        // 2. Typing Effect for Hero Section
        const jobTitle = "Full Stack Web Developer";
        let i = 0;
        function typeWriter() {
            if (i < jobTitle.length) {
                $('#job-title').append(jobTitle.charAt(i));
                i++;
                setTimeout(typeWriter, 100);
            } else {
                $('.typing-cursor').css('animation', 'blink 1.2s infinite'); // Slower blink when done
            }
        }
        setTimeout(typeWriter, 800); // Start typing after a short delay

        // 3. Fade-in Animation on Scroll
        function revealSections() {
            var windowHeight = $(window).height();
            var scrollPos = $(window).scrollTop();

            $('.fade-in-section').each(function() {
                var offsetTop = $(this).offset().top;
                if (offsetTop < scrollPos + windowHeight - 100) { // Reveal a bit before it's fully in view
                    $(this).addClass('is-visible');
                }
            });
        }

        // Initial check on page load and on scroll
        revealSections();
        $(window).on('scroll', revealSections);

        // 4. Close mobile navbar on link click
        $('.navbar-nav .nav-link').on('click', function(){
            if($('.navbar-toggler').is(':visible')){
                $('.navbar-collapse').collapse('hide');
            }
        });

        // 5. Particles.js for Hero Background
        if ($('#particles-js').length) {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#f7944a" // Matches --secondary-color
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true
                    },
                    "size": {
                        "value": 3,
                        "random": true
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 0.5
                            }
                        }
                    }
                },
                "retina_detect": true
            });
        }
    });