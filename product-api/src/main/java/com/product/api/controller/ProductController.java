package com.product.api.controller;

import com.product.api.exception.RecordNotFound;
import com.product.api.model.Product;
import com.product.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductRepository productRepository;
    @GetMapping("/products")
    public List<Product> getProducts() {
        return productRepository.findAll();
    }
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable(value = "id") long id) throws RecordNotFound {
        Product product = productRepository.findById(id).orElseThrow(() -> new RecordNotFound("Product not found by ID: " + id));
        return ResponseEntity.ok().body(product);
        };
    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable(value = "id") long id, @RequestBody Product productDetails) {
        Product product = productRepository.findById(id).orElseThrow(() -> new RecordNotFound("Product not found by ID: " + id));
        product.setTitle(productDetails.getTitle());
        product.setDescription(productDetails.getDescription());
        product.setAvailability(productDetails.getAvailability());
        product.setImageLink(productDetails.getImageLink());
        product.setPrice(productDetails.getPrice());
        product.setShipping(productDetails.getShipping());
        final Product updateTeam = productRepository.save(product);
        return ResponseEntity.ok(updateTeam);

    }
}
