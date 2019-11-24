package cn.edu.nwpu.lre_gateway.client;

import cn.edu.nwpu.lre_gateway.domain.dto.ConstantSystemDTO;
import cn.edu.nwpu.lre_gateway.domain.dto.MonteCarloDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Map;

/**
 * @InterfaceName LreComponentSimClient
 * @Author: wkx
 * @Date: 2019/10/23 18:44
 * @Version: v1.0
 * @Description:
 */
@FeignClient(value = "lre-component")
public interface LreComponentSimClient {
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

    @PostMapping("monteCarloSim")
    Map<String, List<Double>> monteCarloSim(MonteCarloDTO monteCarloDTO);
}
