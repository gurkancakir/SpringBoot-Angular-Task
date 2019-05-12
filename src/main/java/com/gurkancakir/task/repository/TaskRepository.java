package com.gurkancakir.task.repository;

import com.gurkancakir.task.domain.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long> {
}
