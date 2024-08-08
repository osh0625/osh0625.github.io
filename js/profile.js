import pictureList from './pictureList.js'

const pictureListEl = document.querySelector('.picture_list')
const modalEl = document.querySelector('.modal')

const createPictuerEl = (imgPath, title, subTitle, index) => {
    const pictureEl = document.createElement('div')
    pictureEl.classList.add('picture')

    const imageEl = new Image()
    imageEl.src = imgPath

    const descriptionEl = document.createElement('div')
    descriptionEl.classList.add('description')
    descriptionEl.dataset.index = index

    const emptyDiv = document.createElement('div')
    const titleEl = document.createElement('div')
    titleEl.classList.add('title')
    titleEl.innerHTML = title

    const subTitleEl = document.createElement('div')
    subTitleEl.classList.add('subtitle')
    // subTitleEl.innerHTML = subTitle

    descriptionEl.appendChild(emptyDiv)
    descriptionEl.appendChild(titleEl)
    descriptionEl.appendChild(subTitleEl)

    pictureEl.appendChild(imageEl)
    pictureEl.appendChild(descriptionEl)

    return pictureEl
}

const onPictureListClick = (event) => {
    const dataIndex = event.target.dataset.index
    if (!dataIndex) return

    const pictureData = pictureList[dataIndex]

    modalEl.classList.remove('hidden')
    modalEl.querySelector('.modal_picture img').src = pictureData.path
    modalEl.querySelector('.modal_title').innerHTML = pictureData.title
    modalEl.querySelector('.modal_subtitle').innerHTML = pictureData.subTitle

    console.log(pictureData)
}

const onLoad = () => {
    pictureList.forEach((el, index) => {
        const pictureEl = createPictuerEl(el.path, el.title, el.subTitle, index)
        pictureEl.dataset.info = index
        pictureListEl.appendChild(pictureEl)
    })

    pictureListEl.addEventListener('click', onPictureListClick)

    const modalBtnEl = modalEl.querySelector('.btn')

    modalBtnEl.addEventListener('click', () => {
        modalEl.classList.add('hidden')
    })
}

window.addEventListener('load', onLoad)
