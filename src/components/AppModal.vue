<template>
  <Transition name="modal-tr">
    <div v-if="modelValue">
      <div class="modal-backdrop fade show"></div>
      <!-- Modal -->
      <div
        class="modal fade show d-block"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header">
                <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="$emit('update:modelValue', false)"
                ></button>
              </slot>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <slot name="actions"> </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  modelValue: Boolean,
  title: String,
});
defineEmits(['close', 'update:modelValue']);
</script>

<style scoped>
.modal-tr-enter-from,
.modal-tr-leave-to {
  opacity: 0;
}
.modal-tr-enter-active {
  transition: all 0.5s ease;
}
.modal-tr-enter-to,
.modal-tr-leave-from {
  opacity: 1;
}
</style>
