import swal from "sweetalert"

export default {
    methods: {
        flash(msg) {
            return swal('Success!', msg, 'success')
        }
    },
}
