
import * as action from'./actions.js'
import * as element from './elements.js'


export function registerControls(){

    element.controls.removeEventListener('click', handleClick);
    element.controls.addEventListener('click', handleClick);
   
}
function handleClick(event) {
    const targetAction = event.target.dataset.action.split(",");
    const actionSelected = targetAction[0];
   
    if (targetAction && actionSelected != 'playMusic' && action[actionSelected]) {
        action[actionSelected]();
    }else if(actionSelected == 'playMusic'){
        action[actionSelected](targetAction[1])
       
    }
 }