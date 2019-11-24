package cn.edu.nwpu.lre_gateway.client;

import cn.edu.nwpu.lre_gateway.domain.dto.ConstantSystemDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.Map;

/**
 * @InterfaceName LreSystemSimClient
 * @Author: wkx
 * @Date: 2019/10/23 18:36
 * @Version: v1.0
 * @Description:
 */
@FeignClient(value = "lre-system")
public interface LreSystemSimClient {
    @PostMapping("constDualSystemSim")
    Map<String, List<Double>> constDualSystemSim(ConstantSystemDTO constantSystemDTO);
}
