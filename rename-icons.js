const fs = require('fs');
const path = require('path');

const trustDir = path.join(__dirname, 'public', 'TRUST ICON');
const newDir = path.join(__dirname, 'public', 'trust-icons');

if (!fs.existsSync(newDir)){
    fs.mkdirSync(newDir);
}

const files = fs.readdirSync(trustDir);

const mappings = [
    { old: 'ChatGPT Image May 2, 2026, 04_05_04 PM.png', new: 'google-reviews-5-star-rating-saudi-cabs.png' },
    { old: 'ChatGPT Image May 2, 2026, 04_05_09 PM.png', new: 'fixed-price-guarantee-no-hidden-costs.png' },
    { old: 'ChatGPT Image May 2, 2026, 04_05_14 PM.png', new: '24-7-always-on-support-taxi.png' },
    { old: 'ChatGPT Image May 2, 2026, 04_06_16 PM.png', new: 'premium-vip-fleet-quality-gmc.png' },
    { old: 'ChatGPT Image May 2, 2026, 04_18_09 PM.png', new: 'staria-yukon-premium-features-luggage.png' },
    { old: 'ChatGPT Image May 2, 2026, 04_18_16 PM.png', new: 'live-tracking-gps-safety-priority.png' },
    { old: 'ChatGPT Image May 2, 2026, 04_18_22 PM.png', new: 'instant-whatsapp-booking-convenience.png' },
    { old: 'ChatGPT Image May 2, 2026, 04_18_33 PM.png', new: 'professional-certified-chauffeurs-makkah.png' },
];

files.forEach(file => {
    const map = mappings.find(m => m.old === file);
    if (map) {
        fs.copyFileSync(path.join(trustDir, file), path.join(newDir, map.new));
        console.log(`Copied and Renamed: ${file} -> ${map.new}`);
    }
});

console.log('Finished renaming trust icons!');
