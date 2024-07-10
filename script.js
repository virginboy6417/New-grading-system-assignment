var songF = new Audio ('failure-F.mp3')
var songA = new Audio ('CLAPPING-A.wav')
var songE = new Audio ('laugh-E.wav')
var songD = new Audio ('hmm-D.mp3')
var songC = new Audio ('success-C.mp3')
var songB = new Audio ('congratulations-B.mp3')


function checkScore(){
    if (score.value >=0 && score.value < 40){
        result.innerHTML ='F'
        songF.play()


    } else if (score.value >=40 && score.value <45){
        result.innerHTML ='E'
        songE.play()


    }else if (score.value >=45 && score.value <50){
        result.innerHTML ='D'
        songD.play()


    }else if (score.value >=50 && score.value <60){
        result.innerHTML ='C'
        songC.play()


    }else if (score.value >=60 && score.value <70){
        result.innerHTML ='B'
        songB.play()


    }else if (score.value >=70 && score.value <=100){
        result.innerHTML ='A'
        songA.play()


    }else {
        result.innerHTML ='Invalid input'
    }
}