package com.product.api.exception;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus
public class RecordNotFound extends RuntimeException {
    public RecordNotFound() {
        super();
    }
    public RecordNotFound(String message) {
        super(message);
    }
    public RecordNotFound(String message, Throwable cause) {
        super(message, cause);
    }
}
