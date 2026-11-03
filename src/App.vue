<script setup lang="ts">
import { ref } from 'vue';
import CounterComponent from '@/components/CounterComponent.vue';

const last = ref(0);
</script>

<template>
    <main class="container">
        <h1 v-once>Comunicación entre componentes</h1>
        <CounterComponent @update="last = $event" />
        <CounterComponent :initial="5" :step="2" @update="last = $event" />
        <CounterComponent :initial="14" @update="last = $event" />
        <p>Último valor recibido: {{ last }}</p>
    </main>
</template>

<style scoped></style>
