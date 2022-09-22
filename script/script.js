
 
function comprarLeiteCondensado(){
    console.log('Joaozinho está indo na padaria ...')
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        const mensagen='Joaozinho foi atropelado' ;
        reject(mensagen);
        
        }, 5000);
    });
 
   
}

function fazendoBrigadeiro(){
    console.log('Fazendo brigadeiro ...');

}

function comprarLeiteCondensadoEfazendoBrigadeiroFetchAPI(){
    comprarLeiteCondensado().then((mensagen)=>{
        console.log(mensagen);
      fazendoBrigadeiro();  
    }).catch((mensagen)=> console.log(mensagen)).finally(()=>{
        console.log('Script concluido')

    });
    
}

async function comprarLeiteCondensadoEfazendoBrigadeiroAsycWait(){
    try{
   const retorna = await comprarLeiteCondensado();
   console.log(retorna);
   fazendoBrigadeiro();
    
   }
    catch(erro){
        console.log(erro);

    }
    console.log('Script concluido')
    

}

//comprarLeiteCondensadoEfazendoBrigadeiroFetchAPI();
comprarLeiteCondensadoEfazendoBrigadeiroAsycWait()