import swal from "sweetalert"

export function useFlash() {
    function flash(title, msg, level = 'success') {
        return swal(title, msg, level)
    }
    return { flash }
}