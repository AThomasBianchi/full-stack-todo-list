(function() {
  var taskForm = {

    template:
      `
      <div>
        <p><a href="#!/welcome"><i class="material-icons">arrow_back</i>Go back</a></p>
        </a>
        <h1>TODO List</h1>
        <p>A place to store the things you have to do!</p>
        <input placeholder="Filter your to-dos" ng-model="search">
        <ol>
          <li ng-repeat="task in $ctrl.tasks | filter: search" list-hover>
            {{ task.task }}
            <i class="material-icons xout" ng-click="$ctrl.removeTodo(task)" i-hover>clear</i>
          </li>
        </ol>
        <form ng-submit="$ctrl.addTodo($ctrl.todo)">
          <input type="text" placeholder="Add your to-do" ng-model="$ctrl.todo">
          <button>Add</button>
        </form>
      </div>
      `,

    controller: function(TaskService) {
        var vm = this;
        loadItems();

        function loadItems() {
          TaskService.getAllTasks().then(function(items) {
            vm.tasks = items;
          })
        }

        vm.addTodo = function(task) {
          var taskObj = { task: task};
          // console.log(taskObj);
          TaskService.addTask(taskObj).then(loadItems());
          vm.todo="";
        };

        vm.removeTodo = function(task) {
          console.log(task.id);
          TaskService.deleteTask(task.id).then(loadItems());

        }

      }
    };

  angular
    .module("app")
    .component("taskForm", taskForm);
})();
