<script setup lang="ts">
import { dolma } from 'dolma';
import { computed, ref } from 'vue';
import Emote from '/src/components/Emote.vue';

const inputText = ref(':thonk: hello world :joy:');
const encodedText = computed(() => dolma.encode(inputText.value));
</script>

<template>
   <input placeholder="type" v-model="inputText" type="text" />
   <h2>RESULT</h2>
   <Emote :encodedData="encodedText" />
</template>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
