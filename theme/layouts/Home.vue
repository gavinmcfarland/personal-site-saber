<template>
	<Wrap>
		<slot />
	</Wrap>
</template>

<script>
import Wrap from '@/theme/components/Wrap.vue'
import page from '@/pages/home/home.yml'
import features from '@/pages/home/features.yml'

export default {
	components: { Wrap },
	data() {
		return {
			page,
			features
		}
	}
}
</script>
