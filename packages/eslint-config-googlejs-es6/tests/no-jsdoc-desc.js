/**
 * @param {!types} arg1
 * @param {!Baz} arg2
 * @return {void}
 */
function foo(arg1, arg2) {
  arg1.fakeMethod();
  arg2.call(null);
}

foo();
