window.detailController = function( $scope , $http , $routeParams, $location ){
    $scope.title = 'Chi tiết sách';

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
}