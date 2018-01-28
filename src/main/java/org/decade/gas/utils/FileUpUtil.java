package org.decade.gas.utils;

import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.UUID;

/**
 * Class For:
 * 文件上传工具
 *
 * @auther: decade
 * @date: 18-1-26
 */
public class FileUpUtil {

    public static final String UPLOAD_IMG = "/upload/img";
    public static final String UPLOAD_VIDEO = "/upload/video";
    public static final String UPLOAD_DOCU = "/upload/docu";
    private static SimpleDateFormat DATEFORMAT = new SimpleDateFormat("yyyyMMdd");

    /**
     * 文件名唯一化处理，拼接时间加UUID
     * 将文件名格式为yyMMddUUID.fileType的格式
     *
     * @param fileName 文件名
     * @return 处理后的文件名.
     */
    private static String formatFileName(String fileName) {
        String fileNewName = DATEFORMAT.format(new java.util.Date());
        String fileUUID = UUID.randomUUID().toString().replace("-", "");
        Integer fileIndex = fileName.indexOf('.');
        fileNewName += fileUUID + fileName.substring(fileIndex);
        return fileNewName;
    }

    /**
     * 文件上传
     *
     * @param file     文件名
     * @param request  http请求
     * @param filePath 文件存储路径
     * @return url 文件路径
     * @throws IOException io异常.
     */
    public static String upload(MultipartFile file, HttpServletRequest request, String filePath) throws IOException {
        System.out.println("Start UpLoad...");
        //1.获取文件信息
        String fileName = file.getOriginalFilename();
        //2.拼接UUID，构成新的名称，（调用FileNameFormatUtils.formatFileName方法）,
        String fileNewName = FileUpUtil.formatFileName(fileName);
        //3.创建targeFile(获取路径，创建存放数据的空间)
        String fileRealPath = request.getSession().getServletContext().getRealPath(filePath);
        File targetFile = new File(fileRealPath, fileNewName);
        if (!targetFile.exists()) {
            boolean mkRe = targetFile.mkdirs();
        }
        //4.使用transforto(file)进行文件上传。
        file.transferTo(targetFile);
        //5.初始化返回数据
        String url = request.getContextPath() + filePath +'/'+ fileNewName;

        url = "http://"+request.getServerName() +':'+request.getServerPort()+ url;
        System.out.println("End Upload...");
        //6.返回数据
        return url;
    }

    /**
     * 文件删除
     *
     * @param filePath :文件路径
     * @param fileName : 文件名
     * @return
     */
    public static Integer deleteFile(String filePath, String fileName) {
        fileName = filePath + "/" + fileName;
        Integer resultcode = 0;
        File targetFile = new File(fileName);
        if (targetFile.exists() && targetFile.isFile()) {
            if (targetFile.delete()) {
                System.out.println(fileName + ":文件删除成功");
                resultcode = 1;
            } else {
                System.out.println(fileName + ":文件未删除");
            }
        } else {
            System.out.println("file:" + fileName + " is not file or not exist");
        }
        return resultcode;
    }

    /**
     * 获取网络服务器文件绝对路径.
     *
     * @param request  请求.
     * @param filePath 文件存贮路径.
     * @return 拼接完成的路径.
     */
    public static String getfilePath(HttpServletRequest request, String filePath) {
        return request.getSession().getServletContext().getRealPath(filePath);
    }
}
