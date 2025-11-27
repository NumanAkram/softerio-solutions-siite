const fs = require('fs');
const path = require('path');

// Directories to process for code files
const directories = ['app', 'components', 'public'];

// File extensions to search in
const codeExtensions = ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss'];

// Skip these files
const skipFiles = ['Avatar.gif', 'avatar.gif'];

// Counter
let filesUpdated = 0;
let replacementsCount = 0;

// Function to check if file should be processed
function shouldProcessFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return codeExtensions.includes(ext);
}

// Function to update image references in a file
function updateFileReferences(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileReplacements = 0;

    // Pattern to match image imports and references
    // Matches: .png, .jpg, .jpeg, .PNG, .JPG, .JPEG
    const patterns = [
      /from ["'](@\/[^"']*?)\.(png|jpg|jpeg|PNG|JPG|JPEG)["']/g,
      /import\s+\w+\s+from\s+["']([^"']*?)\.(png|jpg|jpeg|PNG|JPG|JPEG)["']/g,
      /src=["']([^"']*?)\.(png|jpg|jpeg|PNG|JPG|JPEG)["']/g,
      /\/(images|icons)\/[^"'\s]*?\.(png|jpg|jpeg|PNG|JPG|JPEG)/g,
      /url\(["']?([^"'()]*?)\.(png|jpg|jpeg|PNG|JPG|JPEG)["']?\)/g,
      /background-image:\s*url\(["']?([^"'()]*?)\.(png|jpg|jpeg|PNG|JPG|JPEG)["']?\)/g,
      /bg-\[url\(([^)]*?)\.(png|jpg|jpeg|PNG|JPG|JPEG)\)\]/g,
    ];

    patterns.forEach(pattern => {
      content = content.replace(pattern, (match) => {
        // Skip if it's Avatar.gif related
        if (skipFiles.some(skip => match.toLowerCase().includes(skip.toLowerCase()))) {
          return match;
        }
        
        // Replace extension with .webp
        const updated = match.replace(/\.(png|jpg|jpeg|PNG|JPG|JPEG)/, '.webp');
        if (updated !== match) {
          fileReplacements++;
          replacementsCount++;
        }
        return updated;
      });
    });

    // If changes were made, write back to file
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath} (${fileReplacements} references)`);
      filesUpdated++;
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process directory
function processDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      // Skip node_modules and .next directories
      if (item === 'node_modules' || item === '.next' || item === '.git') {
        continue;
      }

      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (stat.isFile() && shouldProcessFile(fullPath)) {
        updateFileReferences(fullPath);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dirPath}:`, error.message);
  }
}

// Main function
function main() {
  console.log('🔄 Starting Code Reference Update...\n');
  console.log('📁 Directories to process:', directories.join(', '));
  console.log('🚫 Skipping: Avatar.gif references\n');
  console.log('─'.repeat(60));
  
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      console.log(`\n📂 Processing: ${dir}`);
      processDirectory(dir);
    } else {
      console.log(`⚠️  Directory not found: ${dir}`);
    }
  }
  
  console.log('\n' + '─'.repeat(60));
  console.log('\n📊 Update Summary:');
  console.log(`✅ Files updated: ${filesUpdated}`);
  console.log(`🔄 Total replacements: ${replacementsCount}`);
  console.log('\n✨ Code update complete!\n');
  
  if (filesUpdated > 0) {
    console.log('📝 Next Steps:');
    console.log('1. Check the updated code files');
    console.log('2. Test the website to ensure images load correctly');
    console.log('3. Delete old PNG/JPG files if everything works\n');
  } else {
    console.log('ℹ️  No files needed updating. Make sure images are converted first!\n');
  }
}

// Run the script
main();

