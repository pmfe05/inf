// Lấy phần tử thẻ a
var myLink = document.getElementById("myLink");

// Thêm sự kiện click
myLink.addEventListener("click", function() {
    // Hiển thị thông báo
    window.alert("Select below 👇");
});

// Lấy các phần tử thẻ a
var facebookLink = document.getElementById("facebookLink");
var zaloLink = document.getElementById("zaloLink");
var githubLink = document.getElementById("githubLink");
var instagramLink = document.getElementById("instagramLink");

// Thêm sự kiện click cho thẻ a
facebookLink.addEventListener("click", redirectToLink);
zaloLink.addEventListener("click", redirectToLink);
githubLink.addEventListener("click", redirectToLink);
instagramLink.addEventListener("click", redirectToLink);

// Hàm xử lý sự kiện click
function redirectToLink(event) {
    // Ngăn chặn hành động mặc định của thẻ a (ngăn chặn chuyển hướng)
    event.preventDefault();

    // Lấy đường link từ thuộc tính href của thẻ a
    var link = event.currentTarget.getAttribute("href");

    // Chuyển hướng người dùng đến link
    window.location.href = link;
}

