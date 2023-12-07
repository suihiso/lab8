const infoDisplay = document.querySelector('#info')

const king = document.querySelector('.chess-piece')
const queen = document.querySelector('.chess-piece')
const elephant = document.querySelector('.chess-piece')
const horse = document.querySelector('.chess-piece')
const rook = document.querySelector('.chess-piece')
const pawn = document.querySelector('.chess-piece')

const squares = document.querySelectorAll('.square')

king.addEventListener('dragStart', dragStart)
queen.addEventListener('dragStart', dragStart)
elephant.addEventListener('dragStart', dragStart)
horse.addEventListener('dragStart', dragStart)
rook.addEventListener('dragStart', dragStart)
pawn.addEventListener('dragStart', dragStart)

squares.forEach(square => {
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let beingDragged

function dragStart(e){
    beingDragged = e.target
}

function dragOver(e){
    e.preventDefault()
}

function dragDrop(e){
    const enemy = 'chess-piece'
    const isEnemy = e.target?.classList.contains(enemy)
    if (isEnemy) {
        e.target.parentNode.append(beingDragged)
        e.target.remove()
    } else
        e.target.append(beingDragged)
}