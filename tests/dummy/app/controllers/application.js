import Ember from 'ember'

const {
  Controller,
  computed: { map }
} = Ember

export default Controller.extend({
  prefix: 'svg-icon-',
  iconComponents: [
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
})
