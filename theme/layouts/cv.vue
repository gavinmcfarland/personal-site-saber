<template>
  <Wrap>
    <Section v-for="section in sections" :key="section" class="bt">
      <h2 class="md:w-200 f-caps f-0">{{ section.heading }}</h2>
      <div v-html="markdown(section.content)"></div>
    </Section>
    <slot />
  </Wrap>
</template>

<script>
import Wrap from "@/theme/components/Wrap.vue";
import Section from "@/theme/components/Section.vue";
import page from "@/pages/home/home.yml";
import sections from "@/pages/cv/sections.yml";
import marked from "marked";
import MarkdownIt from "markdown-it";
var md = new MarkdownIt();

export default {
  components: { Wrap, Section },
  data() {
    return {
      page,
      sections
    };
  },
  methods: {
    markdown: function(input) {
      return md.render(input);
    }
  }
};
</script>