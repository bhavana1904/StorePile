package com.example.project.Domain;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Autowired;


@Data
@Entity

@Table(name = "files")
public class DocumentModel {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    // The Model for Documents
    private String docid;
    private String name;
    private String type;
    @Lob
    private byte[] data;


    public DocumentModel() {
    }

    public DocumentModel(String name, String type, byte[] data) {

        this.name = name;
        this.type = type;
        this.data = data;

    }
    @ManyToOne
    @JoinColumn(name = "id" , referencedColumnName = "id")
    private User user;

    public String getDocid() {
        return docid;
    }

    public void setDocid(String docid) {
        this.docid = docid;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public byte[] getData() {
        return data;
    }
    public void setData(byte[] data) {
        this.data = data;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}