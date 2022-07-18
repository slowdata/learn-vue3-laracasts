import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'

export default {
    name: 'Assignments',
    template: `
        <section class="flex gap-8">
            <assignment-list title="In Progress" :assignments="filters.inProgress">
                <assignment-create @add="add" />
            </assignment-list>

            <div v-show="showCompleted">
                <assignment-list
                    title="Completed"
                    :assignments="filters.completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                />
            </div>

        </section>`,
    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },
    async created() {
        const response = await fetch('http://dev.local:3001/assignments')
        this.assignments = await response.json();
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => !a.complete),
                completed: this.assignments.filter(a => a.complete)
            }

        }
    },
    components: {
        'assignment-list': AssignmentList,
        'assignment-create': AssignmentCreate
    },
    methods: {
        add(name) {
            this.assignments = [...this.assignments,
            {
                id: ++this.assignments.length,
                name,
                complete: false
            }
            ]
        }
    },
}