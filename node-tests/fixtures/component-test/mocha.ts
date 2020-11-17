import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { hbs } from 'ember-cli-htmlbars';

describeComponent('x-foo', 'Integration | Component | x-foo',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#x-foo}}
      //     template content
      //   {{/x-foo}}
      // `);

      this.render(hbs`{{x-foo}}`);
      expect(this.element).to.not.be.null;
    });
  }
);
