export function cn(...values: Array<string | null | undefined | false>) {
  return values.filter(Boolean).join(' ')
}


export function formatCurrency(price?: number | null, style?: string | null, showPrice?: boolean, currency?: string, language?: string, bypassShowPrice?: boolean) {
  if ((!showPrice) && !bypassShowPrice) return "";
  if (!price) {
      return "N/A";
  }
  const roundedNumber = Math.round(price * 100) / 100;
  const formatStyle = style === null ? "decimal" : (style != undefined ? style : 'currency');
  const options: Intl.NumberFormatOptions = {
      style: formatStyle as ('decimal' | 'currency' | undefined),
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
  };

  // Add currency code only when style is 'currency'
  if (formatStyle === 'currency') {
      options.currency = currency || 'GBP';
  }
  const formattedNumber = roundedNumber.toLocaleString(language, options);

  return formattedNumber;
}

export const toLowerKebabCase = (str: string) => {
  const turkishMap: { [key: string]: string } = {
      "ç": "c",
      "ğ": "g",
      "ı": "i",
      "ö": "o",
      "ş": "s",
      "ü": "u",
      "Ç": "c",
      "Ğ": "g",
      "İ": "i",
      "Ö": "o",
      "Ş": "s",
      "Ü": "u"
  };
  return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[çğışöüÇĞİŞÖÜ]/g, char => turkishMap[char] ?? char)
      .toLowerCase()
      .replace(/ /g, '-');
}

export const generatePlotUrl = async (plotId: string,clientName?: string, projectName?: string, country?: string, city?: string, district?: string, plotName?: string, bedroomCount?: number | string) => {
  const names = [clientName, projectName, country, city, district];
  const language = document.documentElement.lang;
  let prefix = language === 'en' ? '/' : `/${language}/`;
  names.forEach((element, index) => {
      if (element) {

          prefix += `${toLowerKebabCase(element)}${(index + 1 != names.length ? "-" : "")}`

      }
  });
  return `${prefix}${bedroomCount ? "-" + bedroomCount + `-bedrooms` : ""}${plotName ? "-" + toLowerKebabCase(plotName) : ""}/${plotId}`;
}