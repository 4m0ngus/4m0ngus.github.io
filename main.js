import itemData from './itemData.js'; // Import item data
import bootsData from './bootsData.js'; // Import boots data
import heroStats from './heroStats.js'; // Import hero stats

document.addEventListener('DOMContentLoaded', () => {
    function populateDropdown(id, data) {
        const select = document.getElementById(id);
        select.innerHTML = '';
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            select.appendChild(option);
        });
    }

    // Populate hero dropdowns
    const heroNames = Object.keys(heroStats);
    populateDropdown('hero1', heroNames);
    populateDropdown('hero2', heroNames);

    // Populate boots dropdowns
    populateDropdown('boots1', bootsData);
    populateDropdown('boots2', bootsData);

    // Populate item dropdowns
    for (let i = 1; i <= 5; i++) {
        populateDropdown(`item1_${i}`, itemData);
        populateDropdown(`item2_${i}`, itemData);
    }

    // Update ability dropdown based on selected attacking hero
    document.getElementById('hero1').addEventListener('change', function () {
        const selectedHero = this.value;
        if (heroStats[selectedHero] && heroStats[selectedHero].abilities) {
            populateDropdown('ability', heroStats[selectedHero].abilities);
        }
    });

    // Initialize abilities for first hero
    document.getElementById('hero1').dispatchEvent(new Event('change'));
});
