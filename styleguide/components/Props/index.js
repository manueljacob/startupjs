import React from 'react'
import { observer, useLocal, $root } from 'startupjs'
import { View, ScrollView } from 'react-native'
import './index.styl'
import Constructor from './Constructor'
import Renderer from './Renderer'

export default observer(function PComponent ({ Component, componentName, style }) {
  $root.setNull(`_session.Props.${componentName}`, {})
  let [props, $props] = useLocal(`_session.Props.${componentName}`)
  return pug`
    View(style=style)
      ScrollView.top
        Constructor(Component=Component $props=$props)
      ScrollView.bottom
        Renderer(Component=Component props=props)
  `
})
