package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import net.javaguides.springboot.service.FileStorageService;

import java.io.IOException;

@RestController
@RequestMapping("/api/files")
public class FileController {

    @Autowired
    private FileStorageService fileStorageService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/upload/{userid}")
    public String handleFileUpload(@RequestParam("file") MultipartFile file, @PathVariable long userid) {
        try {
            String result = fileStorageService.storeFile(file, userid);
            return result;
        } catch (IOException e) {
            return "Error uploading file: " + e.getMessage();
        }
    }
}
