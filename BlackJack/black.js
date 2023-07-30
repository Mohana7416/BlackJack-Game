
let card=[]
let sum=0
let a=document.getElementById("demo")
let msg=""
let b=document.getElementById("demo1")
let c=document.getElementById("demo2")
let hasblackjack=false
let isalive=true
  function StartGame()
  {
    sum=0
    let firstcard=getrondomCard()
     let secondcard=getrondomCard()
     card=[firstcard,secondcard]
      sum=firstcard+secondcard
    renderGame()
  }

function renderGame(){
    b.innerHTML="sum :"+sum;
    c.innerHTML="Card :"
      for(let i=0;i<card.length;i++)
      {
        c.innerHTML+=card[i]+" "
      }

      

if(sum <25)
{
    msg="you want draw the one card 😁" 
    
 }
else if(sum === 25){
    msg="you won the game of blackjacket 😂"
    hasblackjack=true
 }
else{
    isalive=false
    msg="you are out of  the game😭"}
a.innerHTML=msg
console.log(msg)
 }
function NewCard()
{
    if(isalive===true && hasblackjack===false)
    {
    let card2=getrondomCard()
    sum+=card2
    card.push(card2)
    renderGame()
    }
}
function getrondomCard()
{
    return Math.floor(Math.random()*13)+1
}