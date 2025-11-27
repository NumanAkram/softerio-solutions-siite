const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directories to process
const directories = [
  'public/images',
  'public/images/projects',
  'public/icons'
];

// File extensions to convert
const imageExtensions = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'];

// Files to skip
const skipFiles = ['Avatar.gif', 'avatar.gif'];

// Counter for conversions
let convertedCount = 0;
let skippedCount = 0;
let errorCount = 0;

// Function to convert image to WebP
async function convertToWebP(filePath) {
  const fileName = path.basename(filePath);
  
  // Skip GIF files and specific files
  if (skipFiles.includes(fileName) || filePath.toLowerCase().endsWith('.gif')) {
    console.log(`⏭️  Skipped: ${filePath} (GIF or excluded file)`);
    skippedCount++;
    return;
  }

  // Check if file extension is in our list
  const ext = path.extname(filePath).toLowerCase();
  if (!imageExtensions.includes(ext)) {
    return;
  }

  try {
    // Create output path with .webp extension
    const outputPath = filePath.replace(/\.(png|jpg|jpeg|PNG|JPG|JPEG)$/i, '.webp');
    
    // Check if WebP already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipped: ${outputPath} (already exists)`);
      skippedCount++;
      return;
    }

    // Convert to WebP with quality 85 (good balance of quality and size)
    await sharp(filePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savedPercentage = ((originalSize - webpSize) / originalSize * 100).toFixed(2);
    
    console.log(`✅ Converted: ${fileName} → ${path.basename(outputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(2)} KB | WebP: ${(webpSize / 1024).toFixed(2)} KB | Saved: ${savedPercentage}%`);
    
    convertedCount++;
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
    errorCount++;
  }
}

// Function to recursively process directory
async function processDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        await processDirectory(fullPath);
      } else if (stat.isFile()) {
        // Process image files
        await convertToWebP(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dirPath}:`, error.message);
  }
}

// Main function
async function main() {
  console.log('🎨 Starting Image to WebP Conversion...\n');
  console.log('📁 Directories to process:', directories.join(', '));
  console.log('🚫 Skipping: GIF files (especially Avatar.gif)\n');
  console.log('─'.repeat(60));
  
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      console.log(`\n📂 Processing: ${dir}`);
      await processDirectory(dir);
    } else {
      console.log(`⚠️  Directory not found: ${dir}`);
    }
  }
  
  console.log('\n' + '─'.repeat(60));
  console.log('\n📊 Conversion Summary:');
  console.log(`✅ Successfully converted: ${convertedCount} images`);
  console.log(`⏭️  Skipped: ${skippedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log('\n✨ Conversion complete!\n');
  
  if (convertedCount > 0) {
    console.log('📝 Next Steps:');
    console.log('1. Check the converted .webp files');
    console.log('2. Run the code update script to change all references');
    console.log('3. Delete old PNG/JPG files if everything looks good\n');
  }
}

// Run the script
main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

