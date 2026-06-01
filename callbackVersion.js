function mowYard(name, callback){
  setTimeout(() => {
    console.log(name + " mowed the yard.")
    callback();
}, 2000);
}

function weedEat(name, isCompleted, callback){
    setTimeout(() => {
        if (isCompleted === true) {
            console.log(name + " finished using the weed eater.")
            callback();
        }
        else {
            console.log(name + " fell asleep after mowing the yard.")
        }
    }, 1500);
}

function trimHedges(name, isCompleted, callback){
    setTimeout(() => {
        if (isCompleted === true) {
            console.log(name + " finished trimming the hedges.")
            callback();
        }
        else {
            console.log(name + " fell asleep after eating the yard.")
        }
    }, 1000);
}

function collectWood(name, isCompleted, callback){
    setTimeout(() => {
        if (isCompleted === true) {
            console.log(name + " finished collecting wood.")
            callback();
        }
        else {
            console.log(name + " fell asleep after trimming the hedges.")
        }
    }, 2500);
}

function waterGarden(name, isCompleted, callback){
    setTimeout(() => {
        if (isCompleted === true) {
            console.log(name + " finished watering the garden.")
            callback();
        }
        else {
            console.log(name + " fell asleep after collecting wood.")
        }
    }, 500);
}

function doSummerChores (name, isCompleted){
    if (typeof name !== 'string'){
        console.error("Name must be letters!")
    }
    mowYard(name, () => {
        weedEat(name, true, () => {
            trimHedges(name, true, () => {
                collectWood(name, true, () =>{
                    waterGarden(name, true, () => {
                        console.log(name + " finished all their chores!");
                    })
                })
            })
        })
    })
}

doSummerChores("Alice");