package trabalho.programacao.web.managebean;

import trabalho.programacao.web.model.Endereco;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.RequestScoped;

public class EnderecoBean {

	private Endereco endereco = new Endereco("60750000");

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

}
