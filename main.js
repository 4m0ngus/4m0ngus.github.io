import itemData from './itemData.js';
import bootsData from './bootsData.js';
import heroStats from './heroStats.js';
import { calculateHPR } from './formulas.js'; // Import HPR formula

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
        if (!select) {
            console.error(`Dropdown with id ${id} not found.`);
            return;
        }
        select.innerHTML = '';
        for (let i = 1; i <= 12; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Level ${i}`;
            select.appendChild(option); 
        }
        select.value = 1;
    }

    function calculateStats(hero, level, items) {
        if (!heroStats[hero]) return null;

        let calculatedStats = {};
        Object.keys(heroStats[hero]).forEach(stat => {
            if(stat === 'HPR') return calculateHPR(heroStats[hero][stat].base + (level - 1) * heroStats[hero][stat].scaling);
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
        const level = parseInt(document.getElementById(levelId).value) || 1;
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

    function initializeHero(heroId, levelId, statPrefix, itemPrefix) {
        populateDropdown(heroId, heroStats);
        populateLevelDropdown(levelId);
        populateDropdown(`${itemPrefix}1`, itemData);
        populateDropdown(`${itemPrefix}2`, itemData);
        populateDropdown(`${itemPrefix}3`, itemData);
        populateDropdown(`${itemPrefix}4`, itemData);
        populateDropdown(`${itemPrefix}5`, itemData);
        populateDropdown(`${heroId.replace("hero", "boots")}`, bootsData);

        document.getElementById(heroId).addEventListener('change', () => updateHeroStats(heroId, levelId, statPrefix, itemPrefix));
        document.getElementById(levelId).addEventListener('change', () => updateHeroStats(heroId, levelId, statPrefix, itemPrefix));
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`${itemPrefix}${i}`).addEventListener('change', () => updateHeroStats(heroId, levelId, statPrefix, itemPrefix));
        }
    }

    // Initialize both heroes
    initializeHero('hero1', 'level1', 'hero1-', 'item1_');
    initializeHero('hero2', 'level2', 'hero2-', 'item2_');

    // Update stats initially
    updateHeroStats('hero1', 'level1', 'hero1-', 'item1_');
    updateHeroStats('hero2', 'level2', 'hero2-', 'item2_');
});
