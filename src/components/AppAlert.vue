<template>
  <!-- <Transition name="slide">
    <div v-if="show" class="alert2 alert" :class="styleClass" role="alert">
      {{ messeage }}
    </div>
  </Transition> -->

  <div class="alert2">
    <TransitionGroup name="slide">
      <div
        v-for="({ message, type }, index) in items"
        :key="index"
        class="alert"
        :class="styleClass(type)"
        role="alert"
      >
        {{ message }}
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});

// const props = defineProps({
//   show: {
//     type: Boolean,
//     default: false,
//   },
//   messeage: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     default: 'error',
//     validator: value => ['success', 'error'].includes(value),
//   },
// });
const styleClass = type =>
  type === 'error' ? 'alert-danger' : 'alert-success';
</script>

<style scoped>
.alert2 {
  position: fixed;
  top: 10px;
  right: 10px;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.slide-enter-active {
  transition: all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
</style>
