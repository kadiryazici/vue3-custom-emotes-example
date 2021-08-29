<script lang="ts" setup>
import { emotesMap } from '/src/emotes';
import type { MessageToken } from 'dolma';

interface Props {
   encodedData: MessageToken[];
}

const props = defineProps<Props>();
</script>

<template>
   <div>
      <template v-for="token in props.encodedData">
         <template v-if="token.t === 'text'">
            {{ token.v }}
         </template>
         <template v-else-if="token.t === 'mention'">
            <strong>{{ token.v }}</strong>
         </template>
         <template v-else-if="token.t === 'link'">
            <a :href="token.v">{{ token.v.slice(0, 30) }}</a>
         </template>
         <template v-else-if="token.t === 'block'">
            <i>{{ token.v }}</i>
         </template>
         <template v-else-if="token.t === 'emote'">
            <template v-if="emotesMap.get(token.v)">
               <img class="emote" :src="emotesMap.get(token.v)" :alt="`:${token.v}:`" />
            </template>
         </template>
         <span>&nbsp;</span>
      </template>
   </div>
</template>

<style scoped>
.emote {
   vertical-align: middle;
   height: 25px;
   width: 25px;
}
</style>
