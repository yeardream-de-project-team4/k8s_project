document.getElementById('flight-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day_of_month = document.getElementById('day_of_month').value;
    var day_of_week = document.getElementById('day_of_week').value;
    var CRS_dep_time = document.getElementById('CRS_dep_time').value;
    var CRS_arr_time = document.getElementById('CRS_arr_time').value;
    var flight_num = document.getElementById('flight_num').value;
    var distance = document.getElementById('distance').value;

    // 이 부분에서 Flask 서버에 예측을 요청하고 결과를 받아 화면에 표시합니다.
    // 아래는 예시 코드이며 실제 구현 시에는 서버의 주소와 연동해야 합니다.
    /*
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            year: year,
            month: month,
            day_of_month: day_of_month,
            day_of_week: day_of_week,
            CRS_dep_time: CRS_dep_time,
            CRS_arr_time: CRS_arr_time,
            flight_num: flight_num,
            distance: distance
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = '예상 지연 확률: ' + data.result;
    });
    */
});
setInterval(function() {
    var ranking = document.getElementById('airline-ranking');
    var airlines = Array.from(ranking.children);
    airlines.sort(function() {
        return Math.random() - 0.5;
    });
    airlines.forEach(function(airline) {
        ranking.appendChild(airline);
    });
}, 3000);
