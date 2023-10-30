let chessBoard=document.getElementById('chessboard')
console.log(chessBoard)

for(let i=1;i<=64;i++)
{
    let box=document.createElement('div')
    box.classList.add('box')
    if(i%2==0)
    {
        box.style.backgroundColor='brown'
    }
    else
    {
        box.style.backgroundColor='bisque'
    }
    if(i>=9 && i<=16 || i>=49 && i<=56)
    {
        box.classList.add('pawns')

    }
    chessBoard.append(box)
}

let soldiers=document.getElementsByClassName('pawns')
for(i of soldiers)
{
    i.innerHTML='<img src="black-soldier.jpg">'
}
console.log(soldiers)

// let whitePawns=['black-ele.webp','black-horse.jpg','black-camel.webp','black-main.webp','black-king.webp','black-camel.webp','black-horse.jpg','black-ele.webp']
let main_pawns=['elephant','horse','camel','queen','king','camel','horse','elephant']
let c=0
let j=0
let pawns=chessBoard.children
let img=document.createElement('img')
for(i in pawns)
{
    if(i>=0 && i<=7 )
    {
     pawns[i].innerHTML=`${main_pawns[c]}`
     pawns[i].style.textAlign='center'
     pawns[i].style.fontSize='20px'
     pawns[i].style.fontWeight='bold'
     c++;
    }
    if(i>=pawns.length-8 &&i<pawns.length)
    {
        pawns[i].innerHTML=`${main_pawns[j]}`
        pawns[i].style.textAlign='center'
        pawns[i].style.fontSize='20px'
        pawns[i].style.fontWeight='bold'
        j++
    }
}