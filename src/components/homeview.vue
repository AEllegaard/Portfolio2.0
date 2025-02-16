<script setup>
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <div class="flex flex-col justify-end content-end h-screen -mt-13 mx-4">

    <H1 class="font-display text-9xl">Anna Ellegaard</H1>
    <p class="font-display text-96 leading-none tracking-tighter">Digital designer based in <span class="text-green-100">Denmark</span> <br>
      with strong interests within <span class="text-green-100">visual <br>identity</span>, <span class="text-green-100">experience</span>- and <span class="text-green-100">digital design</span>.</p>
  </div>
</template>
