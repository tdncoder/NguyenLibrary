package com.nguyenLibrary.LibraryProject.dao;

import com.nguyenLibrary.LibraryProject.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    Payment findByUserEmail(String userEmail);

}
