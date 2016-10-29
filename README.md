# scripty


## Api routes

| Complete | URL                | Method | Request Body | Result                                                          |
|:--------:|:------------------:|:------:|:------------:|:---------------------------------------------------------------:|
| ✓        | /api/lessons       | GET    | empty        | JSON of all lessons' titles, descriptions and ids.              |
| ✓        | /api/lessons/:id   | GET    | empty        | JSON of the lesson with `id`, as well as its readings/questions.|
|          | /api/lessons       | POST   | JSON         |                                                                 |
|          | /api/lessons       | PUT    | JSON         |                                                                 |
|          | /api/lessons/:id   | DELETE | empty        |                                                                 |
|:--------:|:------------------:|:------:|:------------:|:---------------------------------------------------------------:|
|          | /api/users         | GET    | empty        |                                                                 |
|          | /api/users/:id     | GET    | empty        |                                                                 |
|          | /api/users         | POST   | JSON         |                                                                 |
|          | /api/users/:id     | PUT    | JSON         |                                                                 |
|          | /api/users/:id     | DELETE | empty        |                                                                 |
|:--------:|:------------------:|:------:|:------------:|:---------------------------------------------------------------:|
|          | /api/content/:type | GET    | empty        |                                                                 |
|          | /api/content/:id   | GET    | empty        |                                                                 |
|          | /api/content       | POST   | JSON         |                                                                 |
|          | /api/content/:id   | PUT    | JSON         |                                                                 |
|          | /api/content/:id   | DELETE | empty        |                                                                 |
