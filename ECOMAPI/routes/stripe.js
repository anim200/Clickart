const router=require("express").Router();
const Stripe = require('stripe');
const stripe = Stripe('sk_test_51P6IYO08tWv2zF30ljg3r7w1LK2Uzu07mai3Nlxd7DeNtsocVhTCV3x2l1rs32uj2sueQ7nCXmOplYRfapogzyNf0098yEgsAV');
router.post("/payment", async (req, res) => {
    try {
        const stripeRes = await stripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        });
        res.status(200).json(stripeRes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports=router;