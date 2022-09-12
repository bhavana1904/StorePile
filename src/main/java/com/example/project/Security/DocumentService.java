package com.example.project.Security;

import java.io.IOException;
import java.util.stream.Stream;


import com.example.project.Domain.DocumentModel;
import com.example.project.Repository.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
@Service
public class DocumentService {
    //Service file as of created Document Endpoint
    @Autowired
    private DocumentRepository documentRepository;
    public DocumentModel store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        DocumentModel FileDB = new DocumentModel(fileName,file.getContentType(),file.getBytes());
        return documentRepository.save(FileDB);
    }
    public DocumentModel getFile(String id) {
        return documentRepository.findById(id).get();
    }

    public Stream<DocumentModel> getAllFiles() {
        return documentRepository.findAll().stream();
    }
}