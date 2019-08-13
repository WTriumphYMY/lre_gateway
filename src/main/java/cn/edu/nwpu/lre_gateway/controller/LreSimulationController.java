package cn.edu.nwpu.lre_gateway.controller;

import cn.edu.nwpu.lre_gateway.client.LRESimClient;
import cn.edu.nwpu.lre_gateway.dto.ConstantSystemDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * @ClassName ConstantSystemController
 * @Author: wkx
 * @Date: 2019/7/18 22:42
 * @Version: v1.0
 * @Description: 恒压双组元挤压式系统控制器
 */
@RestController
public class LreSimulationController {

    @Autowired
    private LRESimClient lreSimClient;

    @PostMapping("/constDualSystemSim")
    public Map<String, List<Double>> constDualSystemSim(ConstantSystemDTO constantSystemDTO){
        return lreSimClient.constDualSystemSim(constantSystemDTO);
    }

    @PostMapping("/gasBottleSim")
    public Map<String, List<Double>> gasBottleSim(ConstantSystemDTO constantSystemDTO){
        return lreSimClient.gasBottleSim(constantSystemDTO);
    }

    @PostMapping("reduceValveSim")
    public Map<String, List<Double>> reduceValveSim(ConstantSystemDTO constantSystemDTO){
        return lreSimClient.reduceValveSim(constantSystemDTO);
    }

    @PostMapping("liquidTankSim")
    public Map<String, List<Double>> liquidTankSim(ConstantSystemDTO constantSystemDTO){
        return lreSimClient.liquidTankSim(constantSystemDTO);
    }

    @PostMapping("solenoidSim")
    public Map<String, List<Double>> solenoidSim(ConstantSystemDTO constantSystemDTO){
        return lreSimClient.solenoidSim(constantSystemDTO);
    }

    @PostMapping("thrustChamberSim")
    public Map<String, List<Double>> thrustChamberSim(ConstantSystemDTO constantSystemDTO){
        return lreSimClient.thrustChamberSim(constantSystemDTO);
    }
}
