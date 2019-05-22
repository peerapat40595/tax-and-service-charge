<script>
	let value

	function toNumberFormat(number) {
        return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'SGD' }).format(number)
	}

	$: valueWithTax = value * 1.07
	$: valueWithTaxAndService = valueWithTax * 1.10
	$: valueWithService = value * 1.10
</script>

<input type="number" bind:value="{value}">
<h2>With 7% Tax:</h2>
<h3>{toNumberFormat(valueWithTax)}</h3>
<h2>With 7% Tax And 10% Service:</h2>
<h3>{toNumberFormat(valueWithTaxAndService)}</h3>
<h2>With 10% Service:</h2>
<h3>{toNumberFormat(valueWithService)}</h3>
