<template>
  <!-- <input
    type="text"
    class="mb-1"
    :value="value"
    @input="$emit('input', $event.target.value)"
  /> -->
  <input
    type="text"
    class="mb-1"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  props: ["modelValue"]
};
</script>
