function mowYard(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(name + " mowed the yard.")
        }, 2000);
    })
}

function weedEat(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isCompleted = true;

            if(isCompleted){
                resolve(name + " finished using the weed eater.")
            }
            else{
                reject(name + " fell asleep after mowing the yard.")
            }
        }, 1500);
    })
}

function trimHedges(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isCompleted = true;

            if(isCompleted){
                resolve(name + " finished trimming the hedges.")
            }
            else{
                reject(name + " fell asleep after eating the yard.")
            }
        }, 2500);
    })
}

function collectWood(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isCompleted = true;

            if(isCompleted){
                resolve(name + " finished collecting wood.")
            }
            else{
                reject(name + " fell asleep after trimming the hedges.")
            }
        }, 500);
    })
}

function waterGarden(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isCompleted = true;

            if(isCompleted){
                resolve(name + " finished watering the garden.")
            }
            else{
                reject(name + " fell asleep after collecting wood.")
            }
        }, 1000);
    })
}

async function doSummerChores(name){
    if (typeof name === 'string'){
        try{
            const mowYardResult = await mowYard(name);
        console.log(mowYardResult);

        const weedEatResult = await weedEat(name);
        console.log(weedEatResult);

        const trimHedgesResult = await trimHedges(name);
        console.log(trimHedgesResult);

        const collectWoodResult = await collectWood(name);
        console.log(collectWoodResult);

        const waterGardenResult = await waterGarden(name);
        console.log(waterGardenResult);
        console.log(name + " finished all their chores!");
        }

        catch(error){
            console.error(error);
        }
    }
}

doSummerChores("Alice");