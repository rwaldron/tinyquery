QUnit.module("Selection");

QUnit.test("Tag names", function(assert) {
	var selection = new $$("article");

	expect(1);

	assert.equal(selection.length, 1, "Returns the correct number of elements");
});

QUnit.test("Class names", function(assert) {
	var selection = new $$(".test-a");

	expect(1);

	assert.equal(selection.length, 2, "Returns the correct number of elements");
});

QUnit.test("IDs", function(assert) {
	var elem = new $$("#test-id");

	expect(1);

	assert.equal(elem.length, 1, "Returns the correct number of elements");
});

QUnit.test("Complex selectors", function(assert) {
	expect(3);

	assert.equal(new $$(".test-a.test-b").length, 1, "Returns the correct number of elements");
	assert.equal(new $$(".test-a, .test-b").length, 3, "Returns the correct number of elements");
	assert.equal(new $$(".test-c > span").length, 1, "Returns the correct number of elements");
});

QUnit.test("Context", function(assert) {
	var span = document.getElementById("test-id");

	expect(1);

	assert.equal(new $$(".test-c", span).length, 1, "Returns the correct number of elements");
});
