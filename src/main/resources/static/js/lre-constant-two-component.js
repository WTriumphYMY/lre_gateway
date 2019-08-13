var result;
$(function () {
    $('#gasBottleItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item' href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item' href='javascript:void(0)'>流量</a>\n" +
            "<a id='tempBtn' class='dropdown-item' href='javascript:void(0)'>温度</a>\n" +
            "<a id='rhoBtn' class='dropdown-item' href='javascript:void(0)'>密度</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.t, result.p_g, '压强');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.t, result.q_g, '流量');
        });

        $('#tempBtn').bind("click",function(){
            drawChart(result.t, result.temp_g, '燃烧室温度');
        });

        $('#rhoBtn').bind("click",function(){
            drawChart(result.t, result.rho_g, '气体密度');
        });
    });

    $('#reduceValveItem').click(function () {
        $('#showMenu').empty().append("<a class='dropdown-item' id='pbHighBtn' href='javascript:void(0)'>高压腔压强</a>\n" +
            "<a class='dropdown-item' id='pbLowBtn' href='javascript:void(0)'>低压腔压强</a>\n" +
            "<a class='dropdown-item' id='mrHighBtn' href='javascript:void(0)'>高压腔流量</a>\n" +
            "<a class='dropdown-item' id='mrLowBtn' href='javascript:void(0)'>低压腔流量</a>\n" +
            "<a class='dropdown-item' id='tempHighBtn' href='javascript:void(0)'>高压腔温度</a>\n" +
            "<a class='dropdown-item' id='tempLowBtn'  href='javascript:void(0)'>低压腔温度</a>\n" +
            "<a class='dropdown-item' id='xBtn' href='javascript:void(0)'>阀芯位移</a>\n" +
            "<a class='dropdown-item' id='uBtn' href='javascript:void(0)'>阀芯速度</a>");

        $('#pbHighBtn').bind("click",function(){
            drawChart(result.t, result.phigh, '高压腔压强');
        });

        $('#pbLowBtn').bind("click",function(){
            drawChart(result.t, result.plow, '低压腔压强');
        });

        $('#mrHighBtn').bind("click",function(){
            drawChart(result.t, result.qhigh, '高压腔流量');
        });

        $('#mrLowBtn').bind("click",function(){
            drawChart(result.t, result.qlow, '低压腔流量');
        });


        $('#tempHighBtn').bind("click",function(){
            drawChart(result.t, result.temphigh, '高压腔温度');
        });

        $('#tempLowBtn').bind("click",function(){
            drawChart(result.t, result.templow, '低压腔温度');
        });

        $('#xBtn').bind("click",function(){
            drawChart(result.t, result.x, '阀芯位移');
        });

        $('#uBtn').bind("click",function(){
            drawChart(result.t, result.u, '阀芯速度');
        });
    });

    $('#fuelTankItem').bind("click",function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item'  href='javascript:void(0)'>压强</a>\n" +
                                    "<a id='mrBtn' class='dropdown-item'  href='javascript:void(0)'>流量</a>\n" +
                                    "<a id='vBtn' class='dropdown-item'  href='javascript:void(0)'>空腔体积</a>\n" +
                                    "<a id='rhoBtn' class='dropdown-item'  href='javascript:void(0)'>密度</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.t, result.p_lmmh, '压强');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.t, result.q_lmmh, '流量');
        });

        $('#vBtn').bind("click",function(){
            drawChart(result.t, result.v_lmmh, '空腔体积');
        });

        $('#rhoBtn').bind("click",function(){
            drawChart(result.t, result.rho_lmmh, '气体密度');
        });

    });

    $('#oxidTankItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item'  href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item'  href='javascript:void(0)'>流量</a>\n" +
            "<a id='vBtn' class='dropdown-item'  href='javascript:void(0)'>空腔体积</a>\n" +
            "<a id='rhoBtn' class='dropdown-item'  href='javascript:void(0)'>密度</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.t, result.p_lo2, '压强');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.t, result.q_lo2, '流量');
        });

        $('#vBtn').bind("click",function(){
            drawChart(result.t, result.v_lo2, '空腔体积');
        });

        $('#rhoBtn').bind("click",function(){
            drawChart(result.t, result.rho_lo2, '气体密度');
        });
    });

    $('#fuelSolenoidItem').click(function () {
        $('#showMenu').empty().append("<a id=\"pbBtn\" class=\"dropdown-item\" href='javascript:void(0)'>压强</a>\n" +
            "<a id=\"mrBtn\" class=\"dropdown-item\" href='javascript:void(0)'>流量</a>\n" +
            "<a id=\"psiBtn\" class=\"dropdown-item\" href='javascript:void(0)'>磁链</a>\n" +
            "<a id=\"phiBtn\" class=\"dropdown-item\" href='javascript:void(0)'>磁通量</a>\n" +
            "<a id=\"xBtn\" class=\"dropdown-item\" href='javascript:void(0)'>阀芯位移</a>\n" +
            "<a id=\"vBtn\" class=\"dropdown-item\" href='javascript:void(0)'>阀芯速度</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.t, result.p_smmh, '压强');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.t, result.q_smmh, '流量');
        });

        $('#psiBtn').bind("click",function(){
            drawChart(result.t, result.psi_mmh, '磁链');
        });

        $('#phiBtn').bind("click",function(){
            drawChart(result.t, result.phi_mmh, '磁通量');
        });

        $('#xBtn').bind("click",function(){
            drawChart(result.t, result.x_smmh, '阀芯位移');
        });

        $('#vBtn').bind("click",function(){
            drawChart(result.t, result.v_smmh, '阀芯速度');
        });
    });

    $('#oxidSolenoidItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item' href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item' href='javascript:void(0)'>流量</a>\n" +
            "<a id='psiBtn' class='dropdown-item' href='javascript:void(0)'>磁链</a>\n" +
            "<a id='phiBtn' class='dropdown-item' href='javascript:void(0)'>磁通量</a>\n" +
            "<a id='xBtn' class='dropdown-item' href='javascript:void(0)'>阀芯位移</a>\n" +
            "<a id='vBtn' class='dropdown-item' href='javascript:void(0)'>阀芯速度</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.t, result.p_so2, '压强');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.t, result.q_so2, '流量');
        });

        $('#psiBtn').bind("click",function(){
            drawChart(result.t, result.psi_o2, '磁链');
        });

        $('#phiBtn').bind("click",function(){
            drawChart(result.t, result.phi_o2, '磁通量');
        });

        $('#xBtn').bind("click",function(){
            drawChart(result.t, result.x_so2, '阀芯位移');
        });

        $('#vBtn').bind("click",function(){
            drawChart(result.t, result.v_so2, '阀芯速度');
        });
    });

    $('#thrustChamberItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item' href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item' href='javascript:void(0)'>流量</a>\n" +
            "<a id='fBtn' class='dropdown-item' href='javascript:void(0)'>推力</a>\n" +
            "<a id='rBtn' class='dropdown-item' href='javascript:void(0)'>混合比</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.t, result.p_com, '压强');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.t, result.q_com, '流量');
        });

        $('#fBtn').bind("click",function(){
            drawChart(result.t, result.f_com, '推力');
        });

        $('#rBtn').bind("click",function(){
            drawChart(result.t, result.r_com, '混合比');
        });
    });
});

function beginSim() {
    var gasBottleForm = $('#gasBottleForm').serializeJson();
    var reduceForm = $('#reduceForm').serializeJson();
    var fuelTankForm = $('#fuelTankForm').serializeJson();
    var oxidTankForm = $('#oxidTankForm').serializeJson();
    var fuelSolenoidForm = $('#fuelSolenoidForm').serializeJson();
    var oxidSolenoidForm = $('#oxidSolenoidForm').serializeJson();
    var fuelOrificeForm = $('#fuelOrificeForm').serializeJson();
    var oxidOrificeForm = $('#oxidOrificeForm').serializeJson();
    var thrustForm = $('#thrustForm').serializeJson();
    var globleForm = $('#globleForm').serializeJson();

    var data = {};
    $.extend(data, gasBottleForm,reduceForm,fuelTankForm,oxidTankForm,fuelSolenoidForm,
        oxidSolenoidForm,fuelOrificeForm,oxidOrificeForm,thrustForm,globleForm);

    $.post(contextRoot+"constDualSystemSim", data, function(rtn){
        if (rtn != null && rtn!="") {
            result = rtn;
            $('#resultBtn').removeAttr('disabled');
            alert("可以查看结果了");
        }
    });
}

function showResult(){
    $('#resultModal').modal('toggle');
    drawChart(result.t, result.p_g, '压强');
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