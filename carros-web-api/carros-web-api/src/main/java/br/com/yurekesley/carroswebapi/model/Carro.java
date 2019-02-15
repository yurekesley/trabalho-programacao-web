package br.com.yurekesley.carroswebapi.model;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;

@Entity
@Table(name = "TBL_CARROS")
public @Data class Carro {

	@Id
	@SequenceGenerator(name = "carros_id_seq", sequenceName = "carros_id_seq", initialValue= 1, allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "carros_id_seq")
	private Long id;
	
	@Column(name="planca", length= 8, nullable= false)
	private String placa;
	
	@Column(name="nome_proprietario", length= 255, nullable= false)
	private String nomeProprietario;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "data_implacameno", nullable = true)
	private Date dataImplacamento;
	
	@Column(name = "valor_ipva")
	private BigDecimal valorIpva;
	
}
