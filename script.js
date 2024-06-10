window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});


// menu button drawer script
const menuButton = document.getElementById('menuButton');
const drawer = document.getElementById('drawer');

menuButton.addEventListener('click', () => {
    drawer.classList.toggle('open');
});


// Function to handle video play/pause based on visibility
function handleVideoPlayPause(sectionId, videoId, stopTime) {
    const section = document.querySelector(sectionId);
    const video = document.querySelector(videoId);

    const options = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // 50% of the section needs to be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
                // Do not reset the currentTime
            }
        });
    }, options);

    observer.observe(section);

    // Event listener for time update
    video.addEventListener('timeupdate', () => {
        if (video.currentTime >= stopTime) {
            video.pause();
        }
    });
}

// About Us video script
document.addEventListener('DOMContentLoaded', () => {
    handleVideoPlayPause('#about', '#aboutVideo', 2);
    handleVideoPlayPause('#Dance', '#danceVideo', 2);
    handleVideoPlayPause('#feel', '#feelVideo', 2);
    handleVideoPlayPause('#juniour', '#juniourVideo', 2);
    handleVideoPlayPause('#rating', '#ratingVideo', 2);
    handleVideoPlayPause('#email', '#emailVideo', 2);
    handleVideoPlayPause('#footer', '#footerVideo', 2);
});




// button redirect script
document.querySelector('.button-container').addEventListener('click', () => {
    window.location.href = 'https://www.example.com'; // Replace with your desired URL
});


// ratingview script
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars-container i');
    let selectedRating = 0;

    stars.forEach(star => {
        star.addEventListener('mouseover', (e) => {
            const ratingValue = e.target.getAttribute('data-value');
            highlightStars(ratingValue);
        });

        star.addEventListener('mouseout', () => {
            highlightStars(selectedRating);
        });

        star.addEventListener('click', (e) => {
            selectedRating = e.target.getAttribute('data-value');
            alert(`You rated: ${selectedRating} stars!`);
        });
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            star.classList.remove('hovered');
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('hovered');
            }
        });
    }
});



