$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000); //一開始淡入
});

function extractOutline() {
    // 取得用戶輸入的文章內容
    var inputText = document.getElementById("inputText").value;

    // 處理文章內容，生成大綱
    var outline = generateOutline(inputText);

    // 更新網頁上的內容
    document.getElementById("inputText").value = outline;
    document.getElementById("extract").innerText = "Back";

    // 監聽按鈕點擊事件，當按下「回到上一頁」時重新載入頁面
    document.getElementById("extract").onclick = function() {
        location.reload();
    };
}

function generateOutline(inputText) {
    // 在這裡根據用戶輸入的文章內容生成大綱，你可以使用自己的邏輯或演算法

    // 這裡只是一個簡單的示例，將文章分割成段落並用換行符連接
    var paragraphs = inputText.split("\n");
    var outline = paragraphs.join(", ");

    return outline;
}