import { VatCalculator } from './vatCalculator'
/**
 * UserInterface class.
 */
export class UserInterface {
  /**
   * Constructor of the UserInterface class.
   *
   * @param {object} VatRates - VAT rates.
   */
  constructor (VatRates) {
    this.vatCalculator = new VatCalculator(VatRates)
  }

  /**
   * Add an item to the VAT calculator.
   *
   * @param {string} name - Name of the item.
   * @param {number} price - Price of the item.
   * @param {string} vatRateName - VAT rate name.
   * @param {number} quantity - Quantity of the item.
   * @returns {string} - Success message.
   */
  addItemToCalculator (name, price, vatRateName, quantity = 1) {
    try {
      this.vatCalculator.addItem(name, price, vatRateName, quantity)
      return this.successNotification(name, price, vatRateName, quantity)
    } catch (error) {
      return this.errorMessage(error)
    }
  }

  /**
   * Generate a success message.
   *
   * @param {string} name - Name of the item.
   * @param {number} price - Price of the item.
   * @param {number} vatRateName - VAT rate name.
   * @param {number} quantity - Quantity of the item.
   * @returns {string} - Success message.
   */
  successNotification (name, price, vatRateName, quantity) {
    return `Added ${quantity} units of ${name} at price ${price} each with VAT rate ${vatRateName}`
  }

  /**
   * Generate an error message.
   *
   * @param {Error} error - Error object.
   * @returns {string} - Error message.
   */
  errorMessage (error) {
    return error.message
  }
}
