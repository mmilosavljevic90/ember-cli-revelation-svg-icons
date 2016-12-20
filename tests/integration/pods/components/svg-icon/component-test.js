import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('svg-icon', 'Integration | Component | svg icon', {
  integration: true
})

const icons = [
  'arrow-left',
  'arrow-right',
  'bubble',
  'camera',
  'camera2',
  'check',
  'checkmark-circle',
  'chevron-left',
  'chevron-right',
  'clipboard-check',
  'clock3',
  'cog',
  'dial',
  'document2',
  'ellipsis-horz',
  'envelope',
  'lifebuoy',
  'link',
  'lock-solid',
  'lock',
  'menu',
  'paper-plane',
  'paper-stack',
  'paperclip',
  'pencil',
  'plus',
  'reply',
  'sync',
  'thumbs-up',
  'times',
  'user',
  'warning'
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
