export default ({ locale, currency }) => {
  const str = new Intl.NumberFormat(locale, { style: 'currency', currency }).format(1234)
  const decimalLength = (str.match(/0/g) || []).length
  const decimalSymbol = decimalLength > 0 ? str.substr(str.indexOf('4') + 1, 1) : null
  const prefix = str.substring(0, str.indexOf('1'))
  const suffix = str.substring(str.lastIndexOf(decimalLength > 0 ? '0' : '4') + 1)
  const thousandsSeparatorSymbol = str.substr(str.indexOf('1') + 1, 1)

  return {
    prefix,
    suffix,
    thousandsSeparatorSymbol,
    decimalSymbol,
    decimalLength
  }
}
