package cn.edu.nwpu.lre_gateway.dto;

/**
 * @ClassName LiquidTankDTO
 * @Author: wkx
 * @Date: 2019/7/24 14:37
 * @Version: v1.0
 * @Description: 液体贮箱数据传输类
 */
public class LiquidTankDTO {
    private String fuelTankCA;
    private String fuelTankV0;
    private String fuelTankPressure;
    private String fuelTankLiquid;

    public String getFuelTankCA() {
        return fuelTankCA;
    }

    public void setFuelTankCA(String fuelTankCA) {
        this.fuelTankCA = fuelTankCA;
    }

    public String getFuelTankV0() {
        return fuelTankV0;
    }

    public void setFuelTankV0(String fuelTankV0) {
        this.fuelTankV0 = fuelTankV0;
    }

    public String getFuelTankPressure() {
        return fuelTankPressure;
    }

    public void setFuelTankPressure(String fuelTankPressure) {
        this.fuelTankPressure = fuelTankPressure;
    }

    public String getFuelTankLiquid() {
        return fuelTankLiquid;
    }

    public void setFuelTankLiquid(String fuelTankLiquid) {
        this.fuelTankLiquid = fuelTankLiquid;
    }
}
