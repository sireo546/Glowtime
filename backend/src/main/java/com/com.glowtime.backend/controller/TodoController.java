private final TodoService todoService;

   public TodoController(TodoService todoService) {
       this.todoService = todoService;
   }

   @RestController
   @RequestMapping("/api/todos")
   public class TodoController {
       // ...

       @GetMapping
       public List<Todo> getAllTodos() {
           return todoService.getAllTodos();
       }

       @PostMapping
       public Todo createTodo(@RequestBody Todo todo) {
           return todoService.createTodo(todo);
       }

       @PutMapping("/{id}/done")
       public Todo toggleTodoCompleted(@PathVariable Long id) {
           return todoService.toggleComplete(id);
       }

       @DeleteMapping("/{id}")
       public void deleteTodo(@PathVariable Long id) {
           todoService.deleteTodo(id);
       }
   }