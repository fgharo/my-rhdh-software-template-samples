const express = require('express');
const app = express();

['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, () => {
    console.log(`received signal ${signal}. stopping process`)
    process.exit(0)
  })
})

app.get('/', (req, res) => res.send('${{ values.name }}'));

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000')
});
