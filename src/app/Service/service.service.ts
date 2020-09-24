import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../Modelo/Customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  listUrl = "http://localhost:8081/api/v1/customerlist";
  saveUrl = "http://localhost:8081/api/v1/newcustomer";
  idUrl = "http://localhost:8081/api/v1/customer";
  editUrl = "http://localhost:8081/api/v1/updatecustomer";
  deleteUrl = "http://localhost:8081/api/v1/deletecustomer";
  
  getCustomers(){
  	return this.http.get<Customer[]>(this.listUrl);
  }
  
  saveCustomer(customer: Customer){
  	return this.http.post<Customer>(this.saveUrl, customer);
  }
  
  getCustomerById(id: number){
  	return this.http.get<Customer>(this.idUrl+"/"+id);
  }
  
  editCustomer(customer: Customer){
  	return this.http.put<Customer>(this.editUrl+"/"+customer.id, customer);
  }
  
  deleteCustomer(customer: Customer){
  	return this.http.delete<Customer>(this.deleteUrl+"/"+customer.id);
  }
  
}
