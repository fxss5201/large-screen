<template>
  <div class="bg-white mx-auto" ref="box">
    <button @click="toggle">{{ isFullscreen ? "退出" : "进入" }}全屏</button>
    <div
      class="p-6 max-w-sm mx-auto bg-gray-100 rounded-6 shadow-md flex items-center space-x-4"
    >
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="./../assets/chat.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useFullscreen } from "@vueuse/core";

export default {
  name: "Tailwindcss",
  setup() {
    const box = ref();
    const { isFullscreen, toggle } = useFullscreen(box);
    return {
      box,
      isFullscreen,
      toggle,
    };
  },
};
</script>
