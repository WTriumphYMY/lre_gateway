var result;
$(function () {
    $('#pbHighBtn').click(function(){
        drawChart(result.t, result.phigh, '高压腔压强');
    });

    $('#pbLowBtn').click(function(){
        drawChart(result.t, result.plow, '低压腔压强');
    });

    $('#mrHighBtn').click(function(){
        drawChart(result.t, result.qhigh, '高压腔流量');
    });

    $('#mrLowBtn').click(function(){
        drawChart(result.t, result.qlow, '低压腔流量');
    });


    $('#tempHighBtn').click(function(){
        drawChart(result.t, result.temphigh, '高压腔温度');
    });

    $('#tempLowBtn').click(function(){
        drawChart(result.t, result.templow, '低压腔温度');
    });

    $('#xBtn').click(function(){
        drawChart(result.t, result.x, '阀芯位移');
    });

    $('#uBtn').click(function(){
        drawChart(result.t, result.u, '阀芯速度');
    });

    $('#reduceName').change(function () {
        var name = $(this).children('option:selected').val();
        setReduceValveValue(name);
    });
});

function beginSim() {
    var reduceForm = $('#reduceForm').serializeJson();
    var globleForm = $('#globleForm').serializeJson();

    var data = {};
    $.extend(data, reduceForm,globleForm);

    $.post(contextRoot+"reduceValveSim",data, function(rtn){
        if (rtn != null && rtn!="") {
            result = rtn;
            $('#resultBtn').removeAttr('disabled');
            alert("可以查看结果了");
        }
    });
}

function showResult(){
    $('#resultModal').modal('toggle');
    drawChart(result.t, result.phigh, '压强');
};

function showSaveModal() {
    $('#saveModal').modal('toggle');
}

function saveData() {
    var reduceForm = $('#reduceForm').serializeJson();
    var saveNameForm = $('#saveNameForm').serializeJson();
    var data = {};
    $.extend(data, reduceForm,saveNameForm);

    $.post(contextRoot+"saveReduceValve",data, function(){
        alert("保存成功");
    });
}

function setReduceValveValue(name) {

    $.post(contextRoot+"getReduceValve",{reduceName:name}, function(rtn){
        $('#reduceC').val(rtn.reduceC);
        $('#reduceK').val(rtn.reduceK);
        $('#reduceF').val(rtn.reduceF);
        $('#reduceM').val(rtn.reduceM);
        $('#reduceAmb').val(rtn.reduceAmb);
        $('#reduceAvc').val(rtn.reduceAvc);
        $('#reduceV1').val(rtn.reduceV1);
        $('#reduceV2').val(rtn.reduceV2);
        $('#reduceM').val(rtn.reduceM);
        $('#reduceXstop').val(rtn.reduceXstop);
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