import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | circular-progress-backdrop', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:circular-progress-backdrop');
    assert.ok(controller);
  });
});
