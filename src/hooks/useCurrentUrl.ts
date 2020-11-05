/** @format */

export default (): string => (typeof window !== 'undefined' ? window?.location?.href : '')
