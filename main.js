import itemData from './itemData.js'; // Import item data (as an object)
import bootsData from './bootsData.js'; // Import boots data (as an object)
import heroStats from './heroStats.js'; // Import hero stats (as an object)

document.addEventListener('DOMContentLoaded', () => {
    console.log("heroStats:", heroStats);
    console.log("itemData:", itemData);
    console.log("bootsData:", bootsData);

    function populateDropdown(id, dataObj) {
        const select = document.getElementById(id);
        if (!select) {
            console.error(`Dropdown with id ${id} not found.`);
            return;
        }
        select.innerHTML = ''; // Clear existing options

        const keys = Object.keys(dataObj); // Extract object keys

        if (keys.length === 0) {
            console.error(`No data found for dropdown ${id}`);
            return;
        }

        keys.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            select.appendChild(option);
        });

        console.log(`Dropdown ${id} populated with`, keys);
    }

    // Populate dropdowns using object keys instead of arrays
    populateDropdown('hero1', heroStats);
    populateDropdown('hero2', heroStats);
    populateDropdown('boots1', bootsData);
    populateDropdown('boots2', bootsData);
    populateDropdown('item1_1', itemData);
    populateDropdown('item1_2', itemData);
    populateDropdown('item1_3', itemData);
    populateDropdown('item1_4', itemData);
    populateDropdown('item1_5', itemData);
    populateDropdown('item2_1', itemData);
    populateDropdown('item2_2', itemData);
    populateDropdown('item2_3', itemData);
    populateDropdown('item2_4', itemData);
    populateDropdown('item2_5', itemData);
});
