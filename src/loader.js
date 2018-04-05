import 'style/all.scss';
import runTasks from 'util/run-tasks';
const _options = {};
let _main;

 runTasks([
    loadApp
], function() {

    runApp(_options);
});


function loadApp(cb){

    import('main').then(function(main) {
        _main = main;
        cb();
    });
}

function runApp(){
    _main.start(_options);
}
