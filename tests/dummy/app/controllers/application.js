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
    'checkmark-circle',
    'chevron-left',
    'chevron-right',
    'clipboard-check',
    'cog',
    'document2',
    'ellipsis-horz',
    'envelope',
    'lifebuoy',
    'lock-solid',
    'lock',
    'menu',
    'paper-plane',
    'paper-stack',
    'pencil',
    'plus',
    'reply',
    'sync',
    'thumbs-up',
    'times',
    'user',
    'warning'
  ]

})
