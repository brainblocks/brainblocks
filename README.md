brainblocks
-----------

https://brainblocks.io

Simple raiblocks checkout

```
<div id="raiblocks-button"></div>

<script src="https://brainblocks.io/static/js/brainblocks.js"></script>

<script>
    // Render the RaiBlocks button

    brainblocks.Button.render({

        // Pass in payment options

        payment: {
            destination: 'xrb_164xaa1o...',
            amount: 1000,
            currency: 'rai'
        },

        // Handle successful payments

        onPayment: function(data) {
            console.log('Payment successful!',
                data.block, data.destination, data.amount);
        }

    }, '#raiblocks-button');
</script>
```

```
> curl https://brainblocks.io/api/block/D49AFC5...

{
    "block": "D49AFC55E64A02EB22C9EFA30972E1CABBF5D0F9801CBF5752291A4FA84AB847",
    "amount": 1000,
    "destination": "xrb_164xaa1ojy6qmq9e8t94mz8izr4mkf1sojb6xrmstru5jsif48g5kegcqg7y"
}
```