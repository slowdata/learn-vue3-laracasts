<template>
    <div class="modal-mask" v-if="show">
        <div class="model-container">
            <div>
                <slot>default body</slot>
            </div>
            <footer>
                <slot name="footer" class="model-footer">
                    <button @click="$emit('close')">Close</button>
                </slot>
            </footer>
        </div>
    </div>
</template>

<script setup>
defineProps({
    show: Boolean
})
</script>

<style>
.modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
}

.model-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
}

.model-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: .8rem;
}
</style>