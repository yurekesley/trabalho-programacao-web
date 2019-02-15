package br.com.yurekesley.carroswebapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.yurekesley.carroswebapi.model.Carro;

@Repository
@Transactional(readOnly = true)
public interface ICarro extends JpaRepository<Carro, Long>{

}
