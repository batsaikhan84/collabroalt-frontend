package com.product.api.model;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
public class Product extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "title", nullable = false, unique = true)
    private String title;
    @Column(name = "description", nullable = false)
    private String description;
    @Column(name = "imageLink", nullable = false)
    private String imageLink;
    @Column(name = "availability", nullable = false)
    private ProductStock availability;
    @Column(name = "shipping", nullable = false)
    private String shipping;
    @Column(name = "price", nullable = false)
    private Double price;

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getImageLink() {
        return imageLink;
    }

    public ProductStock getAvailability() {
        return availability;
    }

    public String getShipping() {
        return shipping;
    }

    public Double getPrice() {
        return price;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public void setAvailability(ProductStock availability) {
        this.availability = availability;
    }

    public void setShipping(String shipping) {
        this.shipping = shipping;
    }

    public void setPrice(Double price) {
        this.price = price;
    }
}