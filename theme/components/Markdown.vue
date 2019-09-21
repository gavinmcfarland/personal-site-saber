<template>
	<div></div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import mdAttrs from 'markdown-it-attrs'
var md = new MarkdownIt({ html: true })
md.use(mdAttrs)

export default {
	mounted() {
		var input = this.$slots.default[0].text
		var indentMatches = /[\t\s]*\n([\t\s]+)/.exec(input)
		if (indentMatches) {
			var indent = indentMatches[1]
			input = input.replace(new RegExp('^' + indent, 'mg'), '')
		}
		this.$el.innerHTML = md.render(input)
	}
}
</script>
