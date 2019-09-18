<template>
  <Wrap>
    <h1>{{ page.title }}</h1>
    <h1>Here might be a page title</h1>
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>
  </Wrap>
</template>

<script>
import Wrap from "@/theme/components/Wrap.vue";
import page from "@/pages/home/home.yml";
import features from "@/pages/home/features.yml";

export default {
  components: { Wrap },
  data() {
    return {
      page,
      features
    };
  }
};
</script>