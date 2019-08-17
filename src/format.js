var format = require('date-fns/format')

var locales = {
  en: require('date-fns/locale/en'),
  ru: require('date-fns/locale/ru')
}

module.exports = function (date, formatStr) {
  return format(date, formatStr, {
    locale: locales[window.__localeId__]
  })
}