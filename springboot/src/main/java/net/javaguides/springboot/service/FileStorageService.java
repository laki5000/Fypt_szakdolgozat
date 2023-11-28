package net.javaguides.springboot.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

@Service
public class FileStorageService {

    @Value("${frontend.upload.path}")
    private String uploadPath;

    public String storeFile(MultipartFile file, long userid) throws IOException {
        if (file.getOriginalFilename().toLowerCase().endsWith(".jpg")) {
            String fileName = userid + ".jpg";
            Path filePath = Path.of(uploadPath).resolve(fileName);
            if (Files.exists(filePath)) {
                Files.delete(filePath);
            }
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            return "success";
        } else {
            return "error";
        }
    }

}