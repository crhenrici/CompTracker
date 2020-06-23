package com.cristian.CTServer.model;

import com.google.common.base.Preconditions;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Computer {

    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Getter
    @Setter
    private String computerName;
    @Getter
    @Setter
    private String description;
    @Getter
    @Setter
    private String userName;
    @Getter
    @Setter
    private String userSurname;
    @Getter
    @Setter
    private String winVersion;
    @Getter
    @Setter
    private Date lastUpdate;
    @Getter
    @Setter
    private Boolean domainMigration;

    public Computer() {

    }

    public Computer(long id, String computerName, String desc, String userName, String userSurname, String winVersion, Date lastUpdate, Boolean domainMigration) {
        this.computerName = Preconditions.checkNotNull(computerName, "computerName is not set");
        this.description = desc;
        this.userName = Preconditions.checkNotNull(userName, "userName is not set");
        this.userSurname = Preconditions.checkNotNull(userSurname, "userSurname is not set");
        this.winVersion = winVersion;
        this.lastUpdate = lastUpdate;
        this.domainMigration = domainMigration;
    }

    public String toString() {
        return "Computer{" +
                "id=" + id +
                ", computerName='" + computerName + '\'' +
                ", description='" + description + '\'' +
                ", userName='" + userName + '\'' +
                ", userSurname='" + userSurname + '\'' +
                ", winVersion='" + winVersion + '\'' +
                ", lastUpdate=" + lastUpdate +
                ", domainMigration=" + domainMigration +
                '}';
    }
}
