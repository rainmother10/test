    // Lấy tham chiếu đến form và nút button trong form
    var form = document.getElementById('myForm');
    var button = document.getElementById('myButton');

    // Thêm sự kiện "submit" cho form
    form.addEventListener('submit', function(event) {
        // Ngăn chặn việc tải lại trang khi nhấn nút button trong form
        event.preventDefault();

        // Gọi hàm xử lý sự kiện khi nút được nhấn
        handleButtonClick();
    });

    // Hàm xử lý khi nút button được nhấn
    function handleButtonClick() {
            window.location.href = "https://www.instagram.com/rainn_2810/?hl=en";
            alert("thank for you");
       
    }
