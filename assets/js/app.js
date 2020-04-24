    const scriptURL = 'GOOGLE-SHEET-SCRIPT-URL';
    $(document).ready(function(){
            $('#submitBtn').on('click',function(){

                const data = {
                    first_name: $('#first_name').val(),
                    last_name:  $('#last_name').val(),
                    email:  $('#email').val(),
                    sheet:'Sheet1' // Sheet Name
                };
                console.info(data,'data')
                const queryString = $.param(data);
                $.ajax({
                    
                    url: scriptURL,
                    type: 'post', // request method
                    data: queryString,
                    success: function (data) {
                        console.log(data);

                    },
                    error: function (e) {
                        console.log(`A error occusred : ${JSON.stringify(e)}`);
                    },
                    fail: function () {
                        console.log(`The request failed!`);
                    }
                });
            });
    });


   