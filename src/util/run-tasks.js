export default function(tasks, cb){

    const numTasks = tasks.length;
    let numTasksReady = 0;

    function runTasks(tasks, cb) {
        for (var i = 0; i < tasks.length; i++) {
            tasks[i](cb);
        }
    }

    function onTaskReady() {
        numTasksReady++;
        if (numTasksReady === numTasks) {
            cb();
        }
    }

    runTasks(tasks, onTaskReady);
}
