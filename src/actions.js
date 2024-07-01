import { state } from "./state.js";
import * as timer from './timer.js'
import * as index from './index.js'
import * as musics from './music.js'




export function play(){
document.documentElement.classList.add('running')
state.isRunning = true
timer.countdown();
    
    

}
export function reset(){
    document.documentElement.classList.remove('running')
    index.start(20,0)
}

export function pause(){
    state.isRunning = false
    document.documentElement.classList.remove('running')
    
}

export function add(){
    state.minutes > 55 ?alert('Limite máximo de minutos alcançado'): state.minutes+= 5
  
    timer.updateDisplay()

}

export function decrease(){
    state.minutes < 5 ? state.minutes = 0: state.minutes-= 5
    
    timer.updateDisplay()
}

export function playMusic(choice){
    
    if(state.music == choice){
        stopMusic(choice)
        
        return
    }
    else if(state.music == ''){
        initMusic(choice)
        return
    }else {
         toggleMusic(choice)
        
        return
    }
        
}

function initMusic(choice){
    state.music = choice
    musics[choice].play()
    toogleActived(choice)
}
function toggleMusic(choice){
    musics[state.music].audio.pause()
    toogleActived(state.music)
    state.music = choice
    musics[choice].play()
    toogleActived(choice)
}
function stopMusic(choice){
  musics[choice].audio.pause()
        state.music = ""
        toogleActived(choice)
}
function toogleActived(music){

    musics[music].element.classList.toggle('active')
}