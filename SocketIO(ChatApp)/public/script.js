let socket = io()

$('#loginBox').show()
$('#chatBox').hide()

$('#btnStart').onclick(()=>{
    socket.emit('login',{
        username: $('inpUsername').val()
    })
})

socket.on('logged_in',()=>{
    $('#loginBox').hide()
    $('#chatBox').show()
})

socket.on('login_failed',()=>{
    window.alert('Username or Password is Wrong') 
})

$('#btnSendMsg').onclick(()=>{
    socket.emit('msg_send',{
        to : $('#inpToUser').val(),     
        msg : $('#inpNewMsg').val()
    })
})

socket.on('msg_rcvd',(data)=>{
    $('#ulMsgs').append($('<li>').text(
        `[${data.from}] : ${data.msg}`
    ))
})