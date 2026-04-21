const fs = require('fs');

try {
    fs.copyFileSync('public/index.html', 'dist/client/index.html');
    console.log('✅ Muvaffaqiyatli: index.html dist/client ichiga nusxalandi!');
} catch (err) {
    console.error('❌ Xato yuz berdi:', err);
    process.exit(1);
}