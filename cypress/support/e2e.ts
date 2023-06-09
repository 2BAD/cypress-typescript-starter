// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './routes'

import 'cypress-each'
import 'cypress-plugin-steps'
import 'cypress-map'
import * as compareSnapshotCommand from 'cypress-visual-regression/dist/command'
import * as registerCypressGrep from '@cypress/grep/src/support'

// @ts-expect-error ignore error because we importing an entire module into namespace
compareSnapshotCommand()
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
registerCypressGrep()

// Alternatively you can use CommonJS syntax:
// require('./commands')
