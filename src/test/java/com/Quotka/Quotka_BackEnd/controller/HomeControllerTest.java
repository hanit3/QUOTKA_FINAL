package com.Quotka.Quotka_BackEnd.controller;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

@ExtendWith(SpringExtension.class)
@WebMvcTest(controllers = HomeController.class)
public class HomeControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void home_Test() throws Exception {
        String home = "This is Home Page!";

        mvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(content().string(home));
    }

    @Test
    public void homeDto_Test() throws Exception {
        String name = "Sohyun";
        String nickname = "Sarah";

        mvc.perform(
                get("/home/dto")
                        .param("name", name)
                        .param("nickname", nickname))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is(name)))
                .andExpect(jsonPath("$.nickname", is(nickname)));
    }
}
