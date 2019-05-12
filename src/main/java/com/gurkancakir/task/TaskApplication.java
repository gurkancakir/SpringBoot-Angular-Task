package com.gurkancakir.task;

import com.gurkancakir.task.domain.Task;
import com.gurkancakir.task.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TaskApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskApplication.class, args);
    }

    @Bean
    CommandLineRunner runner (TaskService taskService) {
        return args -> {
            taskService.save(new Task(1L, "Task 1", LocalDate.now(), true));
            taskService.save(new Task(2L, "Task 2", LocalDate.now().plus(5, ChronoUnit.DAYS), true));
            taskService.save(new Task(3L, "Task 3", LocalDate.now().plus(10, ChronoUnit.DAYS), true));
            taskService.save(new Task(4L, "Task 4", LocalDate.now().plus(15, ChronoUnit.DAYS), true));
            taskService.save(new Task(5L, "Task 5", LocalDate.now().plus(10, ChronoUnit.DAYS), false));
            taskService.save(new Task(6L, "Task 6", LocalDate.now().plus(20, ChronoUnit.DAYS), false));
        };
    }

}
