/*!
 * Lambda JavaScript function v0.1
 *
 * Copyright (c) 2009 Olexiy Zamkoviy
 * Licensed under the GPL licenses.
 * http://www.gnu.org/licenses/gpl.html
 */

function lambda(args){
    if(!lambda.counter) lambda.counter = 0;
    lambda.counter ++;

    if(arguments[1]) r = arguments[1];
    else{
        r = args;args = '';
    }

    var funcname = 'temp' + lambda.counter,
        func = funcname + ' = function(' + args +'){ return ' + r + '};' + funcname;

    return eval(func);
}

if(typeof $l == 'undefined'){
    $l = lambda;
}
