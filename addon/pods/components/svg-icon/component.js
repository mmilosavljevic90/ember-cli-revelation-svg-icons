import Ember from 'ember'
import layout from './template'

const {
  Component,
  computed
} = Ember

export default Component.extend({
  classPrefix: 'svg-icon',
  icon: null,
  layout,
  tagName: 'svg',
  classNameBindings: ['classPrefix', 'computedClassName'],

  // SVG props
  attributeBindings: [
    'version',
    'xmlns',
    'xmlns:xlink',
    'width',
    'height',
    'viewBox'
  ],
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  width: '20',
  height: '20',
  viewBox: '0 0 20 20',

  // Partial
  computedClassName: computed(function() {
    return `${this.get('classPrefix')}-${this.get('icon')}`
  }),
  partialPath: computed(function() {
    return `partials/-${this.get('computedClassName')}`
  })
})
