import itemData from './itemData.js';
import bootsData from './bootsData.js';
import heroStats from './heroStats.js';

document.addEventListener('DOMContentLoaded', () => {
    function populateDropdown(id, dataObj) {
        const select = document.getElementById(id);
        if (!select) {
            console.error(`Dropdown with id ${id} not found.`);
            return;
        }
        select.innerHTML = '';
        Object.keys(dataObj).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            select.appendChild(option);
        });
    }

    function populateLevelDropdown(id) {
        const select = document.getElementById(id);
        select.innerHTML = '';
        for (let i = 1; i <= 12; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    }

    function calculateStats(hero, level, items) {
        if (!heroStats[hero]) return null;

        let calculatedStats = {};
        Object.keys(heroStats[hero]).forEach(stat => {
            calculatedStats[stat] = heroStats[hero][stat].base + (level - 1) * heroStats[hero][stat].scaling;
        });

        // Apply item stats
        items.forEach(item => {
            if (itemData[item] && itemData[item].bonusStats) {
                Object.keys(itemData[item].bonusStats).forEach(stat => {
                    if (calculatedStats[stat] !== undefined) {
                        calculatedStats[stat] += itemData[item].bonusStats[stat];
                    }
                });
            }
        });

        return calculatedStats;
    }

    function updateHeroStats(heroId, levelId, statPrefix, itemPrefix) {
        const hero = document.getElementById(heroId).value;
        const level = parseInt(document.getElementById(levelId).value);
        const items = [];
        for (let i = 1; i <= 5; i++) {
            items.push(document.getElementById(`${itemPrefix}${i}`).value);
        }

        const stats = calculateStats(hero, level, items);
        if (stats) {
            Object.keys(stats).forEach(stat => {
                const statElement = document.getElementById(`${statPrefix}${stat.toLowerCase()}`);
                if (statElement) {
                    statElement.textContent = stats[stat].toFixed(2);
                }
            });
        }
    }

    // Populate dropdowns
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
    populateLevelDropdown('level1');
    populateLevelDropdown('level2');

    // Event listeners for updating stats
    document.getElementById('hero1').addEventListener('change', () => updateHeroStats('hero1', 'level1', 'hero1-', 'item1_'));
    document.getElementById('hero2').addEventListener('change', () => updateHeroStats('hero2', 'level2', 'hero2-', 'item2_'));
    document.getElementById('level1').addEventListener('change', () => updateHeroStats('hero1', 'level1', 'hero1-', 'item1_'));
    document.getElementById('level2').addEventListener('change', () => updateHeroStats('hero2', 'level2', 'hero2-', 'item2_'));

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`item1_${i}`).addEventListener('change', () => updateHeroStats('hero1', 'level1', 'hero1-', 'item1_'));
        document.getElementById(`item2_${i}`).addEventListener('change', () => updateHeroStats('hero2', 'level2', 'hero2-', 'item2_'));
    }

    // Initialize stats
    updateHeroStats('hero1', 'level1', 'hero1-', 'item1_');
    updateHeroStats('hero2', 'level2', 'hero2-', 'item2_');
});
