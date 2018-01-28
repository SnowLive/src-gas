package org.decade.gas.test;

import org.decade.gas.biz.PowersBiz;
import org.decade.gas.convert.DepartmentConvert;
import org.decade.gas.convert.PowersConvert;
import org.decade.gas.entity.admin.BFRoleEntity;
import org.decade.gas.entity.admin.PrivilegeEntity;
import org.decade.gas.entity.index.DeclaresEntity;
import org.decade.gas.mapper.admin.BFRoleMapper;
import org.decade.gas.mapper.admin.PrivilegeMapper;
import org.decade.gas.mapper.index.*;
import org.decade.gas.utils.JsonSimpleUtils;
import org.decade.gas.utils.UUIDFactory;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

/**
 * Class For:
 *
 * @auther: decade
 * @date: 17-12-26
 */
public class MapperTest {
    public void test() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        BFRoleMapper mapper = (BFRoleMapper) context.getBean("BFRoleMapper");
        mapper.listAll().forEach(entity -> System.out.println(entity));
        //{"name":"部门领导","info":"","state":1}
        String jsonStr = "{\"name\":\"部门领导\",\"info\":\"\",\"state\":1}";
        BFRoleEntity entity = JsonSimpleUtils.str2Obj(jsonStr, BFRoleEntity.class);
        entity.setRoleId(UUIDFactory.createUUID());
        System.out.println("insert:" + mapper.insert(entity));
        mapper.listAll().forEach(enti -> System.out.println(enti));
    }

    public void insertPrivilege() {
        String str = "[\n" +
                "  {\"name\": \"c_new\", \"resume\": \"增加新闻\", \"state\": 1}, {\"name\": \"r_new\", \"resume\": \"查询新闻\", \"state\": 1}, {\"name\": \"u_new\", \"resume\": \"更新新闻\", \"state\": 1}, {\"name\": \"d_new\", \"resume\": \"删除新闻\", \"state\": 1},\n" +
                "  {\"name\": \"c_notice\", \"resume\": \"增加公告\", \"state\": 1}, {\"name\": \"r_notice\", \"resume\": \"查询公告\", \"state\": 1}, {\"name\": \"u_notice\", \"resume\": \"更新公告\", \"state\": 1}, {\"name\": \"d_notice\", \"resume\": \"删除公告\", \"state\": 1},\n" +
                "  {\"name\": \"c_policy\", \"resume\": \"增加政策法规\", \"state\": 1}, {\"name\": \"r_policy\", \"resume\": \"查询政策法规\", \"state\": 1}, {\"name\": \"u_policy\", \"resume\": \"更新政策法规\", \"state\": 1}, {\"name\": \"d_policy\", \"resume\": \"删除政策法规\", \"state\": 1},\n" +
                "  {\"name\": \"c_department\", \"resume\": \"增加政府部门\", \"state\": 1}, {\"name\": \"r_department\", \"resume\": \"查询政府部门\", \"state\": 1}, {\"name\": \"u_department\", \"resume\": \"更新政府部门\", \"state\": 1}, {\"name\": \"d_department\", \"resume\": \"删除政府部门\", \"state\": 1},\n" +
                "  {\"name\": \"c_official\", \"resume\": \"增加公职人员\", \"state\": 1}, {\"name\": \"r_official\", \"resume\": \"查询公职人员\", \"state\": 1}, {\"name\": \"u_official\", \"resume\": \"更新公职人员\", \"state\": 1}, {\"name\": \"d_official\", \"resume\": \"删除公职人员\", \"state\": 1},\n" +
                "  {\"name\": \"c_power\", \"resume\": \"增加行政职权\", \"state\": 1}, {\"name\": \"r_power\", \"resume\": \"查询行政职权\", \"state\": 1}, {\"name\": \"u_power\", \"resume\": \"更新行政职权\", \"state\": 1}, {\"name\": \"d_power\", \"resume\": \"删除行政职权\", \"state\": 1},\n" +
                "  {\"name\": \"c_declare\", \"resume\": \"增加在线申报\", \"state\": 1}, {\"name\": \"r_declare\", \"resume\": \"查询在线申报\", \"state\": 1}, {\"name\": \"u_declare\", \"resume\": \"更新在线申报\", \"state\": 1}, {\"name\": \"d_declare\", \"resume\": \"删除在线申报\", \"state\": 1},\n" +
                "  {\"name\": \"c_guide\", \"resume\": \"增加办事指南\", \"state\": 1}, {\"name\": \"r_guide\", \"resume\": \"查询办事指南\", \"state\": 1}, {\"name\": \"u_guide\", \"resume\": \"更新办事指南\", \"state\": 1}, {\"name\": \"d_guide\", \"resume\": \"删除办事指南\", \"state\": 1},\n" +
                "  {\"name\": \"c_public\", \"resume\": \"增加公众信息\", \"state\": 1}, {\"name\": \"r_public\", \"resume\": \"查询公众信息\", \"state\": 1}, {\"name\": \"u_public\", \"resume\": \"更新公众信息\", \"state\": 1}, {\"name\": \"d_public\", \"resume\": \"删除公众信息\", \"state\": 1},\n" +
                "  {\"name\": \"c_focus\", \"resume\": \"增加热点访谈\", \"state\": 1}, {\"name\": \"r_focus\", \"resume\": \"查询热点访谈\", \"state\": 1}, {\"name\": \"u_focus\", \"resume\": \"更新热点访谈\", \"state\": 1}, {\"name\": \"d_focus\", \"resume\": \"删除热点访谈\", \"state\": 1},\n" +
                "  {\"name\": \"c_question\", \"resume\": \"增加常见问题\", \"state\": 1}, {\"name\": \"r_question\", \"resume\": \"查询常见问题\", \"state\": 1}, {\"name\": \"u_question\", \"resume\": \"更新常见问题\", \"state\": 1}, {\"name\": \"d_question\", \"resume\": \"删除常见问题\", \"state\": 1},\n" +
                "  {\"name\": \"c_survey\", \"resume\": \"增加网上调查\", \"state\": 1}, {\"name\": \"r_survey\", \"resume\": \"查询网上调查\", \"state\": 1}, {\"name\": \"u_survey\", \"resume\": \"更新网上调查\", \"state\": 1}, {\"name\": \"d_survey\", \"resume\": \"删除网上调查\", \"state\": 1}\n" +
                "]";
        List<PrivilegeEntity> list = JsonSimpleUtils.str2ListObj(str, PrivilegeEntity.class);
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        PrivilegeMapper mapper = (PrivilegeMapper) context.getBean("privilegeMapper");
        int id = 1;
        for (PrivilegeEntity entity : list) {
            entity.setId(id++);
            entity.setPrivilegeId(UUIDFactory.createUUID());
            System.out.println("insert info:" + mapper.insert(entity));
        }
        mapper.listAll().forEach(entity -> System.out.println(entity.getResume()));
    }

    public void lk_pr() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        BFRoleMapper mapperr = (BFRoleMapper) context.getBean("BFRoleMapper");
        PrivilegeMapper mapperp = (PrivilegeMapper) context.getBean("privilegeMapper");
        BFRoleEntity role = new BFRoleEntity();
        role.setName("公职人员");
        role = mapperr.select(role);
        //为管理员添加所有权限:
        //1. 获取所有权限,依次执行,mapperr.addprivilege方法
        List<PrivilegeEntity> privilegeList = mapperp.listAll();
        BFRoleEntity finalRole = role;
        privilegeList.forEach(entity -> {
            mapperr.addPrivilege(UUIDFactory.createUUID(), finalRole, entity);
        });
    }

    public void testS() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        PrivilegeMapper mapperp = (PrivilegeMapper) context.getBean("privilegeMapper");
        BFRoleMapper mapperr = (BFRoleMapper) context.getBean("BFRoleMapper");
        BFRoleEntity role = new BFRoleEntity();
        role.setName("部门领导");
        role = mapperr.select(role);
        PrivilegeEntity privilege = new PrivilegeEntity();
        String[] strarr = {"政府部门"};
        String tag = null;
        for (String s : strarr) {
            tag = "%" + s + "%";
            privilege.setResume(tag);
            privilege.setName("r%");
            privilege = mapperp.select(privilege);
            mapperr.addPrivilege(UUIDFactory.createUUID(), role, privilege);
            privilege.setResume(tag);
            privilege.setName("u%");
            privilege = mapperp.select(privilege);
            mapperr.addPrivilege(UUIDFactory.createUUID(), role, privilege);
//            privilege.setResume(tag);
//            privilege.setName("c%");
//            privilege = mapperp.select(privilege);
//            mapperr.addPrivilege(UUIDFactory.createUUID(), role, privilege);
//            privilege.setResume(tag);
//            privilege.setName("d%");
//            privilege = mapperp.select(privilege);
//            mapperr.addPrivilege(UUIDFactory.createUUID(), role, privilege);
        }
    }

    public void testpr() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        BFRoleMapper mapper = (BFRoleMapper) context.getBean("BFRoleMapper");
        BFRoleEntity role = new BFRoleEntity();
        role.setName("管理员");
        mapper.selectWithPrivilege(role).forEach(entity -> System.out.println(entity));
    }

    public void testuser() {
        ClassPathXmlApplicationContext content =
                new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        FocusMapper mapper = (FocusMapper) content.getBean("focusMapper");
        mapper.listAll().forEach(ent -> System.out.println(ent.getContent()));
    }

    public void testPublic() {
        ClassPathXmlApplicationContext content =
                new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        PublicMapper mapper = (PublicMapper) content.getBean("publicMapper");
        mapper.listAll().forEach(ent -> System.out.println(ent.getRole().getName()));
    }

    public void testDepartment() {
        ClassPathXmlApplicationContext content =
                new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        DepartmentMapper mapper = (DepartmentMapper) content.getBean("departmentMapper");
        DepartmentConvert.enList2BeanList(mapper.listAll()).forEach(bean -> {
            System.out.println(bean.getContact().getPhone());
        });
    }

    public void testPowers() {
        ClassPathXmlApplicationContext content =
                new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        PowersMapper mapper = (PowersMapper) content.getBean("powersMapper");
        PowersConvert.enList2BeanList(mapper.listAll()).forEach(bean -> {
            System.out.println(bean.getTitle());
        });
    }

    public void testPowerBiz() {
        ClassPathXmlApplicationContext content =
                new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        PowersBiz biz = (PowersBiz) content.getBean("powersBizImpl");
        System.out.println(JsonSimpleUtils.obj2Str(biz.searchPowersByTitle("中标人")));
    }

    @Test
    public void testMapper() {
        ClassPathXmlApplicationContext content =
                new ClassPathXmlApplicationContext("config/spring/applicationContext.xml");
        DeclaresMapper biz = (DeclaresMapper) content.getBean("declaresMapper");
        DeclaresEntity entity = new DeclaresEntity();
        entity.setDeclareId(UUIDFactory.createUUID());
        entity.setPublicId("bfcd8a4bfdbd4f6bb05626d6dd538d73");
        entity.setDepartmentId("91255833230d465e89c191187c9f703b");
        entity.setTitle("测试用例");
        entity.setInfo("something");
        entity.setDeclareState(0);
        System.out.println(JsonSimpleUtils.obj2Str(entity));
        System.out.println(biz.insert(entity));
//        System.out.println(JsonSimpleUtils.obj2Str(biz.search(entity)));
    }

}
