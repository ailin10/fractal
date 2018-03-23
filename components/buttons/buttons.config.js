'use strict';

module.exports = {
  title: 'Buttons',
  default: 'primary',
  variants: [
    {
      name: 'primary',
      status: 'wip',
      context: {
        name: 'primary',
        toolTip: 'primary tooltip',
        css: 'asdf',
        toolTip: 'tooltip',
        withIcon: true,
        toolTip: 'tooltip',
        unauthorizedBehaviour: 'buttondisabled',
        disabled: false,
        visible: true,
      }
    },
    {
      name: 'secondary',
      //label: 'secondary',
      context: {
        name: 'secondary',
        toolTip: 'secondary tooltip',
        css: 'asdf'
      }
    },
    {
      name: 'Tertiary',
      label: 'tertiary',
      context: {
        name: 'tertiary',
        toolTip: 'tertiary tooltip',
        css: 'asdf'
      }
    }
  ]
};