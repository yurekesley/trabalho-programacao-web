package br.com.yurekesley.carroswebapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.yurekesley.carroswebapi.model.Carro;

@RestController
@RequestMapping("/carros")
public class CarroController extends GenericController<Carro, Long>{

}
