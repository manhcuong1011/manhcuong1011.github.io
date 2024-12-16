function showTip() {
    const tips = [
        "Drink a glass of water before every meal.",
        "Avoid sugary drinks and junk food.",
        "Include more vegetables in your diet.",
        "Eat smaller portions more frequently.",
        "Stay active with 30 minutes of daily exercise.",
        "Sleep earlier"
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").textContent = randomTip;
}