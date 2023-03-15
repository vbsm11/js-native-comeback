// fn => fn()
// fn => обработчик (handler), подписчик (subscriber), слушатель (listener)
// {key: value, .....} - объект с информацией о событии (event, ev, e)
// fn(e)

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')

const onClickHandler1 = (e) => {
    e.stopPropagation()
    if (e.target.tagName === 'BUTTON') {
        alert(e.target.id)
    }
}

// const onClickHandler2 = (e) => {
//     alert(e.currentTarget.id)
// }

onClickHandler3 = (e) => {
    alert('hi')
}

sm.onclick = onClickHandler1
sm.onclick = null

sm.addEventListener('click', onClickHandler1)
// md.addEventListener('click', onClickHandler2)
bg.addEventListener('click', onClickHandler3)

const a = document.getElementById('a')
a.addEventListener('click', (e) => {
    e.preventDefault()
    alert('Иди учи CSS')
})