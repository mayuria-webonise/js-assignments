class myStorage{
    setData(key,value){
        this.storage.setItem(key,value)
    }
    getData(key){
        console.log(this.storage.getItem(key));
    }
    delete(key){
        this.storage.removeItem(key);
    }
    clearStorage(){
        this.storage.clear();
    }
}
class myLocal extends myStorage{
    constructor(){
        super();
        this.storage = localStorage;
    }
}
class mySession extends myStorage{
    constructor(){
        super();
        this.storage = sessionStorage;
    }
}
var localdb = new myLocal()
localdb.setData("name","mayuri");
localdb.getData("name");
var sessiondb = new mySession();
sessiondb.setData("lastname", "ardad");
sessiondb.getData("lastname");
