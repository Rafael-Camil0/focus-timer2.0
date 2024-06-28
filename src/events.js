
import * as action from'./actions.js'

export const controls = document.querySelector('#app')

export function registerControls(){

    controls.addEventListener('click', (event) =>{
       action[event.target.dataset.action]()

    })
}