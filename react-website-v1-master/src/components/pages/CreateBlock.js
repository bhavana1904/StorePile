

const crypto = require("crypto"), SHA256 = message => crypto.createHash("sha256").update(message).digest("hex");
class Block{
    constructor(timestamp="",data=[])
    {
        this.timestamp=timestamp;
        this.data=data;
        this.hash=this.getHash();
        this.prevHash="";

    }
    getHash(){
        return SHA256(JSON.stringify(this.data)+this.timestamp+this.prevHash);
    }
}
class Blockchain
{
    constructor(){
        this.chain=[new Block(Date.now().toString())];

    }
    getLastBlock(){
          return this.chain[this.chain.length - 1];
    }
    addBlock(block){
        block.prevHash=this.getLastBlock().hash;
        block.hash=block.getHash();
        this.chain.push(block);
    }
}

const NewBlock =new Blockchain();
NewBlock.addBlock(new Block(Date.now().toString(),["0DetailRequest"]));
console.log(NewBlock.chain);
/*export const createNew = DetailRequest =>{
const NewBlock =new Blockchain();
NewBlock.addBlock(new Block(Date.now().toString(),["0DetailRequest"]))
console.log(NewBlock.chain);}
*/