document.addEventListener('DOMContentLoaded', function() {
    var blogs = [
        {img: "gan.gif", url: "https://medium.com/towards-data-science/alphabet-gan-ai-generates-english-letters-589637068808", title: "Alphabet GAN: AI Generates English Alphabet!"},
        {img: "game.gif", url: "https://medium.com/towards-data-science/neural-network-genetic-algorithm-game-15320b3a44e3", title: "Neural Network + Genetic Algorithm + Game = ❤"},
        {img: "regression.jpg", url: "https://medium.com/towards-data-science/diving-deeper-into-linear-regression-81adaa7b79e5", title: "Diving Deeper into Linear Regression"},
        {img: "rsq.jpg", url: "https://towardsdatascience.com/wth-are-r-squared-and-adjusted-r-squared-7b816eef90d9", title: "WTH are R-squared and Adjusted R-squared?"},
        {img: "chat.jpg", url: "https://medium.com/towards-data-science/how-i-used-machine-learning-to-detect-chat-screenshots-on-my-phone-a46d875b07af", title: "How I Used Machine Learning to Detect Chat Screenshots on My Phone?"},
        {img: "grad.jpg", url: "https://towardsdatascience.com/https-towardsdatascience-com-why-stochastic-gradient-descent-works-9af5b9de09b8", title: "Why Stochastic Gradient Descent Works?"},
    ];

    var blogGallery = document.getElementById('blog-gallery');

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