package com.jobapplication.mega;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan
@SpringBootApplication
public class MegaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MegaApplication.class, args);
	}

}
