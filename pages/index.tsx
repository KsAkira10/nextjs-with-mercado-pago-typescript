import Head from 'next/head';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import $ from 'jquery';

type ShoppingCartState = {
  quantity: number;
  description: string;
  price: number;
  preferenceId?: string;
};

const createCheckoutButton = (preference?: string) => {
  const script = document.createElement('script');
  script.src =
    'https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js';
  script.type = 'text/javascript';
  script.dataset.preferenceId = preference;
  const btnCheckout = document.getElementById('button-checkout');
  if (btnCheckout) {
    btnCheckout.innerHTML = '';
    btnCheckout.appendChild(script);
  }
};

const CheckoutButton: React.FC<{ preference?: string }> = ({ preference }) => {
  useEffect(() => {
    if (preference) {
      createCheckoutButton(preference);
    }

    return () => {
      const btnCheckout = document.getElementById('button-checkout');
      btnCheckout?.firstChild &&
        btnCheckout?.removeChild(btnCheckout?.firstChild);
    };
  }, [preference]);
  return <div id='button-checkout' />;
};

const ShoppingCart = () => {
  const [state, setState] = useState<ShoppingCartState>({
    quantity: 1,
    description: 'Some book',
    price: 10,
  });
  const { amount, summaryPrice, summaryQuantity, summaryTotal } =
    useMemo(() => {
      const amount = (state?.price || 10) * (state?.quantity || 1);
      return {
        amount,
        summaryPrice: `$ ${state?.price || 10}`,
        summaryQuantity: state?.quantity || 1,
        summaryTotal: `$ ${amount}`,
      };
    }, [state]);
  const checkoutBtnRef = useRef<HTMLButtonElement>(null);

  const handleQuantityOnChange = useCallback(
    (event) =>
      setState((state) => ({
        ...state,
        quantity: parseInt(event?.target?.value || '0', 10),
      })),
    []
  );
  const handleGoBack = () => {
    $('.container_payment').fadeOut(500);
    setTimeout(() => {
      $('.shopping-cart').show(500).fadeIn();
    }, 500);
    checkoutBtnRef.current?.toggleAttribute('disabled', false);
  };
  const handleOnCheckout = async () => {
    checkoutBtnRef.current?.toggleAttribute('disabled', true);
    try {
      const result = await fetch('/api/preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      });
      const response = await result.json();
      setState((state) => ({ ...state, preferenceId: response.id }));
      $('.shopping-cart').fadeOut(500);
      setTimeout(() => {
        $('.container_payment').show(500).fadeIn();
      }, 500);
    } catch (error) {
      alert(JSON.stringify(error || 'Unexpected error'));
      checkoutBtnRef.current?.toggleAttribute('disabled', false);
    }
  };
  return (
    <>
      <Head>
        <title>Template Code - Checkout Pro</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <section className='shopping-cart dark'>
          <div className='container' id='container'>
            <div className='block-heading'>
              <h2>Shopping Cart</h2>
              <p>
                This is an example of Checkout Pro integration of Mercado Pago
              </p>
            </div>
            <div className='content'>
              <div className='row'>
                <div className='col-md-12 col-lg-8'>
                  <div className='items'>
                    <div className='product'>
                      <div className='info'>
                        <div className='product-details'>
                          <div className='row justify-content-md-center'>
                            <div className='col-md-3'>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                className='img-fluid mx-auto d-block image'
                                src='/images/product.png'
                                alt='products'
                              />
                            </div>
                            <div className='col-md-4 product-detail'>
                              <h5>Product</h5>
                              <div className='product-info'>
                                <p>
                                  <b>Description: </b>
                                  <span id='product-description'>
                                    {state.description}
                                  </span>
                                  <br />
                                  <b>Author: </b>Dale Carnegie
                                  <br />
                                  <b>Number of pages: </b>336
                                  <br />
                                  <b>Price:</b> ${' '}
                                  <span id='unit-price'>{state.price}</span>
                                </p>
                              </div>
                            </div>
                            <div className='col-md-3 product-detail'>
                              <label htmlFor='quantity'>
                                <h5>Quantity</h5>
                              </label>
                              <input
                                type='number'
                                id='quantity'
                                value={state.quantity}
                                className='form-control'
                                onChange={handleQuantityOnChange}
                                min={0}
                                max={10}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 col-lg-4'>
                  <div className='summary'>
                    <h3>Cart</h3>
                    <div className='summary-item'>
                      <span className='text'>Subtotal</span>
                      <span className='price' id='cart-total'>
                        $ {amount}
                      </span>
                    </div>
                    <button
                      className='btn btn-primary btn-lg btn-block'
                      id='checkout-btn'
                      onClick={handleOnCheckout}
                      ref={checkoutBtnRef}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='payment-form dark'>
          <div className='container_payment'>
            <div className='block-heading'>
              <h2>Checkout Payment</h2>
              <p>This is an example of a Mercado Pago integration</p>
            </div>
            <div className='form-payment'>
              <div className='products'>
                <h2 className='title'>Summary</h2>
                <div className='item'>
                  <span className='price' id='summary-price'>
                    {summaryPrice}
                  </span>
                  <p className='item-name'>
                    Book x <span id='summary-quantity'>{summaryQuantity}</span>
                  </p>
                </div>
                <div className='total'>
                  Total
                  <span className='price' id='summary-total'>
                    {summaryTotal}
                  </span>
                </div>
              </div>
              <div className='payment-details'>
                <div className='form-group col-sm-12'>
                  <br />
                  <CheckoutButton preference={state?.preferenceId} />
                  <br />
                  <a id='go-back' onClick={handleGoBack}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='12'
                      height='12'
                      viewBox='0 0 10 10'
                      className='chevron-left'
                    >
                      <path
                        fill='#009EE3'
                        fillRule='nonzero'
                        id='chevron_left'
                        d='M7.05 1.4L6.2.552 1.756 4.997l4.449 4.448.849-.848-3.6-3.6z'
                      />
                    </svg>
                    Go back to Shopping Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='footer_logo'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            id='horizontal_logo'
            src='/images/horizontal_logo.png'
            alt='Mercado Pago'
          />
        </div>
        <div className='footer_text'>
          <p>Developers Site:</p>
          <p>
            <a href='https://developers.mercadopago.com'>
              https://developers.mercadopago.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default ShoppingCart;
