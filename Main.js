

function popAlert()
{
    let text;
    let username = null;
    username = prompt("Please Enter username: ");
    if(username == null || username == "" ){
        text = "You need to enter text!"
        alert(text);
    } else[
        text = "Hello World! Good Morning " + username,
        alert(text),
    ]

    
}

popAlert();