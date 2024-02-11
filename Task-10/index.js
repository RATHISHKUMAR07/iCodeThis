document.addEventListener('DOMContentLoaded', function() {
    const items = [
        "Eggs",
        "Tomatoes",
        "Avocado",
        "Egg noodles",
        "Scampi",
        "Orange juice",
        "Apples"
    ];

    const itemsList = document.getElementById('itemsList');
    const completedItems = document.querySelector('.selectedItems');
    const completedCount = document.getElementById('count');
    const addItemButton = document.getElementById('addItem');
    const card = document.querySelector('.card');
    const completedItemList = []; 

    addItemButton.addEventListener('click', function () {
        const textArea = document.createElement('input');
        textArea.placeholder = 'Enter the item to add';
        textArea.id = 'newItem';
        const addButton = document.createElement('button');
        addButton.textContent = 'Add';
        addButton.addEventListener('click', function () {
            const newItem = document.getElementById('newItem').value.trim();
            if (newItem) {
                items.push(newItem);
                renderItems();
                console.log('Item added:', newItem);
                textArea.remove();
                addButton.remove();
            }
        });
        card.appendChild(textArea);
        card.appendChild(addButton);
    });

    function renderItems() {
        itemsList.innerHTML = '';
    
        items.forEach(item => {
            const li = document.createElement('p');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'item';
            checkbox.value = item;
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(item));
            itemsList.appendChild(li);
    
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    const index = items.indexOf(item);
                    if (index !== -1) {
                        items.splice(index, 1);
                        completedItemList.push(item);
                        renderItems();
                    }
                }
            });
        });
    
        completedItems.innerHTML = '';
        completedItemList.forEach(item => {
            const completedItem = document.createElement('div');
            const del = document.createElement('p');
            del.textContent = "✔ " + item;
            completedItem.appendChild(del);
            completedItems.appendChild(completedItem);
        });
    
        // Update completed items count
        completedCount.textContent = "COMPLETED (" + completedItemList.length + ")";
    }
    // Initial rendering
    renderItems();
});
