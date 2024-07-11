// nav bar
document.addEventListener("DOMContentLoaded", function() {
    console.log(window.location.pathname);
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (currentPage == "") {
            console.log(currentPage);
            navLinks[0].classList.add('active');
        } 
        if (link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });
});


//  load videos
document.addEventListener('DOMContentLoaded', function() {
    var videos = [
        {id: "i3AkTO9HLXo", title: "Markov Chains"},
        {id: "E4WcBWuQQws", title: "Generating Sherlock Holmes Stories" },
        {id: 'RWkHJnFj5rY', title: "Hidden Markov Models"},
        {id: "ZVR2Way4nwQ", title: "Decision Tree Classification"},
        {id: "v6VJ2RO66Ag", title: "Random Forest Algorithm"},
        {id: "Gib_kiXgnvA", title: "The Math Behind GANs"},
        {id: "sxEqtjLC0aM", title: "Standardization vs Normalization"},
        {id: "lFJbZ6LVxN8", title: "The Math Behind Bayesian Classifiers"},
        {id: "TPcAnExkWwQ", title: "Covariance"},
        {id: "FiSy6zWDfiA", title: "What is Norm in Machine Learning?"},
    ];

    var videoGallery = document.getElementById('video-gallery');
    if (videoGallery == null){return;}

    videos.forEach(function(video) {
        var container = document.createElement('div');
        container.className = 'video-container';
        container.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="video-title">${video.title}</div>
        `;
        videoGallery.appendChild(container);
    });
});


// load blogs 
document.addEventListener('DOMContentLoaded', function() {
    var blogs = [
        {img: "images/gan.gif", url: "https://medium.com/towards-data-science/alphabet-gan-ai-generates-english-letters-589637068808", title: "Alphabet GAN: AI Generates English Alphabet!"},
        {img: "images/game.gif", url: "https://medium.com/towards-data-science/neural-network-genetic-algorithm-game-15320b3a44e3", title: "Neural Network + Genetic Algorithm + Game = ❤"},
        {img: "images/regression.jpg", url: "https://medium.com/towards-data-science/diving-deeper-into-linear-regression-81adaa7b79e5", title: "Diving Deeper into Linear Regression"},
        {img: "images/rsq.jpg", url: "https://towardsdatascience.com/wth-are-r-squared-and-adjusted-r-squared-7b816eef90d9", title: "WTH are R-squared and Adjusted R-squared?"},
        {img: "images/chat.jpg", url: "https://medium.com/towards-data-science/how-i-used-machine-learning-to-detect-chat-screenshots-on-my-phone-a46d875b07af", title: "How I Used Machine Learning to Detect Chat Screenshots on My Phone?"},
        {img: "images/grad.jpg", url: "https://towardsdatascience.com/https-towardsdatascience-com-why-stochastic-gradient-descent-works-9af5b9de09b8", title: "Why Stochastic Gradient Descent Works?"},
    ];

    var blogGallery = document.getElementById('blog-gallery');
    if (blogGallery == null){return;}

    blogs.forEach(function(blog) {
        var container = document.createElement('div');
        container.className = 'blog-container';
        container.innerHTML = `
            <a href="${blog.url}" ><img src="${blog.img}" alt="Image description" class="blog-image"></a>
            <div class="blog-title">${blog.title}</div>
        `;
        blogGallery.appendChild(container);
    });
});
