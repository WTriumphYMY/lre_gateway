package cn.edu.nwpu.lre_gateway.controller;

import cn.edu.nwpu.lre_gateway.client.*;
import cn.edu.nwpu.lre_gateway.domain.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

/**
 * @ClassName IndexController
 * @Author: wkx
 * @Date: 2019/7/11 20:16
 * @Version: v1.0
 * @Description: 用来显示页面的控制类
 */
@Controller
public class IndexController {

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

    @GetMapping("/index")
    public String showIndex(){
        return "index";
    }

    @GetMapping("/lreTwoCompo")
    public String showConstantTwo(){
        return "lre-constant-two-component";
    }

    @GetMapping("/gasBottle")
    public String showGasBottle(Model model){
        List<GasBottleDTO> gasBottleDTOList = gasBottleClient.findAllGasBottle();
        model.addAttribute("gasBottles", gasBottleDTOList);
        return "gasbottle";
    }

    @GetMapping("/reduceValve")
    public String showReduceValve(Model model){
        List<ReduceValveDTO> reduceValveDTOList = reduceValveClient.findAllReduceValve();
        model.addAttribute("reduceValves", reduceValveDTOList);
        return "reducevalve";
    }

    @GetMapping("/liquidTank")
    public String showLiquidTank(Model model){
        List<LiquidTankDTO> liquidTankDTOList = liquidTankClient.findAllLiquidTank();
        model.addAttribute("liquidTanks", liquidTankDTOList);
        return "liquidtank";
    }

    @GetMapping("/solenoid")
    public String showSolenoid(Model model){
        List<SolenoidDTO> solenoidDTOList = solenoidValveClient.findAllSolenoid();
        model.addAttribute("solenoidValves", solenoidDTOList);
        return "solenoid";
    }

    @GetMapping("/thrustChamber")
    public String showThrustChamber(Model model){
        List<ThrustChamberDTO> thrustChamberDTOList = thrustChamberClient.findAllThrustChamber();
        model.addAttribute("thrustChambers", thrustChamberDTOList);
        return "thrustchamber";
    }

    @GetMapping("/monteSystem")
    public String showMonteSystem(){
        return "lre-constant-two-montecarlo";
    }

}
