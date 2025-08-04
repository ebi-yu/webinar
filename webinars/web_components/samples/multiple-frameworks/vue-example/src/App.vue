<template>
  <div class="app">
    <h1>Vue 3 + Web Components</h1>
    <p>Vue 3アプリケーションでWeb Componentsを使用する例</p>

    <div class="button-group">
      <shared-button
        label="プライマリ"
        variant="primary"
        @shared-button-click="handleButtonClick"
      />
      <shared-button
        label="セカンダリ"
        variant="secondary"
        @shared-button-click="handleButtonClick"
      />
      <shared-button
        label="危険"
        variant="danger"
        @shared-button-click="handleButtonClick"
      />
    </div>

    <div class="event-log">
      <h2>イベントログ</h2>
      <ul>
        <li v-for="(event, index) in events" :key="index">
          {{ event }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { type ButtonClickDetail } from "../../shared-button";

const events = ref<string[]>([]);

const handleButtonClick = (event: CustomEvent<ButtonClickDetail>) => {
  const message = `${event.detail.label} (${event.detail.variant}) がクリックされました`;
  events.value.unshift(message);

  // 最新5件のみ保持
  if (events.value.length > 5) {
    events.value = events.value.slice(0, 5);
  }
};
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 30px;
}

.event-log {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.event-log h2 {
  margin-top: 0;
  color: #333;
}

.event-log ul {
  list-style: none;
  padding: 0;
}

.event-log li {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}
</style>
