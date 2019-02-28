package trabalho.programacao.web.converters;

import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.ConverterException;
import javax.faces.convert.FacesConverter;

@FacesConverter("cep")
public class CepConverter implements Converter  {

	@Override
	public Object getAsObject(FacesContext context, UIComponent component, String value) throws ConverterException  {
		return null;
	}

	@Override
	public String getAsString(FacesContext context, UIComponent component, Object value) throws ConverterException  {
		return "XXXXXXXXXXX";
	}

}
