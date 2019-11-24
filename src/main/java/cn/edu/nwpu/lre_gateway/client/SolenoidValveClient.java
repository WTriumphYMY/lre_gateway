package cn.edu.nwpu.lre_gateway.client;

import cn.edu.nwpu.lre_gateway.domain.dto.ConstantSystemDTO;
import cn.edu.nwpu.lre_gateway.domain.dto.SolenoidDTO;
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
@FeignClient(value = "lre-solenoid")
public interface SolenoidValveClient {

    @PostMapping("solenoidSim")
    Map<String, List<Double>> solenoidSim(SolenoidDTO solenoidDTO);

    @PostMapping("saveSolenoid")
    void saveSolenoid(SolenoidDTO solenoidDTO);

    @PostMapping("findSolenoidByName")
    public SolenoidDTO findSolenoidByName(String solenoidName);

    @PostMapping("findAllSolenoid")
    public List<SolenoidDTO> findAllSolenoid();
}
