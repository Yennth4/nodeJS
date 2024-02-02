window.editController = function( $scope , $http , $routeParams, $location ){
    $scope.title = 'Sửa thông tin sách';

    const apibook = "http://localhost:3000/book"

    let bookID = $routeParams.id;

    $http.get(
        `${apibook}/${bookID}`
    )
    .then(function (response) {
        if (response.status == 200) {
            $scope.book = {
                editID: response.data.id,
                tenSach: response.data.tenSach,
                theLoai: response.data.theLoai,
                gia: response.data.gia,
                Soluong: response.data.Soluong
            }
        }
    });

    $scope.editBook = function () {

        let check = true

        $scope.test = {
            tenSach: false,
            theLoai: false,
            gia: false,
            Soluong: false
        }

        if(!$scope.book || !$scope.book.tenSach || !$scope.book.theLoai ||  !$scope.book.Soluong ){
            check = false
            $scope.test.tenSach = true
            $scope.test.theLoai = true
            $scope.test.gia = true
            $scope.test.Soluong = true
        }

        if(check){
            let newBook = {
                tenSach: $scope.book.tenSach,
                theLoai: $scope.book.theLoai,
                gia: $scope.book.gia,
                Soluong: $scope.book.Soluong
            }
    
            $http.put(
                `${apibook}/${bookID}`, newBook
                )
                .then(function (response) {
                    if (response.status == 200) {
                        $location.path("trang-chu")
                    }
            })    
        }else {
            alert('Vui lòng nhập đầu đủ thông tin');
        }
    }
}