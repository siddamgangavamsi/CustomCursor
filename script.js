const vamsi = document.querySelector('html')

//real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
vamsi.appendChild(cursor)

//extra cursor
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
vamsi.appendChild(follower)

vamsi.addEventListener('mousemove', (e) => {
    setPosition(follower, e)
    setPosition(cursor, e)
})

function setPosition(element, e) {
    element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}