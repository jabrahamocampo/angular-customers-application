import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Customer } from 'src/app/Modelo/Customer';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  customers:Customer[];
  customer:Customer = new Customer();
  
  constructor(private service:ServiceService, private router: Router) { }

  ngOnInit(){
  	this.service.getCustomers()
  	.subscribe(data => {
  		this.customers=data;
  	})
  }
  
  edit(customer: Customer){
  	localStorage.setItem("id", customer.id.toString());
  	this.router.navigate(["editar"]);
  }
  
  delete(customer:Customer){
  	this.service.deleteCustomer(customer)
  	.subscribe(data=>{
  		this.customers = this.customers.filter(p => p !== customer);
  		alert("User deleted successfully!");
  	})
  }

}
