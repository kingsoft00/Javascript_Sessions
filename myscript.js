/**
 * 
 */

//console.log("Hello Script")
//alert('i am loading it....');
if (confirm("Do you want to proceed?") == true){  //comfirm box,  ok and cancel
    //alert('you are selected the next round')
    document.getElementById('votestatus').innerHTML = 'validdddd';
}
else {
    //alert('you are canceled')
    document.getElementById('votestatus').innerHTML = 'invaliddddd';
}
/** 
var age = prompt('Please enter your age');
if (age > 18) {
    //alert('you are valid user') if we dont want to see alert and see a below line
    //document.write('you are valid to.....')
    document.getElementById('votestatus').innerHTML = 'validddddddd'; //to transfer message to HTML file at id = votestatus
} else {
    //alert('your condition is not enough')
    //document.write('you are not valid...')
    document.getElementById('votestatus').innerHTML = 'invaliddddd';
}
*/
