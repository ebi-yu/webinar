<script setup lang="ts">
import { ref } from "vue";

// Props定義
interface Props {
  label?: string;
  variant?: "primary" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
  label: "Button",
  variant: "primary",
});

// Emits定義
interface ClickEvent {
  count: number;
  label: string;
  variant: string;
}

const emit = defineEmits<{
  click: [event: ClickEvent];
}>();

// リアクティブデータ
const count = ref<number>(0);

// メソッド
const handleClick = (): void => {
  count.value++;
  emit("click", {
    count: count.value,
    label: props.label,
    variant: props.variant,
  });
};
</script>

<template>
  <button :class="['vue-btn', variant]" @click="handleClick">
    {{ label }} ({{ count }})
  </button>
</template>

<style scoped>
.vue-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin: 0.25rem;
  transition: background-color 0.2s;
}

.primary {
  background: #4fc08d;
  color: white;
}

.primary:hover {
  background: #369870;
}

.secondary {
  background: #6c757d;
  color: white;
}

.secondary:hover {
  background: #545b62;
}
</style>
