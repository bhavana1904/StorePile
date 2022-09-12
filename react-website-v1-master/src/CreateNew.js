export const createNew = DetailRequest =>{
    const NewBlock =new Blockchain();
    NewBlock.addBlock(new Block(Date.now().toString(),["0DetailRequest"]))
    console.log(NewBlock.chain);
}
    


