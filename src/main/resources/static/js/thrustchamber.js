var result;
$(function () {
    $('#pbBtn').click(function(){
        drawChart(result.t, result.p, '压强');
    });

    $('#mrBtn').click(function(){
        drawChart(result.t, result.q, '流量');
    });

    $('#fBtn').click(function(){
        drawChart(result.t, result.f, '推力');
    });

    $('#rBtn').click(function(){
        drawChart(result.t, result.r, '混合比');
    });
});

function beginSim() {
    var thrustForm = $('#thrustForm').serializeJson();
    var globleForm = $('#globleForm').serializeJson();

    var data = {};
    $.extend(data,thrustForm,globleForm);

    $.post(contextRoot+"thrustChamberSim",data, function(rtn){
        if (rtn != null && rtn!="") {
            result = rtn;
            $('#resultBtn').removeAttr('disabled');
            alert("可以查看结果了");
        }
    });
}

function showResult(){
    $('#resultModal').modal('toggle');
    drawChart(result.t, result.p, '压强');
};

function drawChart(xdata, ydata, yname){
    var chart = Highcharts.chart('container', {
        title: {
            text: '内弹道'
        },
        boost: {
            useGPUTranslations: true
        },
        subtitle: {
            text: '数据来源：我算出来的'
        },
        xAxis: {
            categories: xdata
        },
        yAxis: {
            title: {
                text: yname
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        series: [{
            name: yname,
            data: ydata
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    });
}