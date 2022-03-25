

function contar(ciudadanos){
    const map = new Map();
    
    for(let i =0; i<ciudadanos.length; i++){
        if(!map.has(ciudadanos[i])){
            map.set(ciudadanos[i],1)
        }else{
            map.set(ciudadanos[i],map.get(ciudadanos[i]) + 1)
        }
    }
    map.forEach((value,key) => {
        console.log(key +':' +value);
    })
}

contar(['mexicano','mexicano','chile','chile','chile','brazil','mexicano'])