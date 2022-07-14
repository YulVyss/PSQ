// paralax
// const imgPhone = document.querySelector('.main__img')
// const imgBack = document.querySelector('.main__image-back')
// imgBack.style.height = `${(imgPhone.offsetHeight) * 0.8}px`

// //img margin top
// let topStyle = parseInt(getComputedStyle(imgPhone).marginTop)
// //img viewport position
// let yImg = imgPhone.getBoundingClientRect().top
// //back viewport position
// let yBack = imgBack.getBoundingClientRect().top
// //set img margin
// imgPhone.style.marginTop = `${(yImg * topStyle) / 960}px`
// let bottomStyle = parseInt(getComputedStyle(imgBack).marginBottom)

// let maxMarginTop = -100

// // console.log(topStyle)
// document.addEventListener('scroll', (ev) => {
//   console.log(parseInt(imgPhone.style.marginTop))
//   if (parseInt(imgPhone.style.marginTop) > maxMarginTop) {
//     moveImg()
//   }


// })
// function moveImg() {
//   let move = (yImg - imgPhone.getBoundingClientRect().top) / 5
//   imgPhone.style.marginTop = `${topStyle - move}px`
//   imgBack.style.marginBottom = `${bottomStyle + (move)}px`
// }
