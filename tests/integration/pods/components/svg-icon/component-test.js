import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('svg-icon', 'Integration | Component | svg icon', {
  integration: true
})

const icons = [
  'arrow-left',
  'arrow-right',
  'bubble',
  'check',
  'ellipsis-horz',
  'menu',
  'paper-plane',
  'pencil',
  'reply',
  'thumbs-up',
  'times',
  'cog',
  'envelope',
  'lifebuoy',
  'paper-stack',
  'clipboard-check',
  'lock',
  'lock-solid'
]

const testSVG = icon => {
  test(`'${icon}' renders and has class`, function(assert) {
    assert.expect(2)

    this.set('icon', icon)
    this.render(hbs`{{svg-icon icon=icon}}`)

    assert.ok(this.$('svg path'), '<path> renders')
    assert.ok(this.$('svg').hasClass(`svg-icon-${icon}`), 'has class')
  })
}

const runTests = () => {
  icons.forEach(icon => {
    testSVG(icon)
  })
}

runTests()
