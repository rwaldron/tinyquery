QUnit.module("API shape");

QUnit.test("Global functions", function(assert) {
	expect(3);

	assert.equal(typeof window.$$, "function", "Defines a global '$$' function");
	assert.equal(typeof window.tQuery, "function", "Defines a global 'tQuery' function");
	assert.strictEqual(window.tQuery, window.$$, "$$ and tQuery are the same function");
});

QUnit.test("Return value", function(assert) {
	var selection = new $$("body");

	expect(2);

	assert.equal(typeof selection.length, "number", "Selection defines a `length` Number property");
	assert.equal(typeof selection.forEach, "function", "Selection defines a `forEach` method");
});
