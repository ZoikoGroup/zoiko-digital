const fs = require('fs');

const path = 'c:\\Users\\aparaziitha nitta\\zoiko-digital\\app\\printing-signage\\printing.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /(<img[^>]+src=["']\/images\/printing\/Symbol\s*\((\d+)\)\.png["'][^>]*>)/g;

content = content.replace(regex, (match, full_match, numStr) => {
    const symbol_num = parseInt(numStr, 10);
    let color = "bg-teal-700";
    let size = "w-12 h-12";
    
    if (symbol_num >= 9 && symbol_num <= 14) {
        // Materials Library main icons
        color = "bg-teal-700";
        size = "w-12 h-12";
    } else if (symbol_num >= 15 && symbol_num <= 17) {
        // Materials Library small icons (home, sun, recycle)
        color = "bg-teal-700";
        size = "w-4 h-4";
    } else if (symbol_num >= 18 && symbol_num <= 21) {
        // Color & Quality Assurance
        color = "bg-sky-900";
        size = "w-12 h-12";
    } else if (symbol_num >= 22 && symbol_num <= 24) {
        // Rollouts & Logistics
        color = "bg-teal-700";
        size = "w-10 h-10";
    } else if (symbol_num >= 25 && symbol_num <= 30) {
        // Gallery Showcase
        color = "bg-white";
        size = "w-14 h-14";
    } else {
        // Top hero icons (1-8)
        color = "bg-sky-900";
        size = "w-12 h-12";
    }
    
    return `<div className="${size} ${color}" style={{ WebkitMaskImage: 'url("/images/printing/Symbol (' + symbol_num + ').png")', WebkitMaskSize: 'contain', WebkitMaskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskImage: 'url("/images/printing/Symbol (' + symbol_num + ').png")', maskSize: 'contain', maskRepeat: 'no-repeat', maskPosition: 'center' }} />`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Icons replaced successfully!');
