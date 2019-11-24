var result;
$(function () {
    $('#gasBottleItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item' href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item' href='javascript:void(0)'>流量</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.time,'压强', result.upPGasList, '压强上限', result.downPGasList, '压强下限');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.time, '流量', result.upQGasList, '流量上限', result.downQGasList, '流量下限');
        });

    });

    $('#reduceValveItem').click(function () {
        $('#showMenu').empty().append("<a class='dropdown-item' id='pbHighBtn' href='javascript:void(0)'>高压腔压强</a>\n" +
            "<a class='dropdown-item' id='pbLowBtn' href='javascript:void(0)'>低压腔压强</a>\n" +
            "<a class='dropdown-item' id='mrHighBtn' href='javascript:void(0)'>高压腔流量</a>\n" +
            "<a class='dropdown-item' id='mrLowBtn' href='javascript:void(0)'>低压腔流量</a>");

        $('#pbHighBtn').bind("click",function(){
            drawChart(result.time,'压强', result.upPhighReduceList, '压强上限', result.upPhighReduceList, '压强下限');
        });

        $('#pbLowBtn').bind("click",function(){
            drawChart(result.time,'压强', result.upPlowReduceList, '压强上限', result.upPlowReduceList, '压强下限');
        });

        $('#mrHighBtn').bind("click",function(){
            drawChart(result.time,'流量', result.upQhighReduceList, '流量上限', result.upQhighReduceList, '压强流量');
        });

        $('#mrLowBtn').bind("click",function(){
            drawChart(result.time,'流量', result.upQlowReduceList, '流量上限', result.upQlowReduceList, '压强流量');
        });

    });

    $('#fuelTankItem').bind("click",function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item'  href='javascript:void(0)'>压强</a>\n" +
                                    "<a id='mrBtn' class='dropdown-item'  href='javascript:void(0)'>流量</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.time,'压强', result.upPMMHTankList, '压强上限', result.upPMMHTankList, '压强下限');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.time,'流量', result.upQMMHTankList, '流量上限', result.upQMMHTankList, '流量下限');
        });

    });

    $('#oxidTankItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item'  href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item'  href='javascript:void(0)'>流量</a>");

        $('#pbBtn').bind("click",function(){
            drawChart(result.time,'压强', result.upPLO2TankList, '压强上限', result.upPLO2TankList, '压强下限');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.time,'流量', result.upQLO2TankList, '流量上限', result.upQLO2TankList, '流量下限');
        });


    });

    $('#fuelSolenoidItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item' href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item' href='javascript:void(0)'>流量</a>"
            // "<a id='psiBtn' class='dropdown-item' href='javascript:void(0)'>磁链</a>\n" +
            // "<a id='phiBtn' class='dropdown-item' href='javascript:void(0)'>磁通量</a>\n" +
            // "<a id='xBtn' class='dropdown-item' href='javascript:void(0)'>阀芯位移</a>\n" +
            );

        $('#pbBtn').bind("click",function(){
            drawChart(result.time,'压强', result.upPMMHSoleList, '压强上限', result.downPMMHSoleList, '压强下限');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.time,'流量', result.upQMMHSoleList, '流量上限', result.downQMMHSoleList, '流量下限');
        });

        // $('#phiBtn').bind("click",function(){
        //     drawChart(result.t, result.phi_mmh, '磁通量');
        // });
        //
        // $('#xBtn').bind("click",function(){
        //     drawChart(result.t, result.x_smmh, '阀芯位移');
        // });

    });

    $('#oxidSolenoidItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item' href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item' href='javascript:void(0)'>流量</a>"
            // "<a id='psiBtn' class='dropdown-item' href='javascript:void(0)'>磁链</a>\n" +
            // "<a id='phiBtn' class='dropdown-item' href='javascript:void(0)'>磁通量</a>\n" +
            // "<a id='xBtn' class='dropdown-item' href='javascript:void(0)'>阀芯位移</a>\n" +
            );

        $('#pbBtn').bind("click",function(){
            drawChart(result.time,'压强', result.upPLO2SoleList, '压强上限', result.downPLO2SoleList, '压强下限');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.time,'流量', result.upQLO2SoleList, '流量上限', result.downQLO2SoleList, '流量下限');
        });


    });

    $('#thrustChamberItem').click(function () {
        $('#showMenu').empty().append("<a id='pbBtn' class='dropdown-item' href='javascript:void(0)'>压强</a>\n" +
            "<a id='mrBtn' class='dropdown-item' href='javascript:void(0)'>流量</a>\n" +
            "<a id='fBtn' class='dropdown-item' href='javascript:void(0)'>推力</a>\n" +
            "<a id='rBtn' class='dropdown-item' href='javascript:void(0)'>混合比</a>" +
            "<a id='ispBtn' class='dropdown-item' href='javascript:void(0)'>比冲</a>\n");

        $('#pbBtn').bind("click",function(){
            drawChart(result.time,'压强', result.upPCombustionList, '压强上限', result.downPCombustionList, '压强下限');
        });

        $('#mrBtn').bind("click",function(){
            drawChart(result.time,'流量', result.upQCombustionList, '流量上限', result.downQCombustionList, '流量下限');
        });

        $('#fBtn').bind("click",function(){
            drawChart(result.time,'推力', result.upFCombustionList, '推力上限', result.downFCombustionList, '推力下限');
        });

        $('#rBtn').bind("click",function(){
            drawChart(result.time,'混合比', result.upRCombustionList, '混合比上限', result.downRCombustionList, '混合比下限');
        });

        $('#ispBtn').bind("click",function(){
            drawChart(result.time,'比冲', result.upIspList, '比冲上限', result.downIspList, '比冲下限');
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
    var monteForm = $('#monteForm').serializeJson()

    var data = {};
    $.extend(data, gasBottleForm,reduceForm,fuelTankForm,oxidTankForm,fuelSolenoidForm,
        oxidSolenoidForm,fuelOrificeForm,oxidOrificeForm,thrustForm,globleForm,monteForm);

    $.post(contextRoot+"monteCarloSim", data, function(rtn){
        if (rtn != null && rtn!="") {
            result = rtn;
            $('#resultBtn').removeAttr('disabled');
            alert("可以查看结果了");
            initTable();
        }
    });

}

function showResult(){
    $('#resultModal').modal('toggle');
    drawChart(result.t, result.p_g, '压强');
};

function addNewDisPara(label, name) {
    var content = "<div class='form-group row' id='"+name+"div"+"'>\n" +
        "                        <label class='col-sm-2 col-form-label'>"+label+"</label>\n" +
        "\n" +
        "                        <div class='input-group mb-3 col-sm-3' id='"+name+"dis"+"'>\n" +
        "                          <div class='input-group-prepend'>\n" +
        "                            <button class='btn btn-outline-secondary dropdown-toggle' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>选择分布方式</button>\n" +
        "                            <div class='dropdown-menu'>\n" +
        "                              <a class='dropdown-item' href='javascript:void(0)' onclick='showDistribution(\"正态分布\",\""+name+"\")'>正态分布</a>\n" +
        "                              <a class='dropdown-item' href='javascript:void(0)' onclick='showDistribution(\"均匀分布\",\""+name+"\")'>均匀分布</a>\n" +
        "                              <a class='dropdown-item' href='javascript:void(0)' onclick='showDistribution(\"指数分布\",\""+name+"\")'>指数分布</a>\n" +
        "                            </div>\n" +
        "                          </div>\n" +
        "                          <input type='text' class='form-control' aria-label='Text input with dropdown button' id='"+name+"inp"+"'>\n" +
        "                        </div>\n" +
        "\n" +
        "<div class='input-group mb-3 col-sm-3' id='"+name+"fst"+"'>\n"+
        "</div>\n"+
        "<div class='input-group mb-3 col-sm-3' id='"+name+"snd"+"'>\n"+
        "</div>"+
        "                        <div class='col-sm-1'>\n" +
        "                          <a href='javascript:void(0)' onclick='deleteMonte(\""+name+"\")' class='btn btn-danger btn-circle btn-sm' data-toggle='tooltip' data-placement='top' title='移除'>\n" +
        "                            <i class='fas fa-trash'></i>\n" +
        "                          </a>\n" +
        "                        </div>\n" +
        "                      </div>"

    $("#monteForm").append(content);

}

function showDistribution(disname, name) {
        switch (disname) {
            case "正态分布" :  $("#"+name+"fst").empty();
                $("#"+name+"snd").empty();
                $("#"+name+"fst").append(
                "                          <div class='input-group-prepend'>\n" +
                "                            <span class='input-group-text'>均值</span>\n" +
                "                          </div>\n" +
                "                          <input type='text' class='form-control' aria-describedby='basic-addon1' name='"+name+"miu"+"'>\n");

                $("#"+name+"snd").append(
                "                          <div class='input-group-prepend'>\n" +
                "                            <span class='input-group-text'>方差</span>\n" +
                "                          </div>\n" +
                "                          <input type='text' class='form-control' aria-describedby='basic-addon1' name='"+name+"sigma"+"'>\n"
                );
                $("#"+name+"inp").val("正态分布");
                break;

            case "均匀分布" : $("#"+name+"fst").empty();
                $("#"+name+"snd").empty();
                $("#"+name+"fst").append(
                "                          <div class='input-group-prepend'>\n" +
                "                            <span class='input-group-text'>下限</span>\n" +
                "                          </div>\n" +
                "                          <input type='text' class='form-control' aria-describedby='basic-addon1' name='"+name+"down"+"'>\n");

                $("#"+name+"snd").append(
                "                          <div class='input-group-prepend'>\n" +
                "                            <span class='input-group-text'>上限</span>\n" +
                "                          </div>\n" +
                "                          <input type='text' class='form-control' aria-describedby='basic-addon1' name='"+name+"up"+"'>\n"
                );
                $("#"+name+"inp").val("均匀分布");
                break;

            case "指数分布" : $("#"+name+"fst").empty();
                $("#"+name+"snd").empty();
                $("#"+name+"fst").append(
                "                          <div class='input-group-prepend'>\n" +
                "                            <span class='input-group-text'>lamda</span>\n" +
                "                          </div>\n" +
                "                          <input type='text' class='form-control' aria-describedby='basic-addon1' name='"+name+"lamda"+"'>\n"
                );
                $("#"+name+"inp").val("指数分布");
                break;
        }
}

function deleteMonte(name) {
    $("#"+name+"div").remove();
}

function showBoxChart(name) {
    switch (name) {
        case 'f':
            drawBox('推力', result.boxFCombustionList);
            break;
        case 'isp':
            drawBox('比冲',result.boxIspCombustionList);
            break;
        case 'p':
            drawBox('压强',result.boxPCombustionList);
            break;
    }
}

function initTable() {
    $('#fAVe').text(result.statisticsFCombustionList[0].toFixed(3));
    $('#fVar').text(result.statisticsFCombustionList[1].toFixed(3));
    $('#fCo').text("("+result.statisticsFCombustionList[2].toFixed(3)+","+result.statisticsFCombustionList[3].toFixed(3)+")");

    $('#ispAVe').text(result.statisticsIspCombustionList[0].toFixed(3));
    $('#ispVar').text(result.statisticsIspCombustionList[1].toFixed(3));
    $('#ispCo').text("("+result.statisticsIspCombustionList[2].toFixed(3)+","+result.statisticsIspCombustionList[3].toFixed(3)+")");
}

function drawChart(xdata, yname, updata, upname, downdata, downname){
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
            name: upname,
            data: updata
        },{
            name: downname,
            data: downdata
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

function drawBox(xname, ydata) {
    var chart = Highcharts.chart('container', {
        chart: {
            type: 'boxplot'
        },
        title: {
            text: '性能参数箱线图'
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: [xname],
            title: {
                text: ''
            }
        },
        yAxis: {
            title: {
                text: '计算值'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {series.name}</b><br/>' + // eslint-disable-line no-dupe-keys
                '最大值: {point.high}<br/>' +
                'Q2\t: {point.q3}<br/>' +
                '中位数: {point.median}<br/>' +
                'Q1\t: {point.q1}<br/>' +
                '最小值: {point.low}<br/>'
        },
        series: [{
            name: '观测值',
            data: [
                ydata
            ],
            tooltip: {
                headerFormat: '<em>实验号码： {point.key}</em><br/>'
            }
        }, {
            marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: Highcharts.getOptions().colors[0]
            },
            tooltip: {
                pointFormat: 'Observation: {point.y}'
            }
        }]
    });
}