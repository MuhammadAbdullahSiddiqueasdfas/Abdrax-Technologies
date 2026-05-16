const fs = require('fs');
const path = require('path');

const dir = './app/home';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace radial gradients
  content = content.replace(/rgba\(59,130,246/g, 'rgba(6,182,212');
  content = content.replace(/rgba\(139,92,246/g, 'rgba(6,182,212');
  
  // Replace blue/purple utility classes
  content = content.replace(/bg-blue-600\/10 border-blue-600\/20 text-blue-400/g, 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400');
  content = content.replace(/hover:border-blue-500/g, 'hover:border-cyan-500');
  content = content.replace(/text-blue-400/g, 'text-cyan-400');
  content = content.replace(/text-blue-300/g, 'text-cyan-300');
  content = content.replace(/bg-blue-500\/10/g, 'bg-cyan-500/10');
  content = content.replace(/shadow-blue-500\/10/g, 'shadow-cyan-500/10');
  content = content.replace(/bg-blue-500/g, 'bg-cyan-500');
  content = content.replace(/bg-blue-400/g, 'bg-cyan-400');
  content = content.replace(/focus:border-blue-500/g, 'focus:border-cyan-500');
  content = content.replace(/focus:ring-blue-500/g, 'focus:ring-cyan-500');
  
  // Also we want to make the primary buttons use the brand gradient
  // In HeroSection: btn-primary
  content = content.replace(/className="btn-primary/g, 'className="bg-gradient-to-br from-cyan-500 to-blue-500');
  
  // In ContactSection and CTASection, the buttons were set to solid white recently
  // let's change them to the gradient if they are main CTA buttons
  if (file === 'ContactSection.tsx' || file === 'CTASection.tsx') {
    content = content.replace(/bg-white hover:bg-gray-200 transition-colors(.*?)text-black/g, 'bg-gradient-to-br from-cyan-500 to-blue-500 hover:opacity-90 transition-opacity$1text-white');
  }

  // Restore the avatar gradient that the user explicitly wants from-cyan-500 to-blue-500
  // (In case the above bg-blue-500 replacement messed it up, but it replaces bg-blue-500 which is fine, but wait 'to-blue-500' -> 'to-cyan-500' because of bg-blue-500 replacement? No, my replace regex is specifically `bg-blue-500` not `to-blue-500`, so `to-blue-500` is safe.)
  
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log('Colors updated');
