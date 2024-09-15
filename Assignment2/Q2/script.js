var shoppingList=[];
var id=100;
var cart=document.getElementById('shopping-list');

function cartItem(id,name,quant){
    var listItem=document.createElement('li');
    
    listItem.innerHTML=`
        <p>Name:${name}</p>
        <p>Quantity:${quant}</p>
        <button class="remove">Remove</button>
        <button class="edit">Edit</button>`;

    listItem.id=id;
    listItem.className="item";
    cart.appendChild(listItem);
}

function addToCart(name,quant){
    shoppingList.push({
        id:id,
        name:name,
        quantity:quant
    })
    cartItem(id,name,quant);
    id++;
}





var add=document.getElementById('add-item');
add.addEventListener('click',()=>{
    var itemName=document.getElementById('item-name').value;
    var itemQuant=document.getElementById('item-quantity').value;
    addToCart(itemName,itemQuant);
    console.log(shoppingList);
});


cart.addEventListener('click',(e)=>{
    let listItem=e.target.closest('li');

    if(e.target.className==="remove"){
        listItem.remove();
        shoppingList=shoppingList.filter(
            item=>item.id!==listItem.id
        );
    }
    else if(e.target.className === 'edit'){
        let newName = prompt('Enter new name:', listItem.children[0].textContent.split(': ')[1]);
        let newQuantity = prompt('Enter new quantity:', listItem.children[1].textContent.split(': ')[1]);
        
        if (newName && newQuantity) {
            listItem.children[0].textContent = `Name: ${newName}`;
            listItem.children[1].textContent = `Quantity: ${newQuantity}`;
            shoppingList.find(item => item.id == listItem.id).name = newName;
            shoppingList.find(item => item.id == listItem.id).quantity = newQuantity;
        }
    }
})