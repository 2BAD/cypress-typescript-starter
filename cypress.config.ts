import { defineConfig } from 'cypress'
import * as getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin'

export default defineConfig({
  env: {
    grepOmitFiltered: true,
    grepFilterSpecs: true
  },
  watchForFileChanges: false,
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  video: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line
      require('@cypress/grep/src/plugin')(config)
      // @ts-expect-error ignore error because we importing an entire module into namespace
      getCompareSnapshotsPlugin(on, config)
      return config
    }
  }
})
