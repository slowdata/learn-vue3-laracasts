import Assignments from './Assignments.js'

let App = {
    template: `
        <div class="grid gap-6">
            <assignments />
        </div>
`,
    components: {
        'assignments': Assignments,
    }
}

export default App;