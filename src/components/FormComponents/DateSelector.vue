<template>
    <q-input :label="props.label" outlined v-model="date">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const props = defineProps<{
  modelValue: string;
  label: string;
}>();
const emit = defineEmits(['update:modelValue']);
const date = ref(new Date().toISOString().split('T')[0]);
watch(() => date.value, (value) => {
  emit('update:modelValue', value);
});

</script>
