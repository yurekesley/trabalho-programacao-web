package trabalho.programacao.web.model;

import java.io.Serializable;
import java.util.Date;

public class Usuario extends BaseModel implements Serializable {

	public Usuario (String nome, String email) {
		this.nome = nome;
		this.email = email;
	}
	
	
	/**
	 * serialVersionUID.
	 */
	private static final long serialVersionUID = -3064306490724801147L;

	/**
	 * Nome reduzido do usuario.
	 */
	private String nomeReduzido;

	private String nome;
	
	
	/**
	 * Nome completo do usuario.
	 */
	private String nomeCompleto;

	/**
	 * Email do usuario.
	 */
	private String email;

	/**
	 * Senha
	 */
	private String senha;

	/**
	 * CPF do usuario.
	 */
	private String cpf;

	/**
	 * Data de nascimento.
	 */
	private Date dataNascimento;

	public String getNomeReduzido() {
		return nomeReduzido;
	}

	public void setNomeReduzido(String nomeReduzido) {
		this.nomeReduzido = nomeReduzido;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public Usuario() {
		super();
	}

	public Usuario(Long id) {
		this();
		setId(id);
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
