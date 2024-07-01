import * as elements from './elements.js'

export const tree = {
    audio : new Audio('../assets/musics/Floresta.wav'),
     play: function ()  {  
       this.audio.loop = true
        this.audio.play();
    },
    element: elements.tree
}
export const fire = {
    audio : new Audio('../assets/musics/Lareira.wav'),
    play: function (){  
              this.audio.loop = true;
               this.audio.play();
           },
    element: elements.fire
           
}
export const rain = {
    audio: new Audio('../assets/musics/Chuva.wav'),
    play: function (){  
        this.audio.loop = true;
         this.audio.play();
     },
     element:elements.rain
}
export const store = {
    audio: new Audio('../assets/musics/Cafeteria.wav'),
    play: function () {  
        this.audio.loop = true;
         this.audio.play();
     },
     element: elements.store
}

