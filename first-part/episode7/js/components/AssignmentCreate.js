export default {
    name: 'AssignmentCreate',
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black flex">
                <input v-model="newAssignment" placeholder="New assignment..." class="p-2 flex-1" />
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        // addAssignment() {
        //     this.add(this.newAssignment)
        //     this.newAssignment = '';
        // }
        add() {
            this.$emit('add', this.newAssignment)
            this.newAssignment = '';
        }
    },
}