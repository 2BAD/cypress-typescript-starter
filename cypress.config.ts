import { defineConfig } from 'cypress'
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin'

export default defineConfig({
  env: {
    grepFilterSpecs: true,
    screenshotsFolder: './cypress/snapshots/actual',
    trashAssetsBeforeRuns: true,
    video: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      getCompareSnapshotsPlugin(on, config)
      return config
    }
  }
})
