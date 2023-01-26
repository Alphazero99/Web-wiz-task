var arrayone = ['lightblue' , 'antiquewhite' , 'lightcoral' , 'lightgreen']
var arraytwo = ['About Web Wiz' , 'Web Wiz Club']
var arraythree = ['iron man.jpg']
var a = 0
var b = 0
var c = 0


function promptText(){
    alert("Welcome!")
}

function changeBG(){
    var i = Math.floor((Math.random()*4))
    document.querySelector('body').style.backgroundColor = arrayone[i]
}

async function sleep(seconds){
    return new Promise((resolve) => setTimeout(resolve, seconds*1000))
}

async function changeHeadingText(){
    if(a%2 == 0){
        await sleep(5)
        document.querySelector('h1').innerText = arraytwo[0]
        a = a+1
    }

    else{
        await sleep(5)
        document.querySelector('h1').innerText = arraytwo[1]
        a = a+1
    }

}

function marvel(){
    if(b%2 == 0){
        document.body.style.backgroundImage = "url('iron man.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        

        
        
        b = b+1
    }

    else{
        document.querySelector('body').style.backgroundImage = null
        b = b+1
    }

}

document.querySelector('.button_one').addEventListener("click" , promptText)

document.querySelector('.button_two').addEventListener("click" , changeBG)

document.querySelector('.button_three').addEventListener("click" , changeHeadingText)

document.querySelector('.button_four').addEventListener("click" , marvel)


