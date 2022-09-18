//Promises and Async

class CoffeeShop {

    waitress(orders, delivery){
        setTimeout(() => {
                if (orders.Type === 'Beverage' || orders.Type === 'Main Dish') delivery(null, `your ${orders.Menu} will be served soon!`)
                else {
                    delivery(`${orders.Type} is not available now`)
                } 
        }, 2000);
    }

    action(orders, resolve, reject){
        this.waitress(orders, (error, result)=>{
            if (error) reject(new Error(error));
            else{ 
                resolve(result); 
            }
        });
    };

    // doing order
    promise(orders) {
        return new Promise((resolve, reject) => {
            this.action(orders, resolve, reject)
        })
    } 

    // this is for promise with async. (another option)
    promiseAsync(orders){
        return new Promise((resolve, reject) => {
            if (orders.Type === 'Beverage' || orders.Type === 'Main Dish') resolve(`your ${orders.Menu} will be served soon!`)
            else {
                reject(`${orders.Type} is not available now`)
            } 
        })
    }
}

export default CoffeeShop;