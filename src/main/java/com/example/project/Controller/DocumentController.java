package com.example.project.Controller;

import com.example.project.Domain.DocumentModel;
import com.example.project.Messages.ResponseFile;
import com.example.project.Security.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders={"Accept"})
@Controller
@RestController
@RequestMapping("/api/users")
public class DocumentController {
    @Autowired
    private DocumentService documentService;
    //To Add Documents-Endpoint
   @PostMapping("/addDocument")
    @ResponseBody
    public String uploadFile(@RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
        documentService.store(file);
        return file.getOriginalFilename();
    }

    //To Get Documents-Endpoint
    @GetMapping("/getDocument")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        List<ResponseFile> files = documentService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/files/")
                    .path(dbFile.getDocid())
                    .toUriString();
            return new ResponseFile(
                    dbFile.getName(),
                    fileDownloadUri,
                    dbFile.getType());
        }).collect(Collectors.toList());
        return ResponseEntity.status(HttpStatus.OK).body(files);
    }
    //To View Documents-Endpoint
    @GetMapping("/getDocument/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        DocumentModel fileDB = documentService.getFile(id);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
                .body(fileDB.getData());
    }

}