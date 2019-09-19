<template>
	<Wrap>
		<Section
			v-for="(section, index) in sections"
			:key="index"
			class="bt"
			:class="kebabcase(section.heading)"
		>
			<h2 class="md:w-200 f-caps f-0">{{ section.heading }}</h2>
			<div class="content" v-html="markdown(section.content)"></div>
		</Section>
		<slot />
	</Wrap>
</template>

<script>
import Wrap from '@/theme/components/Wrap.vue'
import Section from '@/theme/components/Section.vue'
import page from '@/pages/home/home.yml'
import sections from '@/pages/cv/sections.yml'
import MarkdownIt from 'markdown-it'
import mdAttrs from 'markdown-it-attrs'
import v from 'voca'
var md = new MarkdownIt({ html: true })
md.use(mdAttrs)

export default {
	components: { Wrap, Section },
	data() {
		return {
			page,
			sections
		}
	},
	methods: {
		markdown: function(input) {
			return md.render(input)
		},
		kebabcase(input) {
			return v.kebabCase(input)
		},
		hasColumns(input) {
			if (this.kebabcase(input.heading) === 'highlights') {
				return 'md:cols-2'
			}
		}
	}
}
</script>
