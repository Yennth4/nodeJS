window.listController = function($scope, $http){

    const apibook  =  "http://localhost:3000/book"

    $http.get(apibook)
    .then(function (response) {
        if(response.status ==200) {
            $scope.listbook = response.data 
        }
    })

    $scope.deleteBook = function(id){
        if(id){
            let confirm = window.confirm("Bạn có chắc chắn muốn xóa ?");
            if(confirm){
                $http.delete(`${apibook}/${id}`)
                .then(function(response){
                    if(response.status == 200){
                        alert("Xóa thành công");
                    }
                }).catch(function(error){
                    console.error(error);
                    alert("Lỗi không xóa được")
                })
            }
        }
    }
}