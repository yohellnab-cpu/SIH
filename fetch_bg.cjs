const https = require('https');

https.get('https://sih.gov.in/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    // try to find body { ... background ... }
    const match = data.match(/<body[^>]*>/i);
    console.log("Body tag:", match ? match[0] : 'Not found');
    
    const inlineStyles = data.match(/background(?:-image|-color)?:[^;]+;/gi);
    if (inlineStyles) {
      console.log("Unique backgrounds:", [...new Set(inlineStyles)].slice(0, 20));
    }
  });
});
