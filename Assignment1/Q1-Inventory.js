function Item(id, name, quant, price){
    this.id=id;
    this.name=name;
    this.quant=quant;
    this.price=price;
}

//Adding new Items
function addItem(inventory, item){
    inventory.push(item);
}

function updateItem(inventory,id, newDetails){
    const itemIndex=inventory.findIndex((item)=>item.id===id);
    if(itemIndex!=-1){
        inventory[itemIndex]={...inventory[itemIndex], ...newDetails};
    }
    else{
        console.log(`Item with id ${id} not found`);
    }

}


function deleteItem(inventory, id){
    const itemIndex=inventory.findIndex((obj)=>obj.id===id);
    if(itemIndex!=-1){
        inventory.splice(itemIndex,1);
    }
    else{
        console.log(`Item with id ${id} not found`)
    }
}


function getItem(inventory, id){
    const itemIndex=inventory.findIndex((item)=>item.id===id);
    if(itemIndex!=1){
        return inventory[itemIndex];
    }
    else{
        console.log(`Item with id ${id} not found`);
    }
}

function printInventory(inventory){
    inventory.forEach(element => {
        console.log(`
           Id:${element.id},
           Name:${element.name},
           Quantity:${element.quant},
           Price:${element.price}
        `)
    })
        
};


const inventory = [];

// Adding items
addItem(inventory, new Item(1, 'Apple', 50, 0.5));
addItem(inventory, new Item(2, 'Banana', 30, 0.3));
console.log("Initial Inventory:",inventory);



addItem(inventory, new Item(3, 'Orange', 20, 0.7));
console.log("Adding Item:",inventory);


// Updating an item
updateItem(inventory, 2, { name: 'Green Banana', quantity: 25 });
console.log("Updating Item:",inventory);





deleteItem(inventory, 1);
console.log("Deleting Item:",inventory);

