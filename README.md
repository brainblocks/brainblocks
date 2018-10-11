![logo](./img/brainblocks_logotype.png)


```
<div id="nano-button"></div>

<script src="https://brainblocks.io/brainblocks.js"></script>

<script>
    // Render the Nano button

    brainblocks.Button.render({

        // Pass in payment options

        payment: {
            destination: 'nano_164xaa1ojy6qmq9e8t94mz8izr4mkf1sojb6xrmstru5jsif48g5kegcqg7y',
            currency:    'rai',
            amount:      1000
        },

        // Handle successful payments

        onPayment: function(data) {
            console.log('Payment successful!', data.token);
        }

    }, '#nano-button');
</script>
```

```
> curl https://brainblocks.io/api/session/<token>/verify

{
    "token": "ZXlKaGJHY...",
    "destination": "nano_164xa...",
    "currency": "rai",
    "amount": "1000",
    "amount_rai": 1000,
    "received_rai": 1000,
    "fulfilled": true,
    "send_block": "0B36663...",
    "sender": "nano_1jnat..."
}
```

## Installation

### Node module

```bash
# npm
npm install --save brainblocks

# yarn
yarn add brainblocks
```

```js
import * as brainblocks from 'brainblocks'
```

### Browser

```html
<!-- From Brainblocks -->
<script src="https://brainblocks.io/brainblocks.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/brainblocks"></script>

<!-- Local file -->
<script src="brainblocks/dist/brainblocks.js"></script>
```
