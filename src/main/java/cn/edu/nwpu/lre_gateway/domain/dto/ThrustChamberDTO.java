package cn.edu.nwpu.lre_gateway.domain.dto;

/**
 * @ClassName ThrustChamberDTO
 * @Author: wkx
 * @Date: 2019/7/24 15:08
 * @Version: v1.0
 * @Description: 推力室数据传输类
 */
public class ThrustChamberDTO {
    private String componentName;
    private String thrustChamberV;
    private String thrustChamberTauc;
    private String thrustChamberK;
    private String thrustChamberD;
    private String thrustChamberPa;
    private String thrustChamberEps;
    private String globalParasTime;
    private String globalParasStep;

    public String getComponentName() {
        return componentName;
    }

    public void setComponentName(String componentName) {
        this.componentName = componentName;
    }

    public String getThrustChamberV() {
        return thrustChamberV;
    }

    public void setThrustChamberV(String thrustChamberV) {
        this.thrustChamberV = thrustChamberV;
    }

    public String getThrustChamberTauc() {
        return thrustChamberTauc;
    }

    public void setThrustChamberTauc(String thrustChamberTauc) {
        this.thrustChamberTauc = thrustChamberTauc;
    }

    public String getThrustChamberK() {
        return thrustChamberK;
    }

    public void setThrustChamberK(String thrustChamberK) {
        this.thrustChamberK = thrustChamberK;
    }

    public String getThrustChamberD() {
        return thrustChamberD;
    }

    public void setThrustChamberD(String thrustChamberD) {
        this.thrustChamberD = thrustChamberD;
    }

    public String getThrustChamberPa() {
        return thrustChamberPa;
    }

    public void setThrustChamberPa(String thrustChamberPa) {
        this.thrustChamberPa = thrustChamberPa;
    }

    public String getThrustChamberEps() {
        return thrustChamberEps;
    }

    public void setThrustChamberEps(String thrustChamberEps) {
        this.thrustChamberEps = thrustChamberEps;
    }

    public String getGlobalParasTime() {
        return globalParasTime;
    }

    public void setGlobalParasTime(String globalParasTime) {
        this.globalParasTime = globalParasTime;
    }

    public String getGlobalParasStep() {
        return globalParasStep;
    }

    public void setGlobalParasStep(String globalParasStep) {
        this.globalParasStep = globalParasStep;
    }
}
