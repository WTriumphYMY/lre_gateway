package cn.edu.nwpu.lre_gateway.client;

import cn.edu.nwpu.lre_gateway.domain.dto.ConstantSystemDTO;
import cn.edu.nwpu.lre_gateway.domain.dto.ReduceValveDTO;
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
@FeignClient(value = "lre-reducevalve")
public interface ReduceValveClient {

    @PostMapping("reduceValveSim")
    Map<String, List<Double>> reduceValveSim(ReduceValveDTO reduceValveDTO);

    @PostMapping("saveReduceValve")
    void saveReduceValve(ReduceValveDTO reduceValveDTO);

    @PostMapping("/findReduceValveByName")
    ReduceValveDTO getReduceValve(String reduceName);

    @PostMapping("/findAllReduceValve")
    List<ReduceValveDTO> findAllReduceValve();
}
