window.addController = function ($scope, $http, $location) {

    $scope.ThemSach = function () {
        const apibook = "http://localhost:3000/book"

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
    
            $http.post(
                apibook, newBook
                )
                .then(function (response) {
                    if (response.status == 201) {
                        $location.path("trang chủ")
                    }
            })    
        }else {
            alert('Vui lòng nhập đầu đủ thông tin');
        }
    }
}