![logo](./img/brainblocks-logo.png)

https://brainblocks.io

Simple raiblocks checkout

```
<div id="raiblocks-button"></div>

<script src="https://brainblocks.io/brainblocks.js"></script>

<script>
    // Render the RaiBlocks button

    brainblocks.Button.render({

        // Pass in payment options

        payment: {
            destination: 'xrb_164xaa1ojy6qmq9e8t94mz8izr4mkf1sojb6xrmstru5jsif48g5kegcqg7y',
            currency:    'rai',
            amount:      1000
        },

        // Handle successful payments

        onPayment: function(data) {
            console.log('Payment successful!', data.token);
        }

    }, '#raiblocks-button');
</script>
```

```
> curl https://brainblocks.io/api/session/<token>/verify

{
    "token":       "ZXlKaGJHY...",
    "destination": "xrb_164xa...",
    "received":    1000
}
```
