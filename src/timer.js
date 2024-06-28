import * as event from './events.js'
import * as actions from './actions.js'
import { state } from './state.js'
import * as elements from './elements.js'

export function countdown(){
   
   clearInterval(state.intervalId)
    state.seconds--





   const idInterval = setInterval(countdown
    ,1000)
    updateDisplay()



}




export function updateDisplay(){
    // state.minutes = state.minutes;
    // state.seconds = state.seconds;

    elements.minutes.textContent = String(state.minutes).padStart(2,'0')
    elements.seconds.textContent = String(state.seconds).padStart(2,'0')

}

