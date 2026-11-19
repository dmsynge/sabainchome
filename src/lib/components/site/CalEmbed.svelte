<script lang="ts">
	import { mountCalInline } from '$lib/cal';
</script>

<div class="min-h-[640px] w-full" {@attach (node) => mountCalInline(node)}></div>
