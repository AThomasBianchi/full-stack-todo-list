(function() {

  function TaskService($http) {

    // var todoList = [];
    // delete this array
    return {
      // getaData: getData,
      // setData: setData
      getAllTasks: getAllTasks,
      addTask: addTask,
      deleteTask: deleteTask
    }

    // function getData(task) {
    //   todoList.push({item: task});
    // }
    // get to server
    // remember promises and .thn

    // function setData() {
    //   return todoList;
    // };
    function getAllTasks() {
      // GET /api/items
      return $http({
        method: "GET",
        url: "/tasks"
      }).then(function(response) {
        console.log(response.data);
        return response.data;
      });
    };

    function addTask(task) {
      // POST /api/items
      // body -> { product: "...", price: ... }
      console.log(task);
      return $http({
        method: "POST",
        url: "/tasks",
        data: task
      });
    };

    function deleteTask(itemId) {
      // DELETE /api/items/{ID}
      return $http({
        method: "DELETE",
        url: "/tasks/" + itemId
      });
    };
    
  }

  angular
    .module("app")
    .factory("TaskService", TaskService);

})();
