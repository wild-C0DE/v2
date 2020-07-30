// import { Component } from '@angular/core';
// import { ServerDataSource } from 'ng2-smart-table';
// import {HttpErrorResponse} from '@angular/common/http';
// import { HttpClient } from '@angular/common/http'

// import { SmartTableData } from '../../../@core/data/smart-table';

// @Component({
//   selector: 'ngx-smart-table',
//   templateUrl: './assign.component.html',
//   styleUrls: ['./assign.component.scss'],
// })
// export class AssignComponent {
//   source:ServerDataSource;
//   settings = {
//     add: {
//       addButtonContent: '<i class="nb-plus"></i>',
//       createButtonContent: '<i class="nb-checkmark"></i>',
//       cancelButtonContent: '<i class="nb-close"></i>',
//       confirmCreate:true,
//     },
//     edit: {
//       editButtonContent: '<i class="nb-edit"></i>',
//       saveButtonContent: '<i class="nb-checkmark"></i>',
//       cancelButtonContent: '<i class="nb-close"></i>',
//       confirmSave:true,
//     },
//     delete: {
//       deleteButtonContent: '<i class="nb-trash"></i>',
//       confirmDelete: true,
//     },
//     columns: {
   
//       name: {
//         title: 'Name',
//         type: 'string',
//       },
//       family: {
//         title: 'Family',
//         type: 'string',
//       },
//       reference: {
//         title: 'Reference',
//         type: 'string',
//       },
//       state: {
//         title: 'State',
//         type: 'string',
//       },
//       sname: {
//         title: 'Supplier Name',
//         type: 'string',
//       },
//       scontact: {
//         title: 'Supplier Contact',
//         type: 'string',
//       },
//       date: {
//         title: 'Date',
//         type: 'number',
//       },

//       isbn: {
//         title: 'ISBN',
//         type: 'string',
//       },
//       department: {
//         title: 'Department',
//         type: 'string',
//       },
//       comment: {
//         title: 'Comment',
//         type: 'string',
//       },
//     },
//   };

//   constructor(private http: HttpClient) {
//     // const data = this.service.getData();
//     // this.source.load(data);
//   }
//   ngOnInit(): void {
//     this.source = new ServerDataSource(this.http, {endPoint : 'http://localhost:8080/api/assignList' })
//     console.log(this.source);

// }
// onCreateConfirm(event):void { 
//   var data = {
//                 "img" : event.newData.img,
//                 "name" : event.newData.name,
//                 "reference" : event.newData.reference,
//                 "quantity" : event.newData.quantity,
//                 "state" : event.newData.state,
//                 "brand" : event.newData.brand,
//                 "supplierName" : event.newData.supplierName,
//                 "supplierContact" : event.newData.supplierContact,
//                 "dateOfUse" : event.newData.dateOfUse,
//                 "isbn" : event.newData.isbn,
//                 "department" : event.newData.department,               
//                 "image" : event.newData.image,
                
//                 };
// 	this.http.post<EquipmentModel>('http://localhost:8080/api/addEquipment', data).subscribe(
//         res => {
//           console.log(res);
//           event.confirm.resolve(event.newData);
//       },
//       (err: HttpErrorResponse) => {
//         if (err.error instanceof Error) {
//           console.log("Client-side error occured.");
//         } else {
//           console.log("Server-side error occured.");
//         }
//       });
// } 
// onSaveConfirm(event):void {
  
//   var data = {
//   "helper" : event.data._id,
//   "nameOfEquipment" : event.newData.nameOfEquipment,
//   "machnameOfAgentine" : event.newData.machnameOfAgentine,
//   "reference" : event.newData.reference,
//   "quantity" : event.newData.quantity,
//   "state" : event.newData.state,
//   "brand" : event.newData.brand,
//   "supplierName" : event.newData.supplierName,
//   "supplierContact" : event.newData.supplierContact,
//   "dateOfUse" : event.newData.dateOfUse,
//   "isbn" : event.newData.isbn,
//   "department" : event.newData.department,               
//   "image" : event.newData.image,
  
//   };
//   console.log(typeof event.newData.brand)
//  if (event.newData.name === "") {
//   window.confirm('please enter the name of the machin')
  
// } else if (event.newData.reference === "") {

//   window.confirm('please enter the reference of the machin')
// }else if(event.newData.department === "") {
//     window.confirm('please enter the department of the machin')   
  
//   }else {
//   if (window.confirm('Do you confirm the changes?')) {
// this.http.post<EquipmentModel>('http://localhost:8080/api/updateEquipment', data).subscribe(
// res => {
// console.log(res);
// event.confirm.resolve(event.newData);
// },
// (err: HttpErrorResponse) => {
// if (err.error instanceof Error) {
// console.log("Client-side error occured.");
// } else {
// console.log("Server-side error occured.");
// }
// });
// location.reload()
//   } else {
//     event.confirm.reject();
//   }
// }

// }
//   onDeleteConfirm(event): void {
//     console.log(event.data)
//     this.http.post<EquipmentModel>('http://localhost:8080/api/deleteEquipment',event.data).subscribe(
//       res => {
//         console.log(res);
//         event.confirm.resolve(event.source.data);
//     },
//     (err: HttpErrorResponse) => {
//       if (err.error instanceof Error) {
//         console.log("Client-side error occured.");
//       } else {
//         console.log("Server-side error occured.");
//       }
//     });
   
// }
// }