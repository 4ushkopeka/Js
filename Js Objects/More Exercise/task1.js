class Storage{
    constructor(capacity){
        this.capacity = capacity;
    }
    storage = [];
    totalCost = 0;
    addProduct(product) {
        if(product.name !== undefined && product.price !== undefined && product.quantity !== undefined){
            this.storage.push(product);
            this.capacity-=product.quantity;
            this.totalCost+=product.price*product.quantity;
        }
    }
    getProducts(){
        let result = '';
        for (let i = 0; i < this.storage.length; i++) {
            if(i === this.storage.length-1){
                result+=JSON.stringify(this.storage[i]);
            }
            else{
                result+=JSON.stringify(this.storage[i])+'\n';
            }
        }
        return result;
    }
}