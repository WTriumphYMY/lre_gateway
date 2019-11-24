var result;
$(function () {
    $('#pbBtn').click(function(){
        drawChart(result.t, result.p, '压强');
    });

    $('#mrBtn').click(function(){
        drawChart(result.t, result.q, '质量流率');
    });

    $('#tempBtn').click(function(){
        drawChart(result.t, result.temp, '燃烧室温度');
    });

    $('#rhoBtn').click(function(){
        drawChart(result.t, result.rho, '气体密度');
    });

    $('#bottleName').change(function () {
        var name = $(this).children('option:selected').val();
        setBottleValue(name);
    });
});

function beginSim() {
    var gasBottleForm = $('#gasBottleForm').serializeJson();
    var globleForm = $('#globleForm').serializeJson();

    var data = {};
    $.extend(data, gasBottleForm,globleForm);

    $.post(contextRoot+"gasBottleSim",data, function(rtn){
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

function showSaveModal() {
    $('#saveModal').modal('toggle');
}

function saveData() {
    var gasBottleForm = $('#gasBottleForm').serializeJson();
    var saveNameForm = $('#saveNameForm').serializeJson();
    var data = {};
    $.extend(data, gasBottleForm,saveNameForm);

    $.post(contextRoot+"saveGasBottle",data, function(){
        alert("保存成功");
    });
}

function setBottleValue(name) {

    $.post(contextRoot+"getGasBottle",{bottleName:name}, function(rtn){
        $('#bottleVol').val(rtn.bottleVol);
        $('#bottleCA').val(rtn.bottleCA);
        $('#bottlePressure').val(rtn.bottlePressure);
        $('#bottleTemperature').val(rtn.bottleTemperature);
        $('#bottleGas').val(rtn.bottleGas);
    });
}

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