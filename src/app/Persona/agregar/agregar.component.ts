import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Customer } from 'src/app/Modelo/Customer';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  
  cust: Customer = new Customer();
  
  save(){
  	this.service.saveCustomer(this.cust)
  		.subscribe(data => {
  			alert("New Customer was added successfully!");
  			this.router.navigate(["listar"]);
  		})
  }

}
