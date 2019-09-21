<template>
	<Wrap>
		<Section class="bt">
			<h2 class="md:w-200 f-caps f-0">Profile</h2>
			<Markdown
				class="content"
			>An astute and versatile designer with a proven track record of creating successful services and products. I have a strong commitment to delivering intuitive designs for mobile applications and websites, using the most appropriate methods to validate choices where necessary.</Markdown>
		</Section>

		<Section class="bt">
			<h2 class="md:w-200 f-caps f-0">Core Skills</h2>
			<Markdown class="content">
				- Visual design
				- Figma, Sketch, Illustrator, Photoshop
				- Interaction design
				- Prototyping
				- Design systems
				- Facilitating user research
				- Workshops
				- Agile best practices
				- Coding (HTML, CSS, JS, Node)
				- Frontend frameworks (Vue, Svelte)
				- Responsive design
				- Invision, Marvel, Axure
			</Markdown>
		</Section>

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
import Markdown from '@/theme/components/Markdown.vue'

import page from '@/pages/home/home.yml'
import sections from '@/pages/cv/sections.yml'
import MarkdownIt from 'markdown-it'
import mdAttrs from 'markdown-it-attrs'
import v from 'voca'
var md = new MarkdownIt({ html: true })
md.use(mdAttrs)

export default {
	components: { Wrap, Section, Markdown },
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
