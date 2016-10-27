# scripty


## Api routes

| URL              | HTTP Method | Request Body | Result                                                          |
|:----------------:|:-----------:|:------------:|:---------------------------------------------------------------:|
| /api/lessons     | GET         | empty        | JSON of all lessons' titles, descriptions and ids.
| /api/lessons/:id | GET         | empty        | JSON of the lesson with `id`, as well as its readings/questions.