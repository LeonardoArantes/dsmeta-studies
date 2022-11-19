package com.SpringReactProject.dsmeta.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.SpringReactProject.dsmeta.entity.Sales;
import com.SpringReactProject.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public Page<Sales> findSales(String minDate, String maxDate, Pageable pageable) {
	
		LocalDate now = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("")? now.minusDays(365) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("")? now : LocalDate.parse(maxDate);
		return repository.findSales(min, max, pageable);
	}	
}
