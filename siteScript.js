import itemData from './itemData.js'; // Import your item data
import heroStats from './heroStats.js'; // Import your hero stats

document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM to load

  // 1. Populate Item Dropdowns:
  const itemDropdowns = document.querySelectorAll('.item-slots select'); // Select all item dropdowns

  itemDropdowns.forEach(dropdown => {
    for (const itemName in itemData) {
      const option = document.createElement('option');
      option.value = itemName; // The item name is the value
      option.text = itemName; // The item name is what the user sees
      dropdown.appendChild(option);
    }
  });

  // 2. Populate Hero Dropdowns:
  const heroDropdowns = document.querySelectorAll('.hero-slots select'); // Select hero dropdowns

  heroDropdowns.forEach(dropdown => {
    for (const heroName in heroStats) {
      const option = document.createElement('option');
      option.value = heroName;
      option.text = heroName;
      dropdown.appendChild(option);
    }
  });


  // 3. Calculate Button Event Listener (Placeholder):
  const calculateButton = document.getElementById('calculate');

  calculateButton.addEventListener('click', () => {
    // Get selected values (items, heroes, hits, crit)
    const selectedItems = Array.from(itemDropdowns).map(dropdown => dropdown.value);
    const attacker = document.getElementById('attacker').value;
    const defender = document.getElementById('defender').value;
    const hits = parseInt(document.getElementById('hits').value); // Parse as integer
    const crit = document.getElementById('crit').checked;

    // Perform calculations (replace with your actual logic)
    console.log("Selected Items:", selectedItems);
    console.log("Attacker:", attacker);
    console.log("Defender:", defender);
    console.log("Hits:", hits);
    console.log("Crit:", crit);

    // Display results (placeholder)
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = "Calculations will be displayed here.";
  });

});
