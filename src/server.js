const app = require("./");
const port = 3333;

app.listen(port, () => {
    console.log(`Server on http://localhost:${port}`);
});
