import * as event from './events.js'
import * as actions from './actions.js'
import { state } from './state.js'
import * as elements from './elements.js'

export function countdown(){
    if(state.isRunning){
        updateDisplay()
        clearInterval(state.intervalId)
        
        decreaseOne()
    
        state.intervalId = setInterval(countdown,1000)
                        
        }
    else{
        return
        }


}




export function updateDisplay(){
    elements.minutes.textContent = String(state.minutes).padStart(2,'0')
    elements.seconds.textContent = String(state.seconds).padStart(2,'0')

}
function decreaseOne(){
    state.seconds--
        
        
    if(state.seconds < 0 && !state.minutes == 0){
        
        state.seconds =  59; 
        state.minutes -= 1
    }
    if(state.minutes == 0 && state.seconds < 0 ){
        actions.reset();
        return
    }
}

