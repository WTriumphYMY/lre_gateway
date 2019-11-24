package cn.edu.nwpu.lre_gateway.client;

import cn.edu.nwpu.lre_gateway.domain.dto.ThrustChamberDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Map;

/**
 * @InterfaceName GasBottleClient
 * @Author: wkx
 * @Date: 2019/10/29 16:21
 * @Version: v1.0
 * @Description:
 */
@FeignClient(value = "lre-thrustchamber")
public interface ThrustChamberClient {

    @PostMapping("thrustChamberSim")
    Map<String, List<Double>> thrustChamberSim(ThrustChamberDTO thrustChamberDTO);

    @PostMapping("saveThrustChamber")
    void saveThrustChamber(ThrustChamberDTO thrustChamberDTO);

    @PostMapping("findThrustChamberByName")
    ThrustChamberDTO findThrustChamberByName(String thrustChamberName);

    @PostMapping("findAllThrustChamber")
    List<ThrustChamberDTO> findAllThrustChamber();
}
