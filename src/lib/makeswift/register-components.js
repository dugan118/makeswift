// lib/makeswift/register-components.js

import { ReactRuntime } from '@makeswift/runtime/react'
import { Style } from '@makeswift/runtime/controls'


// --- Test Box ---
import Box from '@/components/Test'
function HelloWorld() {
  return <Box />
}
ReactRuntime.registerComponent(HelloWorld, {
  type: 'testComp',
  label: 'testComp',
  props: {
    className: Style(),
  },
})

// --- Board Component ---
import Board from '@/components/Board'
function regBoard() {
  return <Board />
}
ReactRuntime.registerComponent(regBoard, {
  type: 'Board',
  label: 'Board',
  props: {
    className: Style(),
  },
})

// --- EventSelector Component ---
import EventSelector from '@/components/EventSelector'
function regEventSelector(props) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log('props: ', props)
  return <EventSelector {...props}/>
}
ReactRuntime.registerComponent(regEventSelector, {
  type: 'EventSelector',
  label: 'EventSelector',
  props: {
    className: Style(),
  },
})

// --- TopPanel Component ---
import TopPanel from '@/components/TopPanel'
function regTopPanel(props) {
  return <TopPanel {...props}/>
}
ReactRuntime.registerComponent(regTopPanel, {
  type: 'TopPanel',
  label: 'custom/TopPanel',
  props: {
    className: Style(),
  },
})

// --- Header Component ---
import Header from '@/components/Header'
function regHeader(props) {
  return <Header {...props}/>
}
ReactRuntime.registerComponent(regHeader, {
  type: 'customHeader',
  label: 'custom/customHeader',
  props: {
    className: Style(),
  },
})


// --- importButton Component ---
import importButton from '@/components/UpdateGamesButton'
function regimportButton(props) {
  return <importButton {...props}/>
}
ReactRuntime.registerComponent(regimportButton, {
  type: 'importButton',
  label: 'custom/importButton',
  props: {
    className: Style(),
  },
})
