package cn.edu.nwpu.lre_gateway.client;

import cn.edu.nwpu.lre_gateway.dto.ConstantSystemDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Map;

/**
 * @ClassName LRESimClient
 * @Author: wkx
 * @Date: 2019/7/24 13:15
 * @Version: v1.0
 * @Description: 调用液发仿真API的feign接口
 */
@FeignClient(value = "lre-simulation")
public interface LRESimClient {

    @PostMapping("constDualSystemSim")
    Map<String, List> getDualSystemSimResult(ConstantSystemDTO constantSystemDTO);

    @PostMapping("constDualSystemSim")
    Map<String, List<Double>> constDualSystemSim(ConstantSystemDTO constantSystemDTO);

    @PostMapping("gasBottleSim")
    Map<String, List<Double>> gasBottleSim(ConstantSystemDTO constantSystemDTO);

    @PostMapping("reduceValveSim")
    Map<String, List<Double>> reduceValveSim(ConstantSystemDTO constantSystemDTO);

    @PostMapping("liquidTankSim")
    Map<String, List<Double>> liquidTankSim(ConstantSystemDTO constantSystemDTO);

    @PostMapping("solenoidSim")
    Map<String, List<Double>> solenoidSim(ConstantSystemDTO constantSystemDTO);

    @PostMapping("thrustChamberSim")
    Map<String, List<Double>> thrustChamberSim(ConstantSystemDTO constantSystemDTO);
}
