package cn.edu.nwpu.lre_gateway.client;

import cn.edu.nwpu.lre_gateway.domain.dto.ConstantSystemDTO;
import cn.edu.nwpu.lre_gateway.domain.dto.GasBottleDTO;
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
@FeignClient(value = "lre-gasbottle")
public interface GasBottleClient {
    @PostMapping("/gasBottleSim")
    Map<String, List<Double>> gasBottleSim(GasBottleDTO gasBottleDTO);

    @PostMapping("/saveGasBottle")
    void saveGasBottle(GasBottleDTO gasBottleDTO);

    @PostMapping("/findGasBottleByName")
    GasBottleDTO getGasBottle(String gasbottleName);

    @PostMapping("/findAllGasBottle")
    List<GasBottleDTO> findAllGasBottle();
}
