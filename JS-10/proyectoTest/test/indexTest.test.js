const calculadora = require("../calculadora");
test ("test suma", () => {
    const r = calculadora.suma(1,2);
    expect (r).toBe(3)

})