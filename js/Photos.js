class Photos {
    constructor(albumId) {
        this.apiUrl = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
        this.fetchAndRenderPhotos();
    }

    async fetchAndRenderPhotos() {
            const resp = await fetch(this.apiUrl);
            const data = await resp.json();
            this.renderPhotos(data);
    }

    renderPhotos(photos) {
        const ul = document.querySelector('#photos');
        ul.innerHTML = '';
        photos.forEach((photo) => {
            const li = document.createElement('li');
            li.innerHTML = `<img src="${photo.thumbnailUrl}" alt="${photo.title}">`;
            ul.appendChild(li);
        });
    }
}

export default Photos;