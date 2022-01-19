var friends = [ 'Mark', 'Seth', 'Ashley', 'Meagan', 'Rachel'];

for (i = 0; i < friends.length; i++){
    for (j = 99; j > 1; j--){
        console.log(friends[i]);
        
        console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' +  friends[i] + ' strikes one out, clears it all out, ' + [j-1] + ' lines of code in the file');
    if (j==2){
        console.log(friends[i]);
        console.log( 1 + ' line of code in the file, ' + 1 + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, ' + 0 + ' line of code in the file.' );
    }
    }

}