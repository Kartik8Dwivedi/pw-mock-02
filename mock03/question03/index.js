const loader = document.getElementById('loader')
const container = document.getElementById('container')

const show = 10;
let data

const fetchFunction = async () => {
    loader.style.display = 'inline-block'
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    data = await res.json();
    console.log(data)
    loader.style.display = 'none'
    addToContainer()
}
fetchFunction()

const addToContainer = async () => {
    data.forEach(element => {
        const thumbnailUrl = element.thumbnailUrl
        const title = element.title
        const card = document.createElement('div')
        card.innerHTML = `<div class="card">
                                <div>
                                    <img src="${thumbnailUrl}" alt="">
                                </div>
                                <p>${title.substring(0,10)}</p>
                         </div>`
        container.append(card)
    });
}
