package cn.edu.nwpu.lre_gateway.client;

import cn.edu.nwpu.lre_gateway.domain.dto.LiquidTankDTO;
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
@FeignClient(value = "lre-liquidtank")
public interface LiquidTankClient {

    @PostMapping("liquidTankSim")
    Map<String, List<Double>> liquidTankSim(LiquidTankDTO liquidTankDTO);

    @PostMapping("saveLiquidTank")
    void saveLiquidTank(LiquidTankDTO liquidTankDTO);

    @PostMapping("findLiquidTankByName")
    LiquidTankDTO findLiquidTankByName(String liquidTankName);

    @PostMapping("findAllLiquidTank")
    List<LiquidTankDTO> findAllLiquidTank();
}
