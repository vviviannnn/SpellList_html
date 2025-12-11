const monkeySpell = {
    name: "Monkey Bookmark",
    school: "Evocation",
    level: "2",
    archetype: ["Bard", "Cleric", "Druid", "Ranger"],
    description: "Range: Self \nDuration: 1 minute \nChoose a concentration spell from your prepared spell list. You can remove that spell’s need for concentration for one minute. If Monkey Bookmark ends while your chosen spell is still active, you may choose to keep the other spell active by dedicating your concentration to it, or by using your bonus action to cast this spell again. You can only have one use of Monkey Bookmark active at a time",
}

const ingratiationSpell = {
    name: "Ingratiation",
    school: "Enchantment",
    level: "2",
    archetype: ["Bard", "Cleric", "Sorceror", "Warlock", "Wizard"],

}

const puppetSpell = {
    name: "Puppet Recall",
    school: "Necromancy",
    level: "3",
    archetype: ["Cleric", "Paladin", "Sorceror", "Warlock", "Wizard"],
}

const eyeSpell = {
    name: "Heyejack",
    school: "Divination",
    level: "4",
    archetype: [ "Bard", "Wizard"],
}

const soundSpell = {
    name: "Shape Sound",
    school: "Transmutation",
    level: "0",
    archetype: ["Bard", "Cleric", "Druid", "Ranger", "Wizard"],

}

const roomSpell = {
    name: "Gnostradamus' Fucky Room",
    school: "Transmutation",
    level: "3",
    archetype: ["Wizard"],

}

const omenSpell = {
    name: "Illest Omens",
    school: "Necromancy",
    level: "4",
    archetype: ["Cleric", "Paladin", "Sorceror", "Warlock"],
}

const hatredSpell = {
    name: "Deep Sea's Hatred",
    school: "Necromancy",
    level: "10",
    archetype: [],
}

let spellList = [monkeySpell, ingratiationSpell, puppetSpell, eyeSpell, soundSpell, roomSpell, omenSpell, hatredSpell];
let currentList = [];




var level = 'Any';
var school = 'Any';
var archetype = 'Any';


function restate() {
    removeSpells();
    let temp, item, a, i, d;
    let x = 0;

    document.getElementById("testID").innerHTML = "Level: " + level + ".   School: " + school + ".   Class: " + archetype;

    d = document.getElementById("spellHolder")
    temp = document.getElementsByTagName("template")[0];
    item = temp.content.querySelector("button");
    for (i = 0; i < spellList.length; i++) {
        if ((level == "Any" || level == spellList[i].level) && (school == "Any" || school == spellList[i].school) && (archetype == "Any" || spellList[i].archetype.includes(archetype))) {
            a = document.importNode(item, true);
            currentList[x] = a;
            x++;
            a.textContent += spellList[i].name;
            d.appendChild(a);
        }
    }
}


function stateLevel(lvl) {
    level = lvl;
    restate();
    console.log("Check 1");
}

function stateSchool(shl) {
    school = shl;
    restate();
}

function stateArchetype(atp) {
    archetype = atp;
    restate();
}


function removeSpells() {
    console.log("Check 2");
    let j;
    for (j=0; j < currentList.length; j++) {
        currentList[j].remove();
    }
    currentList = [];
}
