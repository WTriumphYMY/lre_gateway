package cn.edu.nwpu.lre_gateway.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * @ClassName IndexController
 * @Author: wkx
 * @Date: 2019/7/11 20:16
 * @Version: v1.0
 * @Description: 用来显示页面的控制类
 */
@Controller
public class IndexController {

    @GetMapping("/index")
    public String showIndex(){
        return "index";
    }

    @GetMapping("/lreTwoCompo")
    public String showConstantTwo(){
        return "lre-constant-two-component";
    }

    @GetMapping("/gasBottle")
    public String showGasBottle(){
        return "gasbottle";
    }

    @GetMapping("/reduceValve")
    public String showReduceValve(){
        return "reducevalve";
    }

    @GetMapping("/liquidTank")
    public String showLiquidTank(){
        return "liquidtank";
    }

    @GetMapping("/solenoid")
    public String showSolenoid(){
        return "solenoid";
    }

    @GetMapping("/thrustChamber")
    public String showThrustChamber(){
        return "thrustchamber";
    }

    @GetMapping("/monteSystem")
    public String showMonteSystem(){
        return "lre-constant-two-montecarlo";
    }

}
