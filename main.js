import itemData from './itemData.js'; // Import item data
import bootsData from './bootsData.js'; // Import boots data
import heroStats from './heroStats.js'; // Import hero stats

document.addEventListener('DOMContentLoaded', () => {
    function populateDropdown(id, data) {
        const select = document.getElementById(id);
        select.innerHTML = ''; // Clear existing options
        data.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            select.appendChild(option);
        });
    }

    // Extract hero names from heroStats
    const heroNames = Object.keys(heroStats);
    
    // Populate hero dropdowns
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

    // Function to update stats when a hero is selected
    function updateHeroStats(heroId, statPrefix) {
        const selectedHero = document.getElementById(heroId).value;
        const stats = heroStats[selectedHero];

        if (stats) {
            document.getElementById(`${statPrefix}hp`).textContent = stats.HP.base;
            document.getElementById(`${statPrefix}ad`).textContent = stats.AD.base;
            document.getElementById(`${statPrefix}ap`).textContent = stats.AP.base;
            document.getElementById(`${statPrefix}as`).textContent = stats.AS.base;
            document.getElementById(`${statPrefix}hpr`).textContent = stats.HPR.base;
            document.getElementById(`${statPrefix}armor`).textContent = stats.Armor.base;
            document.getElementById(`${statPrefix}ms`).textContent = stats.MS.base;
            document.getElementById(`${statPrefix}mr`).textContent = stats.MR.base;
        }
    }

    // Add event listeners to update hero stats when a hero is selected
    document.getElementById('hero1').addEventListener('change', () => updateHeroStats('hero1', 'hero1-'));
    document.getElementById('hero2').addEventListener('change', () => updateHeroStats('hero2', 'hero2-'));

    // Initialize stats for the first hero selection
    document.getElementById('hero1').dispatchEvent(new Event('change'));
    document.getElementById('hero2').dispatchEvent(new Event('change'));
});
