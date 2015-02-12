QUnit.module("Iteration");

QUnit.test("Stores elements on numeric attributes", function(assert) {
	var selection = new $$(".test-a, .test-b");

	expect(3);

	assert.ok(selection[0] instanceof Element);
	assert.ok(selection[1] instanceof Element);
	assert.ok(selection[2] instanceof Element);
});

QUnit.test("Correctly iterates over the provided selection", function(assert) {
	var counter = 0;
	var selection = new $$(".test-a, .test-b");

	expect(6);

	selection.forEach(function(elem, idx) {
		assert.equal(selection[idx], elem, "Supplies the correct element");
		assert.equal(idx, counter, "Supplies the correct index");
		counter++;
	});
});

QUnit.test("Sets the iterator context to the current element", function(assert) {
	var selection = new $$(".test-a, .test-b");

	expect(3);

	selection.forEach(function(elem, idx) {
		assert.equal(this, selection[idx], "Correct context");
	});
});
