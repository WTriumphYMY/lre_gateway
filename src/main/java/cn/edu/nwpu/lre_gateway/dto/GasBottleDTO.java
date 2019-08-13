package cn.edu.nwpu.lre_gateway.dto;

/**
 * @ClassName GasBottleDTO
 * @Author: wkx
 * @Date: 2019/7/24 14:01
 * @Version: v1.0
 * @Description: 气瓶仿真数据传输类
 */
public class GasBottleDTO {
    private String bottleVol;
    private String bottleCA;
    private String bottlePressure;
    private String bottleTemperature;
    private String bottleGas;

    public String getBottleVol() {
        return bottleVol;
    }

    public void setBottleVol(String bottleVol) {
        this.bottleVol = bottleVol;
    }

    public String getBottleCA() {
        return bottleCA;
    }

    public void setBottleCA(String bottleCA) {
        this.bottleCA = bottleCA;
    }

    public String getBottlePressure() {
        return bottlePressure;
    }

    public void setBottlePressure(String bottlePressure) {
        this.bottlePressure = bottlePressure;
    }

    public String getBottleTemperature() {
        return bottleTemperature;
    }

    public void setBottleTemperature(String bottleTemperature) {
        this.bottleTemperature = bottleTemperature;
    }

    public String getBottleGas() {
        return bottleGas;
    }

    public void setBottleGas(String bottleGas) {
        this.bottleGas = bottleGas;
    }
}
