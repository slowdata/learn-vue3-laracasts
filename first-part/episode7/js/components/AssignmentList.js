import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import Panel from "./Panel.js"

export default {
    name: 'AssignmentList',
    components: {
        'assignment': Assignment,
        AssignmentTags,
        Panel
    },
    template: `
        <panel v-show="assignments.length" class="w-72">
            <div class="flex items-start justify-between">
                <h2 class="font-bold text-xl mb-2">{{title}}
                    <span>({{assignments.length}})</span>
                </h2>
                <button v-show="canToggle" @click="$emit('toggle')">&times</button>
            </div>
            <assignment-tags 
                v-model:currentTag="currentTag"
                :initial-tags="assignments.map(a=>a.tag)" />
            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment v-for="assignment in filteredAssignments" 
                :assignment="assignment" :key="assignment.id" />
            </ul>

            <slot></slot>
            <template #footer>-By RD</template>
        </panel>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },
    data() {
        return {
            currentTag: 'all'
        }
    },
    computed: {
        filteredAssignments() {
            return this.currentTag === 'all' ?
                this.assignments :
                this.assignments.filter(a => a.tag === this.currentTag)
        }
    }
}