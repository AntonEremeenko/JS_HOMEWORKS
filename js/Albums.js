class Albums {
    apiUrl = 'https://jsonplaceholder.typicode.com/albums'
    constructor() {
        this.fetchAlbums()
        this.setEvents()
    }
    setEvents () {
        document.querySelector('#albums').addEventListener('click', (event) => {
            console.log(event.target);
            window.location.href = window.location.origin + '/photos.html?albumId=' + event.target.getAttribute('data-id')
        })
    }

    async fetchAlbums () {
        const resp = await fetch(this.apiUrl)
        // console.log(resp);
        const data = await resp.json()
        // console.log(data);
        data.forEach((item) => {
            const li = document.createElement('li')
            li.innerHTML = item.title
            li.setAttribute('data-id', item.id)
            document.querySelector('#albums').append(li)

        })
    }

}

export default Albums