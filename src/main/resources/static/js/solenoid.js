var result;
$(function () {
    $('#pbBtn').click(function(){
        drawChart(result.t, result.p, '压强');
    });

    $('#mrBtn').click(function(){
        drawChart(result.t, result.q, '质量流率');
    });

    $('#psiBtn').click(function(){
        drawChart(result.t, result.psi, '磁链');
    });

    $('#phiBtn').click(function(){
        drawChart(result.t, result.phi, '磁通量');
    });

    $('#xBtn').click(function(){
        drawChart(result.t, result.x, '阀芯位移');
    });

    $('#vBtn').click(function(){
        drawChart(result.t, result.v, '阀芯速度');
    });

    $('#solenoidName').change(function () {
        var name = $(this).children('option:selected').val();
        setSolenoidValue(name);
    });
});

function beginSim() {
    var fuelSolenoidForm = $('#fuelSolenoidForm').serializeJson();
    var fuelOrificeForm = $('#fuelOrificeForm').serializeJson();
    var globleForm = $('#globleForm').serializeJson();

    var data = {};
    $.extend(data,fuelSolenoidForm, fuelOrificeForm, globleForm);

    $.post(contextRoot+"solenoidSim", data, function(rtn){
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
    var fuelSolenoidForm = $('#fuelSolenoidForm').serializeJson();
    var fuelOrificeForm = $('#fuelOrificeForm').serializeJson();
    var saveNameForm = $('#saveNameForm').serializeJson();
    var data = {};
    $.extend(data, fuelSolenoidForm,fuelOrificeForm,saveNameForm);

    $.post(contextRoot+"saveSolenoid",data, function(){
        alert("保存成功");
    });
}

function setSolenoidValue(name) {

    $.post(contextRoot+"getSolenoid",{solenoidName:name}, function(rtn){
        $('#fuelSolenoidR').val(rtn.fuelSolenoidR);
        $('#fuelSolenoidN').val(rtn.fuelSolenoidN);
        $('#fuelSolenoidU').val(rtn.fuelSolenoidU);
        $('#fuelSolenoidSigma').val(rtn.fuelSolenoidSigma);
        $('#fuelSolenoidSm').val(rtn.fuelSolenoidSm);
        $('#fuelSolenoidK').val(rtn.fuelSolenoidK);
        $('#fuelSolenoidM').val(rtn.fuelSolenoidM);
        $('#fuelSolenoidF').val(rtn.fuelSolenoidF);
        $('#fuelSolenoidD').val(rtn.fuelSolenoidD);
        $('#fuelSolenoidXstop').val(rtn.fuelSolenoidXstop);
        $('#fuelLiquidOrificeD').val(rtn.fuelLiquidOrificeD);
        $('#fuelLiquidOrificePc').val(rtn.fuelLiquidOrificePc);
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