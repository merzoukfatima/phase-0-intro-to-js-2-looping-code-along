// Code your solutions in this file

function writeCards(array){
    let thanks=[]
    for(let i=0;i<array.length;i++){
        thanks.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`)
    }
    return thanks
}

function countDown(count){
for(let i=count; i>=0;i--){
    console.log(i)
}
}
