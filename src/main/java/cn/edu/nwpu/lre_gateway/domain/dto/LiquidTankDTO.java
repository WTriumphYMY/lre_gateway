package cn.edu.nwpu.lre_gateway.domain.dto;

/**
 * @ClassName LiquidTankDTO
 * @Author: wkx
 * @Date: 2019/7/24 14:37
 * @Version: v1.0
 * @Description: 液体贮箱数据传输类
 */
public class LiquidTankDTO {
    private String componentName;
    private String fuelTankCA;
    private String fuelTankV0;
    private String fuelTankPressure;
    private String fuelTankFuel;
    private String bottleGas;

    public String getComponentName() {
        return componentName;
    }

    public void setComponentName(String componentName) {
        this.componentName = componentName;
    }

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

    public String getFuelTankFuel() {
        return fuelTankFuel;
    }

    public void setFuelTankFuel(String fuelTankFuel) {
        this.fuelTankFuel = fuelTankFuel;
    }

    public String getBottleGas() {
        return bottleGas;
    }

    public void setBottleGas(String bottleGas) {
        this.bottleGas = bottleGas;
    }
}
