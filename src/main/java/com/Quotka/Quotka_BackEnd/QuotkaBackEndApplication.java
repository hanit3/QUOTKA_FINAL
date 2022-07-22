package com.Quotka.Quotka_BackEnd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class QuotkaBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuotkaBackEndApplication.class, args);
	}

}
