package com.gurkancakir.task.service;

import com.gurkancakir.task.domain.Task;

public interface TaskService {

    Iterable<Task> list();
    Task save(Task task);
}
