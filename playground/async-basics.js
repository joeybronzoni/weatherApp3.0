console.log('Starting App');

  setTimeout(() => {
	console.log('Inside of setTimeout Func');
  }, 2000);

  setTimeout(() => {
	console.log('Inside the 2nd sto func');
  }, 0);
console.log('Finishing Up');

/**
 *
 Call Stack - somple data structure that keeps track of program execution inside of v8
    *CS can do 2 things:
    - add something on top of it
	- remove the top item
    - *note: when you call a function it gets added(registered to) on top of the CALL STACK,
	but when you return from a function it gets removed  the CALL STACK

 Node APIs
    *after the functions are called to the CALL STACk they go to the Node APIs to be handled

 Callback Queue
    - the CbQ is where the functions wait for their turn to be grabbed by the event loop

 Event Loop
    - Constantly checks the CALL STACK and if the CS is empty, the event loop hands it a
function from the Cb
 */
