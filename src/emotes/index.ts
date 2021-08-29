interface Emotes {
   [key: string]: {
      default: string;
   };
}
const emotes = import.meta.globEager('/src/assets/*.png') as Emotes;
export const emotesMap = new Map<string, string>();

for (const emoteData of Object.values(emotes)) {
   const emojiURL = emoteData.default;
   const splittedURL = emoteData.default.split('.');
   splittedURL.pop();
   const emojiName = splittedURL.join('.').split('/').pop();

   if (emojiName) {
      emotesMap.set(emojiName, emojiURL);
   }
}
