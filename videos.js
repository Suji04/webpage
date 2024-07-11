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