var result;
$(function () {
    $('#pbBtn').click(function(){
        drawChart(result.t, result.p, '压强');
    });

    $('#mrBtn').click(function(){
        drawChart(result.t, result.q, '质量流率');
    });

    $('#vBtn').click(function(){
        drawChart(result.t, result.v, '空腔体积');
    });

    $('#rhoBtn').click(function(){
        drawChart(result.t, result.rho, '气体密度');
    });

    $('#liquidTankName').change(function () {
        var name = $(this).children('option:selected').val();
        setTankValue(name);
    });
});

function beginSim() {
    var fuelTankForm = $('#fuelTankForm').serializeJson();
    var globleForm = $('#globleForm').serializeJson();

    var data = {};
    $.extend(data, fuelTankForm,globleForm);

    $.post(contextRoot+"liquidTankSim",data, function(rtn){
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
    var fuelTankForm = $('#fuelTankForm').serializeJson();
    var saveNameForm = $('#saveNameForm').serializeJson();
    var data = {};
    $.extend(data, fuelTankForm,saveNameForm);

    $.post(contextRoot+"saveLiquidTank",data, function(){
        alert("保存成功");
    });
}

function setTankValue(name) {

    $.post(contextRoot+"getLiquidTank",{liquidTankName:name}, function(rtn){
        $('#fuelTankCA').val(rtn.fuelTankCA);
        $('#fuelTankV0').val(rtn.fuelTankV0);
        $('#fuelTankFuel').val(rtn.fuelTankFuel);
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