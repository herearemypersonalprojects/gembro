package net.tubizou.gembro.domain.good;

import javax.persistence.*;
import java.sql.Date;

/**
 * Created by quocanh on 23/06/15.
 * <p>
 * Contact: ing.dev.java@gmail.com
 */
@Entity
@NamedQuery(name = "Property.findByCity", query = "select p from Property p where p.city = :city")
@Table(name = "LOC_BIEN")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false) Long id;

    @Column(name = "id_proprietaire") Long idOwner;

    @Column(name = "type") @Enumerated(EnumType.STRING) TypeProperty typeProperty;

    @Column(name = "adresse")  String address;

    @Column(name = "cp") Integer postalCode;

    @Column(name = "ville") String city;

    @Column(name = "batiment") String building;

    @Column(name = "etage") String floor;

    @Column(name = "escalier") String stairway;

    @Column(name = "porte") String door;

    @Column(name = "lot") String lot;

    @Column(name ="nb_pieces") Integer nbRooms;

    @Column(name = "nb_grandes_pieces") Integer nbBigRooms;

    @Column(name = "veranda") Boolean veranda;

    @Column(name = "surface") Double area;

    @Column(name = "chauffage_individuel_gaz") Boolean gasHeating;

    @Column(name = "CHAUDIERE_GAZ_ELECTRIQUE_INDIVIDUELLE") Boolean electricHeating;

    @Column(name = "CHEMINEE") Boolean fireplace;

    @Column(name ="NUMERATEUR") Integer numerator;

    @Column(name = "DENOMINATEUR") Integer denumerator;

    @Column(name = "PARKING_BOX") String parkingBox;

    @Column(name = "CAVE") String cave;

    @Column(name = "INFOS_COMPLEMENTAIRES") String moreInfos;

    @Column(name = "CREATED_DATE") Date createdDate;

    @Column(name = "UPDATED_DATE") Date updateDate;

    // ------------------------
    // PUBLIC METHODS
    // ------------------------


    public Long getIdOwner() {
        return idOwner;
    }

    public void setIdOwner(Long idOwner) {
        this.idOwner = idOwner;
    }

    @Enumerated(EnumType.STRING)
    public TypeProperty getTypeProperty() {    return typeProperty;    }

    public void setTypeProperty(TypeProperty typeProperty) {      this.typeProperty = typeProperty;    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(Integer postalCode) {
        this.postalCode = postalCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public String getStairway() {
        return stairway;
    }

    public void setStairway(String stairway) {
        this.stairway = stairway;
    }

    public String getDoor() {
        return door;
    }

    public void setDoor(String door) {
        this.door = door;
    }

    public String getLot() {
        return lot;
    }

    public void setLot(String lot) {
        this.lot = lot;
    }

    public Integer getNbRooms() {
        return nbRooms;
    }

    public void setNbRooms(Integer nbRooms) {
        this.nbRooms = nbRooms;
    }

    public Integer getNbBigRooms() {
        return nbBigRooms;
    }

    public void setNbBigRooms(Integer nbBigRooms) {
        this.nbBigRooms = nbBigRooms;
    }

    public Boolean getVeranda() {
        return veranda;
    }

    public void setVeranda(Boolean veranda) {
        this.veranda = veranda;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Boolean getGasHeating() {
        return gasHeating;
    }

    public void setGasHeating(Boolean gasHeating) {
        this.gasHeating = gasHeating;
    }

    public Boolean getElectricHeating() {
        return electricHeating;
    }

    public void setElectricHeating(Boolean electricHeating) {
        this.electricHeating = electricHeating;
    }

    public Boolean getFireplace() {
        return fireplace;
    }

    public void setFireplace(Boolean fireplace) {
        this.fireplace = fireplace;
    }

    public Integer getNumerator() {
        return numerator;
    }

    public void setNumerator(Integer numerator) {
        this.numerator = numerator;
    }

    public Integer getDenumerator() {
        return denumerator;
    }

    public void setDenumerator(Integer denumerator) {
        this.denumerator = denumerator;
    }

    public String getParkingBox() {
        return parkingBox;
    }

    public void setParkingBox(String parkingBox) {
        this.parkingBox = parkingBox;
    }

    public String getCave() {
        return cave;
    }

    public void setCave(String cave) {
        this.cave = cave;
    }

    public String getMoreInfos() {
        return moreInfos;
    }

    public void setMoreInfos(String moreInfos) {
        this.moreInfos = moreInfos;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
