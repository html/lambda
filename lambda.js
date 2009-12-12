/*!
 * Lambda JavaScript function v0.1
 *
 * Copyright (c) 2009 Olexiy Zamkoviy
 * Licensed under the GPL licenses.
 * http://www.gnu.org/licenses/gpl.html
 */

function lambda(){
    if(!lambda.counter) lambda.counter = 0;
    lambda.counter ++;
    var a,b;

    if(arguments[1]){
        a = arguments[0]
        b = arguments[1];
    }else{
        b = arguments[0] || '';
        a = '';
    }

    var funcname = 'temp' + lambda.counter,
        func = funcname + ' = function(' + a +'){ return ' + b + '};' + funcname;

    return eval(func);
}

if(typeof $l == 'undefined'){
    $l = lambda;
}
