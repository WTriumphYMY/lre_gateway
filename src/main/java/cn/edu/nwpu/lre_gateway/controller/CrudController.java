package cn.edu.nwpu.lre_gateway.controller;

import cn.edu.nwpu.lre_gateway.client.*;
import cn.edu.nwpu.lre_gateway.domain.dto.*;
import cn.edu.nwpu.lre_gateway.service.ConstantSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * @ClassName CrudController
 * @Author: wkx
 * @Date: 2019/11/4 08:39
 * @Version: v1.0
 * @Description:
 */
@RestController
public class CrudController {

    @Autowired
    private GasBottleClient gasBottleClient;
    @Autowired
    private ReduceValveClient reduceValveClient;
    @Autowired
    private LiquidTankClient liquidTankClient;
    @Autowired
    private SolenoidValveClient solenoidValveClient;
    @Autowired
    private ThrustChamberClient thrustChamberClient;


    @PostMapping("/saveGasBottle")
    public void saveGasBottle(GasBottleDTO gasBottleDTO){
        gasBottleClient.saveGasBottle(gasBottleDTO);
    }


    @PostMapping("/findAllGasBottle")
    public List<GasBottleDTO> findAllGasBottle(){
        return gasBottleClient.findAllGasBottle();
    }

    @PostMapping("/getGasBottle")
    public GasBottleDTO getGasBottle(String bottleName){
        return gasBottleClient.getGasBottle(bottleName);
    }


    @PostMapping("/saveReduceValve")
    void saveReduceValve(ReduceValveDTO reduceValveDTO){
        reduceValveClient.saveReduceValve(reduceValveDTO);
    }

    @PostMapping("/getReduceValve")
    public ReduceValveDTO getReduceValve(String reduceName){
        return reduceValveClient.getReduceValve(reduceName);
    }

    @PostMapping("saveLiquidTank")
    void saveLiquidTank(LiquidTankDTO liquidTankDTO){
        liquidTankClient.saveLiquidTank(liquidTankDTO);
    }

    @PostMapping("getLiquidTank")
    public LiquidTankDTO findLiquidTankByName(String liquidTankName){
        return liquidTankClient.findLiquidTankByName(liquidTankName);
    }

    @PostMapping("saveSolenoid")
    void saveSolenoid(SolenoidDTO solenoidDTO){
        solenoidValveClient.saveSolenoid(solenoidDTO);
    }

    @PostMapping("getSolenoid")
    public SolenoidDTO findSolenoidByName(String solenoidName){
        return solenoidValveClient.findSolenoidByName(solenoidName);
    }

    @PostMapping("saveThrustChamber")
    public void saveThrustChamber(ThrustChamberDTO thrustChamberDTO){
        thrustChamberClient.saveThrustChamber(thrustChamberDTO);
    }

    @PostMapping("getThrustChamber")
    public ThrustChamberDTO findThrustChamberByName(String thrustChamberName){
        return thrustChamberClient.findThrustChamberByName(thrustChamberName);
    }
}
