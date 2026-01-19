const { $, expect } = require('@wdio/globals');

describe('SauceLabs MyDemoApp - Purchase Flow', () => {


    it('should navigate to Login page from menu', async () => {

        const menuButton = await $('~View menu');
        await menuButton.waitForDisplayed({ timeout: 2000 });
        await menuButton.click();
        
        const loginMenu = await $('~Login Menu Item');
        await loginMenu.waitForDisplayed({ timeout: 2000 });
        await loginMenu.click();
        
        const usernameField = await $('id=com.saucelabs.mydemoapp.android:id/nameET');
        await usernameField.setValue('bob@example.com');

        const passwordField = await $('id=com.saucelabs.mydemoapp.android:id/passwordET');
        await passwordField.setValue('10203040');

        const loginBtn = await $('id=com.saucelabs.mydemoapp.android:id/loginBtn');
        await loginBtn.click();

        const title = await $('~title');
        await title.waitForDisplayed({ timeout: 5000 });
        await expect(title).toHaveText('Products');
    });


    it('Add product to cart', async () => {

        const firstProduct = await $(
            'android=new UiSelector().resourceId("com.saucelabs.mydemoapp.android:id/productIV").instance(2)'
        );
        await firstProduct.waitForDisplayed();
        await firstProduct.click();

        const addToCartBtn = await $('~Tap to add product to cart');
        await addToCartBtn.click();

        const cartIcon = await $('~Displays number of items in your cart');
        await cartIcon.click();

        const processCheckout = await $('~Confirms products for checkout');
        await processCheckout.click();
    });

    it('Complete the checkout process', async () => {

        const fullName = await $('id=com.saucelabs.mydemoapp.android:id/fullNameET');
        await fullName.setValue('Fulan');

        const addressLine1 = await $('id=com.saucelabs.mydemoapp.android:id/address1ET');
        await addressLine1.setValue('Jln 123');

        const addressLine2 = await $('id=com.saucelabs.mydemoapp.android:id/address2ET');
        await addressLine2.setValue('Jln 456');

        const city = await $('id=com.saucelabs.mydemoapp.android:id/cityET');
        await city.setValue('Bandung');

        const state = await $('id=com.saucelabs.mydemoapp.android:id/stateET');
        await state.setValue('Jawa Barat');

        const zipCode = await $('id=com.saucelabs.mydemoapp.android:id/zipET');
        await zipCode.setValue('19046');

        const country = await $('id=com.saucelabs.mydemoapp.android:id/countryET');
        await country.setValue('Indonesia');

        const toPayment = await $('~Saves user info for checkout');
        await toPayment.click();


        // Payment form
        const fullNameOrder = await $('id=com.saucelabs.mydemoapp.android:id/nameET');
        await fullNameOrder.setValue('Fulan');

        const cardNumber = await $('id=com.saucelabs.mydemoapp.android:id/cardNumberET');
        await cardNumber.setValue('1234432112344321');

        const expireDate = await $('id=com.saucelabs.mydemoapp.android:id/expirationDateET');
        await expireDate.setValue('0729');

        const securityCode = await $('id=com.saucelabs.mydemoapp.android:id/securityCodeET');
        await securityCode.setValue('089');

        const reviewOrder = await $('~Saves payment info and launches screen to review checkout data');
        await reviewOrder.click();


        // Finalize order
        const placeOrder = await $('~Completes the process of checkout');
        await placeOrder.click();

        const checkoutComplete = await $('id=com.saucelabs.mydemoapp.android:id/completeTV');
        await checkoutComplete.waitForDisplayed({ timeout: 5000 });
        await expect(checkoutComplete).toHaveText('Checkout Complete');

        // Continue shopping (kembali ke catalog)
        const continueShop = await $('~Tap to open catalog');
        await continueShop.click();
    });

});
