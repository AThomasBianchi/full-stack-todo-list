(function() {
  var taskWelcome = {
    template:`
      <div id="welcome">
        <h1>Welcome to TODO</h1>
        <p>Do more. Increase your productivity with a simple to-do app.</p>
        <p id="enter">
          <a href="#!/form">Enter<i class="material-icons">arrow_forward</i></a>
        </p>
      </div>
      `
  };

  angular
    .module("app")
    .component("taskWelcome", taskWelcome);

}());
