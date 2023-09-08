// const itemForm = document.getElementById('itemForm');
// const totalCostElement = document.getElementById('totalCost');
// let totalCost = 0;


// itemForm.addEventListener('submit', function(event) {
//   event.preventDefault();


//   const itemName = document.getElementById('itemName').value;
//   const itemSize = document.getElementById('itemSize').value;
//   const itemQuantity = parseFloat(document.getElementById('itemQuantity').value);
//   const itemPrice = parseFloat(document.getElementById('itemPrice').value);
//   const transportCost = parseFloat(document.getElementById('transportCost').value);
//   const miscell = parseFloat(document.getElementById('miscell').value);
//   const phone_no = parseFloat(document.getElementById('phone_no').value);

//   const itemTotalCost = itemPrice + transportCost + miscell;
//   totalCost +=  itemTotalCost;
 
  
//   // totalCost.inner

//   const newItemInfo = `
//     <p><strong>Item:</strong> ${itemName}</td>
//     <p><strong>Size:</strong> ${itemSize}</td>
//     <p><strong>Quality:</strong> ${itemQuantity}</td>
//     <p><strong>Item Price:</strong> &#8358;${itemPrice}</td>
//     <p><strong>Transport Cost:</strong> &#8358;${transportCost}</td>
//     <p><strong>Miscellaneous:</strong> &#8358;${miscell}</td>
//     <p><strong>phone_no:</strong> ${phone_no}</td>
//     <p><strong>Total Cost:</strong> &#8358;${itemTotalCost}</td>
//     <hr>
//   `;

//   totalCostElement.innerText = "₦ " + totalCost.toFixed(2);

//   document.body.insertAdjacentHTML('beforeend', newItemInfo);
//   localStorage.setItem('items', JSON.stringify(newItemInfo))

//   // Clear input fields
//   itemForm.reset();
// });



// NEW ONE
    const itemForm = document.getElementById('itemForm');
    const totalCostElement = document.getElementById('totalCost');
    const storedItemsElement = document.getElementById('storedItems');
    let totalCost = 0;
    let storedItems = JSON.parse(localStorage.getItem('storedItems')) || [];

    // Function to update the displayed stored items
    function updateStoredItems() {
      storedItemsElement.innerHTML = '';
      storedItems.forEach(item => {
        const itemInfo = `
          <tr>
            <td> ${item.name}</td>
            <td> ${item.size}</td>
            <td> ${item.quantity}</td>
            <td> &#8358;${item.price}</td>
            <td> &#8358;${item.transportCost}</td>
            <td> &#8358;${item.miscell}</td>
            <td> ${item.phone_no}</td>
            <td> &#8358;${item.totalCost}</td>
          </tr>
          <hr>
        `;
        storedItemsElement.innerHTML += itemInfo;
      });
    }

    // Update stored items when the page loads
    updateStoredItems();

    itemForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const itemName = document.getElementById('itemName').value;
      const itemSize = document.getElementById('itemSize').value;
      const itemQuantity = parseFloat(document.getElementById('itemQuantity').value);
      const itemPrice = parseFloat(document.getElementById('itemPrice').value);
      const transportCost = parseFloat(document.getElementById('transportCost').value);
      const miscell = parseFloat(document.getElementById('miscell').value);
      const phone_no = document.getElementById('phone_no').value;

      const itemTotalCost = itemPrice + transportCost + miscell;
      totalCost += itemTotalCost;

      const newItem = {
        name: itemName,
        size: itemSize,
        quantity: itemQuantity,
        price: itemPrice,
        transportCost: transportCost,
        miscell: miscell,
        phone_no: phone_no,
        totalCost: itemTotalCost
      };

      storedItems.push(newItem);
      localStorage.setItem('storedItems', JSON.stringify(storedItems));

      totalCostElement.textContent = "₦ " + totalCost.toFixed(2);

      updateStoredItems();

      // Clear input fields
      itemForm.reset();
    });