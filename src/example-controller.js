/* global Stimulus, globalLeak */

import 'https://cdn.jsdelivr.net/npm/stimulus@2.0.0/dist/stimulus.umd.min.js'

// ↑↓ 一回しか読み込まれない

console.log('import twice, but imported once')

export class ExampleController extends Stimulus.Controller {
  connect () {
    this.element.innerHTML = `Stimulusから挿入されたコンテンツに global link した ${globalLeak} を反映できる。`
  }
}
