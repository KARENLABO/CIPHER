window.cipher =  {
    encode: (offset, string) => {
        let cifrarTexto="";
        for(let i=0; i<string.length; i++){
        let x= string.charCodeAt(i);
            if (x >64 && x <91){
            let numAcci= (x-65 + offset) %26 + 65;
            cifrarTexto +=  String.fromCharCode(numAcci);
        }else{
            cifrarTexto +=  String.fromCharCode(x);
            }
        }
        return cifrarTexto;   
    },


    decode:(offset, string) => {
        let descifrarTexto="";
        for(let i=0; i<string.length; i++){
        var x= string.charCodeAt(i);
            if (x >64 && x <91){
                let numAcci2= (x+65-offset)%26 + 65;
                descifrarTexto +=  String.fromCharCode(numAcci2);
            }else{
                descifrarTexto +=  String.fromCharCode(x);
            }
        }
        
        return descifrarTexto;
    }    
            

};


function createHTML() {
    for(let i=0; i<infoGeneral.length; i++){
      let containerDiv=create('div',{className:"container"},parent);
      var obj= infoGeneral[i];
      create("p",{textContent:"name:" + obj.name}, containerDiv);
      create("p",{textContent:"img:" + obj.img}, containerDiv);
      create("p",{textContent:"actor:" + obj.actor}, containerDiv);
    
      mostrar.appendChild(newDiv);  
    }
    }