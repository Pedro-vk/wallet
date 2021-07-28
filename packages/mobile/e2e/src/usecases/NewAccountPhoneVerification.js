import { sleep, enterPinUi, waitForElementId } from '../utils/utils'
import { EXAMPLE_NAME, VERIFICATION_PHONE_NUMBER } from '../utils/consts'
import { dismissBanners } from '../utils/banners'
import { receiveSms } from '../utils/twilio'

// TODO: Check status of 'https://staging-komenci.azurefd.net/v1/ready' prior to tests

export default NewAccountPhoneVerification = () => {
  beforeEach(async () => {
    await device.launchApp({
      delete: true,
      permissions: { notifications: 'YES', contacts: 'YES' },
    })
    await dismissBanners()

    // Setup To Verification
    // Proceed Through Education Screens
    for (let i = 0; i < 3; i++) {
      await element(by.id('Education/progressButton')).tap()
    }

    // Create New Account
    await element(by.id('CreateAccountButton')).tap()

    // Accept Terms
    await element(by.id('scrollView')).scrollTo('bottom')
    await expect(element(by.id('AcceptTermsButton'))).toBeVisible()
    await element(by.id('AcceptTermsButton')).tap()

    // Set name
    await element(by.id('NameEntry')).replaceText(EXAMPLE_NAME)
    await element(by.id('NameAndPictureContinueButton')).tap()

    // Set and Verify Pin
    await enterPinUi()
    await enterPinUi()

    // Set phone number
    await expect(element(by.id('PhoneNumberField'))).toBeVisible()
    await element(by.id('PhoneNumberField')).replaceText(VERIFICATION_PHONE_NUMBER)
    // TODO why do we need two taps here?
    await element(by.text('Start')).tap()
    await element(by.text('Start')).tap()
  })

  it('Then should be able to verify phone number', async () => {
    // Write the verification codes.
    const codes = await receiveSms()

    // Wait for code input - 30 seconds max after we've received the last code
    await waitFor(element(by.id('VerificationCode0')))
      .toExist()
      .withTimeout(45000)
    for (let i = 0; i < 3; i++) {
      await element(by.id(`VerificationCode${i}`)).replaceText(codes[i])
    }

    // Skip contacts
    await waitForElementId('ImportContactsSkip')
    await element(by.id('ImportContactsSkip')).tap()

    // Arrived to the Home screen
    await waitFor(element(by.id('SendOrRequestBar')))
      .toBeVisible()
      .withTimeout(10000)

    // Check verify Verify CTA not served
    try {
      await element(by.id('CTA/ScrollContainer')).scroll(500, 'right')
    } catch {}
    await expect(element(by.text('Confirm Now'))).not.toExist()

    // Check Phone Number is Present
    await element(by.id('Hamburger')).tap()
    await expect(element(by.text(VERIFICATION_PHONE_NUMBER))).toBeVisible()
  })

  it('Then should be able to resend last 2 messages', async () => {
    // Request codes and then rerequest 2 codes
    const codes = await receiveSms()
    await waitFor(element(by.id('VerificationCode0')))
      .toExist()
      .withTimeout(45000)
    await element(by.id(`VerificationCode0`)).replaceText(codes[0])
    await sleep(20000)
    await element(by.text('Resend 2 messages')).tap()
    const secondCodeSet = await receiveSms(2)
    for (let i = 0; i < 2; i++) {
      await element(by.id(`VerificationCode${i + 1}`)).replaceText(secondCodeSet[i])
    }

    // Skip contacts
    await waitForElementId('ImportContactsSkip')
    await element(by.id('ImportContactsSkip')).tap()

    // Arrived to the Home screen
    await waitFor(element(by.id('SendOrRequestBar')))
      .toBeVisible()
      .withTimeout(10000)

    // Check verify Verify CTA not served
    try {
      await element(by.id('CTA/ScrollContainer')).scroll(500, 'right')
    } catch {}
    await expect(element(by.text('Confirm Now'))).not.toExist()

    // Check Phone Number is Present
    await element(by.id('Hamburger')).tap()
    await expect(element(by.text(VERIFICATION_PHONE_NUMBER))).toBeVisible()
  })
}
