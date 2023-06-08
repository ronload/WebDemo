$(document).ready(function() {
    $('body').css('display', 'none');
    $('body').fadeIn(1000); //一開始淡入
});

function extractOutline() {
    // 取得用戶輸入的文章內容
    var inputText = document.getElementById("inputText").value;

    // 處理文章內容，生成大綱
    var outline = generateOutline(inputText);

    // 更新網頁上的內容並以淡入效果顯示
    var textio = document.getElementById("textio");
    document.getElementById("extract").innerText = "Back";
    var button = document.getElementById("extract");
    button.style.display = "none"; // 隐藏按钮
    $(textio).hide().html("").fadeIn(1000); // 清空內容並淡入顯示

    // 逐字顯示大綱
    var lines = outline.split("<li>");
    var lineIndex = 0;
    var charIndex = 0;
    var interval = setInterval(function() {
        if (lineIndex < lines.length) {
            var line = lines[lineIndex];
            if (charIndex < line.length) {
                // 判斷是否為標籤開始
                if (line[charIndex] === "<") {
                    var endIndex = line.indexOf(">", charIndex);
                    if (endIndex !== -1) {
                        textio.innerHTML += line.substring(charIndex, endIndex + 1);
                        charIndex = endIndex + 1;
                    }
                }
                // 判斷是否為標籤結束
                else if (line[charIndex] === ">") {
                    var startIndex = line.lastIndexOf("<", charIndex);
                    if (startIndex !== -1) {
                        textio.innerHTML += line.substring(startIndex, charIndex + 1);
                        charIndex = charIndex + 1;
                    }
                }
                // 一般文字
                else {
                    textio.innerHTML += line[charIndex++];
                }
            } else {
                // 換行
                textio.innerHTML += "<br><br>";
                lineIndex++;
                charIndex = 0;
            }
        } else {
            clearInterval(interval);
            $(button).delay(500).fadeIn(500); // 延迟后淡入按钮
        }
    }, 5); // 每個字顯示的間隔時間

    // 監聽按鈕點擊事件，當按下「回到上一頁」時重新載入頁面
    document.getElementById("extract").onclick = function() {
        location.reload();
    };
}

function generateOutline(inputText) {
    // 分割句子
    var sentences = inputText.split(/[.?!]/);
    
    // 建立圖形網絡
    var graph = {};
    var wordCounts = {};
    var dampingFactor = 0.85;
    var epsilon = 0.001;
    
    sentences.forEach(function (sentence) {
      var words = sentence.toLowerCase().split(/\b/).filter(function (word) {
        return word.match(/[a-zA-Z0-9]/);
      });
    
      words.forEach(function (word, i) {
        if (!graph[word]) {
          graph[word] = {};
        }
    
        if (!wordCounts[word]) {
          wordCounts[word] = 0;
        }
    
        wordCounts[word]++;
    
        if (i < words.length - 1) {
          var nextWord = words[i + 1];
    
          if (!graph[word][nextWord]) {
            graph[word][nextWord] = 1;
          } else {
            graph[word][nextWord]++;
          }
        }
      });
    });
    
    // 計算權重
    var wordWeights = {};
    var maxDiff = 1;
    var prevWeights;
    
    while (maxDiff > epsilon) {
      var currWeights = {};
    
      Object.keys(wordCounts).forEach(function (word) {
        currWeights[word] = 1 - dampingFactor;
    
        if (graph[word]) {
          var totalWeight = Object.keys(graph[word]).reduce(function (acc, nextWord) {
            return acc + graph[word][nextWord];
          }, 0);
    
          Object.keys(graph[word]).forEach(function (nextWord) {
            var weight = graph[word][nextWord] / totalWeight;
            currWeights[word] += dampingFactor * weight * (prevWeights ? prevWeights[nextWord] : 1);
          });
        }
      });
    
      maxDiff = Object.keys(currWeights).reduce(function (acc, word) {
        return Math.max(acc, Math.abs(currWeights[word] - (prevWeights ? prevWeights[word] : 0)));
      }, 0);
    
      prevWeights = currWeights;
    }
    
    // 根據權重排序句子
    var rankedSentences = sentences.map(function (sentence) {
      var words = sentence.toLowerCase().split(/\b/).filter(function (word) {
        return word.match(/[a-zA-Z0-9]/);
      });
    
      var score = words.reduce(function (acc, word) {
        return acc + (prevWeights[word] || 0);
      }, 0);
    
      return {
        sentence: sentence,
        score: score
      };
    });
    
    rankedSentences.sort(function (a, b) {
      return b.score - a.score;
    });
    
    // 構建大綱
    var summary = rankedSentences.map(function (sentence, index) {
        return (index + 1) + ". " + sentence.sentence + ".";
    });

    // 將大綱轉換為條列式呈現
    var outline = "<ul>";
    for (var i = 0; i < Math.min(5, summary.length); i++) {
        outline += "<li>" + summary[i] + "</li>";
    }
    outline += "</ul>";

    return outline;
}
