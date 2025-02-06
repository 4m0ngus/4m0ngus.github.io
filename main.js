import itemData from './itemData.js';
import bootsData from './bootsData.js';
import heroStats from './heroStats.js';
import heroAbilities from './heroAbilities.js'; // New import for talent data
import { calculateHealthRegeneration } from './formulas.js';

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

    function populateTalentDropdown(hero, level, talentPrefix) {
        const tier1Select1 = document.getElementById(`${talentPrefix}1_1`);
        const tier1Select2 = document.getElementById(`${talentPrefix}1_2`);
        const tier2Select1 = document.getElementById(`${talentPrefix}2_1`);
        const tier2Select2 = document.getElementById(`${talentPrefix}2_2`);

        [tier1Select1, tier1Select2, tier2Select1, tier2Select2].forEach(select => {
            if (select) select.innerHTML = '';
        });

        if (!heroAbilities[hero]) return;

        const abilities = heroAbilities[hero];

        function addOption(select, value, text) {
            if (!select) return;
            const option = document.createElement('option');
            option.value = value;
            option.textContent = text;
            select.appendChild(option);
        }

        // Level-based talent unlocking
        if (level >= 6) {
            addOption(tier1Select1, "left", abilities.tier1.left);
            addOption(tier1Select2, "right", abilities.tier1.right);
        }
        if (level >= 10) {
            addOption(tier2Select1, "left", abilities.tier2.left);
            addOption(tier2Select2, "right", abilities.tier2.right);
        }
    }

    function calculateStats(hero, level, items) {
        if (!heroStats[hero]) return null;

        let calculatedStats = {};
        Object.keys(heroStats[hero]).forEach(stat => {
            calculatedStats[stat] = heroStats[hero][stat].base + (level - 1) * heroStats[hero][stat].scaling;
        });

        items.forEach(item => {
            if (!itemData[item]) return;
            Object.keys(itemData[item]).forEach(stat => {
                const statUpper = stat.toUpperCase();
                if (calculatedStats[statUpper] !== undefined) {
                    calculatedStats[statUpper] += itemData[item][stat];
                }
            });
        });

        calculatedStats.HPR = calculateHealthRegeneration(calculatedStats);
        return calculatedStats;
    }

    function updateHeroStats(heroId, levelId, statPrefix, itemPrefix, talentPrefix) {
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

        // Update talents when hero or level changes
        populateTalentDropdown(hero, level, talentPrefix);
    }

    function initializeHero(heroId, levelId, statPrefix, itemPrefix, talentPrefix) {
        populateDropdown(heroId, heroStats);
        populateLevelDropdown(levelId);
        populateDropdown(`${itemPrefix}1`, itemData);
        populateDropdown(`${itemPrefix}2`, itemData);
        populateDropdown(`${itemPrefix}3`, itemData);
        populateDropdown(`${itemPrefix}4`, itemData);
        populateDropdown(`${itemPrefix}5`, itemData);
        populateDropdown(`${heroId.replace("hero", "boots")}`, bootsData);

        document.getElementById(heroId).addEventListener('change', () => updateHeroStats(heroId, levelId, statPrefix, itemPrefix, talentPrefix));
        document.getElementById(levelId).addEventListener('change', () => updateHeroStats(heroId, levelId, statPrefix, itemPrefix, talentPrefix));
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`${itemPrefix}${i}`).addEventListener('change', () => updateHeroStats(heroId, levelId, statPrefix, itemPrefix, talentPrefix));
        }
    }

    initializeHero('hero1', 'level1', 'hero1-', 'item1_', 'talent1_');
    initializeHero('hero2', 'level2', 'hero2-', 'item2_', 'talent2_');

    updateHeroStats('hero1', 'level1', 'hero1-', 'item1_', 'talent1_');
    updateHeroStats('hero2', 'level2', 'hero2-', 'item2_', 'talent2_');
});
