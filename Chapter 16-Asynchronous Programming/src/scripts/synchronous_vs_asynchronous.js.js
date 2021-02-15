/**
 * ! Synchronous Programming: synchronous basically means that we can execute one thing at a time. in this system, one by one line execute.... if any line need so much time the execution process will waiting
 * ? Synchronous Hierarchy:
 * *                     1s
 * *                   ------> 0.9s
 * *                          -----> 0.3s
 * *                                ---->      5s
 * *                                     ------------------->     3s
 * *                                                         ------------>
 */

/**
 * ! Asynchronous Programming: asynchronous means that we can execute multiple things at a time and we don't have to finish executing the current thing in order to move on to next one.... In this system, before one line to finish executing another line start for executing....
 * ? Asynchronous Hierarchy:
 * *                     1.5s
 * *                   --------->
 * *                         2s
 * *                   --------------------->
 * *                    0.3s
 * *                   -----> 
 * *                             5s
 * *                   ----------------------------------->
 * *                      1s
 * *                   -------->
 */