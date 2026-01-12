const express = require('express');
const app = express();
const port = process.env.PORT || 7860;

app.get('/', (req, res) => res.send('Server is Running!'));

app.get('/list', (req, res) => {
    const uuid = process.env.UUID || 'f2e17b4d-22fd-44a4-90db-40649717be8e';
    const domain = req.hostname;
    const vless = `vless://${uuid}@${domain}:443?encryption=none&security=tls&type=ws&host=${domain}&path=%2f#HuggingFace`;
    res.send(vless);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

