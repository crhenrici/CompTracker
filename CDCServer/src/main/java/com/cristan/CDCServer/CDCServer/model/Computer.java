package com.cristan.CDCServer.CDCServer.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Computer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String computerName;
    private String description;
    private String userName;
    private String userSurname;
    private String winVersion;
    private Date lastUpdate;
    private Boolean domainMigration;

    public Computer() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getComputerName() {
        return computerName;
    }

    public void setComputerName(String computerName) {
        this.computerName = computerName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public void setUserSurname(String userSurname) {
        this.userSurname = userSurname;
    }

    public String getWinVersion() {
        return winVersion;
    }

    public void setWinVersion(String winVersion) {
        this.winVersion = winVersion;
    }

    public Date getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    public Boolean getDomainMigration() {
        return domainMigration;
    }

    public void setDomainMigration(Boolean domainMigration) {
        this.domainMigration = domainMigration;
    }

    @Override
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
