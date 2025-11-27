const { execSync } = require('child_process');

console.log('\n🚀 Starting Complete Image Conversion Process...\n');
console.log('This will:');
console.log('  1. Convert all PNG/JPG images to WebP (except Avatar.gif)');
console.log('  2. Update all code references automatically');
console.log('\n' + '═'.repeat(60) + '\n');

try {
  // Step 1: Convert images
  console.log('📸 Step 1: Converting images to WebP...\n');
  execSync('node scripts/convert-images-to-webp.js', { stdio: 'inherit' });
  
  console.log('\n' + '═'.repeat(60) + '\n');
  
  // Step 2: Update references
  console.log('🔄 Step 2: Updating code references...\n');
  execSync('node scripts/update-image-references.js', { stdio: 'inherit' });
  
  console.log('\n' + '═'.repeat(60) + '\n');
  console.log('✅ COMPLETE! All images converted and code updated!\n');
  console.log('Next steps:');
  console.log('  1. Run: npm run dev');
  console.log('  2. Test your website on http://localhost:3000');
  console.log('  3. Check all pages for images');
  console.log('  4. If everything works, you can delete old PNG/JPG files\n');
  
} catch (error) {
  console.error('\n❌ Error during conversion process:', error.message);
  console.error('\nTroubleshooting:');
  console.error('  1. Make sure sharp is installed: npm install sharp --save-dev');
  console.error('  2. Check that you are in the project root directory');
  console.error('  3. Verify Node.js version: node --version (should be 14+)\n');
  process.exit(1);
}

