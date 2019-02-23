import { AbstractControl, FormGroup } from '@angular/forms';

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


export function marcarComoTocado( formulario: FormGroup ) {
  for (const key in  formulario.controls) {
    if (formulario.controls.hasOwnProperty(key)) {
      const control: any = formulario.controls[key];
      if (control.controls) {
        this.marcarComoTocado(control);
      } else {
        control.markAsTouched();
      }
    }
  }
}

export function error(control: AbstractControl): string {
  if (control.hasError('required')) {
    return 'Campo obrigatório.';
  }
  if (control.hasError('pattern')) {
    return 'Informe um valor válido';
  }
}

export function marcarComoNaoTocado( formulario: FormGroup) {
  for (const key in  formulario.controls) {
    if (formulario.controls.hasOwnProperty(key)) {
      const control: any = formulario.controls[key];
      if (control.controls) {
        this.marcarComoNaoTocado(control);
      } else {
        control.markAsUntouched();
      }
    }
  }
}


export function limparControle (controle: AbstractControl) {
  controle.reset();
}


export function resetar( formulario: FormGroup ) {
  for (const key in  formulario.controls) {
    if (formulario.controls.hasOwnProperty(key)) {
      const control: any = formulario.controls[key];
      if (control.controls) {
        this.resetar(control);
      } else {
        if (control.enabled) {
          control.setValue(undefined);
          control.markAsUntouched();
        }
      }
    }
  }
}
