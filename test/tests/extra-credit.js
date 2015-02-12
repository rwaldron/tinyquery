QUnit.module("Extra credit");

QUnit.test("Constructor invocation", function(assert) {
	expect(2);
	assert.ok(new $$("body") instanceof tQuery, "Returns an instance of tQuery when called with 'new'");
	assert.ok($$("body") instanceof tQuery, "Returns an instance of tQuery when called without 'new'");
});
