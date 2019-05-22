<script>
	let value

	function toNumber(number) {
        return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'SGD' }).format(number)
	}

	$: valueWithTax = toNumber(value * 1.07)
	$: valueWithTaxAndService = toNumber(value * 1.07 * 1.10)
</script>

<input type="number" bind:value="{value}">
<h2>With 7% Tax:</h2>
<h3>{valueWithTax}</h3>
<h2>With 7% Tax And 10% Service:</h2>
<h3>{valueWithTaxAndService}</h3>
