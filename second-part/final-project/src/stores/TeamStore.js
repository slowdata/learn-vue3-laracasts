import { defineStore } from "pinia";

export const useTeamStore = defineStore("team", {
    state: () => ({
        "name": "",
        "icon": "",
        "spots": 0,
        "members": []
    }),
    actions: {
        async fill() {
            try {
                const data = await import('@/team.json')
                //team = data.default

                // this.$patch({
                //     name: team.name,
                //     icon: team.icon,
                //     spots: team.spots,
                //     members: team.members
                // })
                this.$state = data.default

            } catch (error) {
                console.error('>> ', error.message)
            }
        },
        grow(spots) {
            this.spots += spots
        }
    },
    getters: {
        remaining() {
            return this.spots - this.members.length
        }
    }
})
