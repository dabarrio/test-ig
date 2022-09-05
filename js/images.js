const swipper = document.getElementById('swipper')
const nameInfo = document.getElementById('nameInfo')
const imgInfo = document.getElementById('imgInfo')
const nameDescription = document.getElementById('nameDescription')

    axios({
        method: 'GET',
        url: 'https://picsum.photos/v2/list?page=2&limit=100'
    })
    .then(res=>{
        const total = res.data.length

        const image = []

        const random1 = Math.ceil(total * Math.random())
        const random2 = Math.ceil(total * Math.random())
        const random3 = Math.ceil(total * Math.random())
        const random4 = Math.ceil(total * Math.random())

        const img1 = image.push(res.data[random1 > total ? 0 : random1])
        const img2 = image.push(res.data[random2 > total ? 1 : random2])
        const img3 = image.push(res.data[random3 > total ? 2 : random3])
        const img4 = image.push(res.data[random4 > total ? 3 : random4])

        image.map(i=>{
            const IMG = document.createElement('img')
            IMG.classList.add('swiper-slide')
            IMG.classList.add('carousel__image')
            IMG.src = i.download_url;
            IMG.alt = i.author;
            IMG.width= '200px';
            IMG.height= '300px';
           return swipper.appendChild(IMG)
        })
    })
    .catch(error=> console.log(error))

    axios({
        method: 'GET',
        url: 'https://randomuser.me/api/'
    })
    .then(res=>{
        //#region Variables
        const user = res.data.results[0]
        const userName = `${user.name.first} ${user.name.last}`
        const city = `${user.location.state}, ${user.location.city}`
        const image = `${user.picture.large}`
        //#endregion

        //#region Info text
        const H3 = document.createElement('h3')
        const P = document.createElement('p')

        H3.classList.add('info__data--name');
        P.classList.add('info__data--city');
        H3.innerHTML= userName;
        P.innerHTML = city;

        H3.appendChild(P)
        nameInfo.appendChild(H3)
        //#endregion

        //#region Info image
        const IMG = document.createElement('img')

        IMG.classList.add('info__image')
        IMG.src = image;
        IMG.alt = userName;

        imgInfo.appendChild(IMG)
        //#endregion

        //#region Description
        const H4 = document.createElement('h4')
        const SPAN = document.createElement('span')

        H4.classList.add('description__text')
        SPAN.classList.add('description__text--comment')
        H4.innerHTML = userName
        SPAN.innerHTML = ' dolor sit amet, consectetur adipiscing elit. Mi enim ut eu cras ultrices eget et tristique proin. Mi enim ut eu cras ultrices eget et tristique proin.'

        H4.appendChild(SPAN)
        nameDescription.appendChild(H4)
        //#endregion

    })
    .catch(error=> console.log(error))