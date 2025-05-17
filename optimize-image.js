const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Path to the image
const inputImagePath = path.join(__dirname, 'public', 'img', 'faq-video-bg1.jpg');
const outputImagePath = path.join(__dirname, 'public', 'img', 'faq-video-bg1-optimized.jpg');

// Optimize the image
sharp(inputImagePath)
  .jpeg({
    quality: 70, // Reduce quality to 70%
    progressive: true, // Make the JPEG progressive
    optimizeScans: true, // Optimize the JPEG scans
  })
  .toFile(outputImagePath)
  .then(info => {
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputImagePath).size;
    const optimizedSize = fs.statSync(outputImagePath).size;
    
    console.log(`Original size: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`Optimized size: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`Reduction: ${(100 - (optimizedSize / originalSize) * 100).toFixed(2)}%`);
    console.log('Optimized image saved to:', outputImagePath);
    console.log('Please update your code to use the new optimized image.');
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  });
