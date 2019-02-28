package trabalho.programacao.web.model;
public class Endereco {
	
	public Endereco(String cep) {
		this.cep = cep;
	}
	
	private String cep;

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

}