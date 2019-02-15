package br.com.yurekesley.carroswebapi;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest("application.test.properties")
//@TestPropertySource(locations="classpath:application.test.properties")
public class CarrosWebApiApplicationTests {

	@Test
	public void contextLoads() {
	}

}

