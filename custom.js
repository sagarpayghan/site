//fetch data 

function fetchData(){

    $.ajax({
        url: "fetchapi/",
        method:'GET',
        dataType:'json',
        success:  function (data){
            let tbody= $('#data-table tbody')
            tbody.empty();
            data.forEach(function(item) {
                tbody.append('<tr><td>'+ item.id +'</td><td>'+item.name+'</td><td>'+item.value+'</td></tr>')
            }
            );
           //success end 
        },
        error: function(error) {
            console.log("Error from backend",error)
        }
           //ajax end
})

    //end function fetchData
}

// fetch data every 5 second
setInterval(fetchData, 5000);


function fetchValues() {
    $.ajax({
        url:'fetchvalues/',
        method:'GET',
        dataType:'json',
        success: function(data){
            data.forEach(function(item){
                $('#data-table tbody td')
            })

        },
        error: function(error){
            console.log("error at fetch value",error)
        }
    })
}



