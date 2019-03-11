package trabalho.programacao.web.validator;

import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;

import trabalho.programacao.web.model.Cep;

@FacesValidator("validators.CepValidator")
public class CepValidator implements Validator<Cep> {

	@Override
	public void validate(FacesContext context, UIComponent component, Cep cep) throws ValidatorException {
		if (cep != null) {			
			if (!cepSomenteNumeros(cep)) {
				FacesMessage message = new FacesMessage();
				message.setSeverity(FacesMessage.SEVERITY_ERROR);
				message.setSummary("Erro de Validação");
				message.setDetail("CEP Inválido");
			}
		}
	}
	
	
	private boolean cepSomenteNumeros(Cep cep ) {		
		return cep.getRegiao().matches("[0-9]+") && cep.getSufixo().matches("[0-9]+");
	}
}
