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
    $(textio).hide().html(outline).fadeIn(1000);

    // 更新網頁上的內容
    document.getElementById("textio").innerHTML = outline;
    document.getElementById("extract").innerText = "Back";

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
    var summary = rankedSentences.map(function (sentence) {
        return sentence.sentence;
    });

    // 將大綱轉換為條列式呈現
    var outline = "<ul>";
    for (var i = 0; i < Math.min(5, summary.length); i++) {
        outline += "<li>" + summary[i] + "</li>";
    }
    outline += "</ul>";

    return outline;
}