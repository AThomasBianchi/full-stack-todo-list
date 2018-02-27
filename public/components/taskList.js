// this isn't necessary anymore!

(function() {
  var taskList = {
    template:`
      <input placeholder="Filter your to-dos" ng-model="search">
      <ol>
        <li ng-repeat="task in $ctrl.tasks | filter: search" list-hover>
          {{ task.task }}
          <i class="material-icons xout" ng-click="$ctrl.removeTodo($index)" i-hover>clear</i>
        </li>
      </ol>
    `,

    controller: function(TaskService) {
      var vm = this;
      vm.taskItem = {};

      loadItems();

      // vm.tasks = TaskService.setData();
      // vm.removeTodo = function(index) {
      //   vm.tasks.splice(index, 1);
      // };

      function loadItems() {
        TaskService.getAllTasks().then(function(items) {
          vm.tasks = items;
        })
      }
    }

  };

  angular
    .module("app")
    .component("taskList", taskList);

})();
