export function buscarValor(item: any, atributo: any, retornoDefault = null) {
  if (item && atributo) {
    if (typeof atributo === 'number' || atributo.indexOf('.') === -1) {
      return item[atributo] ? item[atributo] : retornoDefault;
    } else {
      const fields: string[] = atributo.split('.');
      let value = item;
      for (let i = 0, len = fields.length; i < len; ++i) {
        if (value == null) {
          return retornoDefault;
        }
        value = value[fields[i]];
      }
      return value ? value : retornoDefault;
    }
  } else {
    return retornoDefault;
  }
}
