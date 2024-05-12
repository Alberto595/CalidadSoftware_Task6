test("Test Cases for convertIntegerToRoman(until TC-6) & Test Cases for convertRomanToInteger", function (assert) {
    assert.propEqual(convertIntegerToRoman(1), { value: "I", message: "", result: true }, "TC-1");
    assert.propEqual(convertIntegerToRoman(50), { value: "L", message: "", result: true }, "TC-2");
    assert.propEqual(convertIntegerToRoman("X"), { value: 0, message: "Please enter a valid integer", result: false }, "TC-3");
    assert.propEqual(convertIntegerToRoman("XIII"), { value: 0, message: "Please enter a valid integer", result: false }, "TC-4");
    assert.propEqual(convertIntegerToRoman(4000), { value: 0, message: "Out of range (1-3999)", result: false }, "TC-5");
    assert.propEqual(convertIntegerToRoman(-1), { value: 0, message: "Please enter a valid integer", result: false }, "TC-6");


    assert.propEqual(convertRomanToInteger("X"), { value: 10, message: "", result: true }, "TC-7");
    assert.propEqual(convertRomanToInteger("IIII"), { value: 0, message: "Please enter a valid roman", result: false }, "TC-8");
    assert.propEqual(convertRomanToInteger("MCXVI3"), { value: 0, message: "Please enter a valid roman", result: false }, "TC-9");
    assert.propEqual(convertRomanToInteger("XCC"), { value: 0, message: "Please enter a valid roman", result: false }, "TC-10");
    assert.propEqual(convertRomanToInteger(""), { value: 0, message: "Please enter a valid roman", result: false }, "TC-11");
});
