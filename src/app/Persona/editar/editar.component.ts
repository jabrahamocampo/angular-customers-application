import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Customer } from 'src/app/Modelo/Customer';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
  
  cust: Customer = new Customer();

  ngOnInit(){
  	this.editCustomer();
  }
  
  editCustomer(){
  	let id = localStorage.getItem("id");
  	this.service.getCustomerById(+id)
  	.subscribe(data => {
  		this.cust = data;
  	})
  }
  
  edit(cust: Customer){
  	this.service.editCustomer(cust)
  		.subscribe(data => {
  		this.cust = data;
  		alert("Record Updated Successfully");
  		this.router.navigate(["listar"]);
  	})
  }

}
