import Ember from 'ember'

const {
  Controller
} = Ember

export default Controller.extend({
  prefix: 'svg-icon-',
  iconComponents: [
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
