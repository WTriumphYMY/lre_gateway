package cn.edu.nwpu.lre_gateway.repository;

import cn.edu.nwpu.lre_gateway.domain.po.ConstantSystemPO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @InterfaceName ConstantSystemRepository
 * @Author: wkx
 * @Date: 2019/10/23 09:45
 * @Version: v1.0
 * @Description:
 */
@Repository
public interface ConstantSystemRepository extends JpaRepository<ConstantSystemPO, Integer> {
}
