import{ indexTest } from"../calculadora";
/* const calculadora = require("../calculadora"); */
test ("test suma", () => {
    const r = indexTest.suma(1,2);
    expect (r).toBe(3)

});
test.todo("test de resta");
test.todo("test de mult");
test.todo("test de div");