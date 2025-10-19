// 数字加入逗号换算
export function formatNumberWithCommas(num: number | string): string {
  const numStr = num.toString()
  const [integerPart, decimalPart] = numStr.split('.')
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger
}
