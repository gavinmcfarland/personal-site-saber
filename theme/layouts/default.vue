<template>
  <Wrap>
    <p>Deault layout</p>
    <slot />
  </Wrap>
</template>

<script>
import Wrap from "@/theme/components/Wrap.vue";

export default {
  components: { Wrap }
};
</script>