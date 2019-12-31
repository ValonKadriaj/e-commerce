import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_QDqexZDtM5R7yUeVgSa3BPbH00Zi8UyfoL';
  const onToken = () => {
    alert('Payment Successeful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="e-commerce"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your Total $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
