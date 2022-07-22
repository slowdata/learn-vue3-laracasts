import { defineStore } from "pinia";

export let useTeamStore = defineStore("team", {
    state() {
        return {
            "name": "Smiley",
            "icon": "😀",
            "spots": 5,
            "members": [
                {
                    "id": 1,
                    "name": "James Doe",
                    "email": "james@doe.com",
                    "status": "active"
                },
                {
                    "id": 2,
                    "name": "Sara Doe",
                    "email": "sra@doe.com",
                    "status": "active"
                },
                {
                    "id": 3,
                    "name": "Steven Doe",
                    "email": "steve@doe.com",
                    "status": "active"
                },
                {
                    "id": 4,
                    "name": "Jen Doe",
                    "email": "jen@doe.com",
                    "status": "active"
                },
                {
                    "id": 5,
                    "name": "Jo Doe",
                    "email": "jo@doe.com",
                    "status": "active"
                }
            ]
        }
    },
    getters: {
        remaining() {
            return this.spots - this.members.length
        }
    }
})