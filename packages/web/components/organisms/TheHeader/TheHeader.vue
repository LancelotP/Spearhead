<i18n>
{
	"en-US": {
		"apple": "no apples | one apple | {count} apples",
		"logout": "Sign Out"
	},
	"fr-FR": {
		"apple": "aucune pomme | une pomme | {count} pommes",
		"logout": "Déconnexion"
	}
}
</i18n>

<template>
  <header>
		<p>
			{{ JSON.stringify({
				loading: $apollo.loading,
				viewer
			}) }}
		</p>
		<p>
			{{ $t('logout') }}
		</p>
		<div>
			<p>{{ $tc('apple', 0) }}</p>
			<p>{{ $tc('apple', 1) }}</p>
			<p>{{ $tc('apple', 10, { count: 10 }) }}</p>
		</div>
		<div>
			{{ $moment().startOf('hour').fromNow() }}
		</div>
		<nuxt-link
			v-for="locale in [{ name: 'Français', code: 'fr-FR' }, { name: 'English', code: 'en-US' }]"
			:key="locale.code"
			:to="switchLocalePath(locale.code)"
		>
			{{ locale.name }}
		</nuxt-link>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import {
	TheHeaderQuery,
	TheHeaderQueryVariables,
	TheHeaderMutation,
	TheHeaderMutationVariables,
	TheHeaderFragment
} from './TheHeader.generated';

@Component<TheHeader>({
	apollo: {
		viewer: {
			query: TheHeaderQuery,
		}
	}
})
export default class TheHeader extends Vue {
	private viewer!: TheHeaderQuery['viewer'];
}
</script>

<style lang="postcss">
.o-theHeader {}
</style>