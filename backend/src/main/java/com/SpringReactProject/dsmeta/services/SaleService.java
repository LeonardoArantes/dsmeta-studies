package com.SpringReactProject.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SpringReactProject.dsmeta.entity.Sales;
import com.SpringReactProject.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public List<Sales> findSale() {
		return repository.findAll();
	}
	
	
}
