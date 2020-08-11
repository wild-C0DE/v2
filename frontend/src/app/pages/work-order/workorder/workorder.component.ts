import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { HttpClient } from "@angular/common/http";
import { ServerDataSource } from "ng2-smart-table";
import { HttpErrorResponse } from "@angular/common/http";
import { Addwork } from "../addwork.model";
import {DatepickerComponent} from '../datepicker/datepicker.component'
import * as moment from 'moment';// import {MultiSelComponent} from "./multi-sel/multi-sel.component"
@Component({
  selector: "ngx-smart-table",
  templateUrl: "./workorder.component.html",
  styleUrls: ["./workorder.component.scss"],
})
export class WorkorderComponent {
  data = Array;
  source: ServerDataSource;
  source1  :any ;

  settings :object= {

    // hideSubHeader: true,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      numberOrder: {
        title: "Number Order",
        type: "number",
        filter: false,
      },
      date: {
        title: "Date",
        type: 'html',
        //renderComponent: DatepickerComponent,
        editor: {
          type: 'custom',
          component: DatepickerComponent,
        },
        filter: false,
      },
      nameOfTheIntervention: {
        title: "Name Of The Intervention",
        type: "string",
        filter: false,
      },
      typeOfIntervention: {
        title: "Type Of Intervention",
        type: "string",
        filter: false,
      },
      state: {
        title: "State",
        type: "string",
        filter: false,
      },
      machine: {
        title: "Machine",
        type: "string",
        filter: false,
      },
      manager: {
        title: "Manager",
        type: "string",
        filter: false,
      },
      duration: {
        title: "Previsionnel Duration",
        type: "number",
        filter: false,
      },  
      effectiveDuration: {
        title: "Effective Duration",
        type: "number",
        filter: false,
      },
      // agentName: {
      //   title: "Agent Name",
      //   placeholder:"Select ...",
      //   filter: false,
      //   editor: {
      //     type: 'list',
      //     config: {
      //       selectText: 'Select',
           
      //       list: [
      //         {value: this.source1[0], title:this.source1[0]},
      //         {value: this.source1[1], title:this.source1[1]},         
             
      //       ],
      //     },
        
      //   }
      // },
     
      department: {
        title: "Department",
        type: "string",
        filter: false,
      },
      equipmentUsed: {
        title: "Equipment Used",
        type: "number",
        filter: false,
      },
      

    }
  };

  ngOnInit(): void {
    this.source = new ServerDataSource(this.http, {
      endPoint: "http://localhost:8080/api/workorderList",
    });
  
    this.http.get("http://localhost:8080/api/workOrderselect").subscribe(data=>{  
         
           let helper = []
      this.source1 = data
        for(var i =0 ; i< this.source1.length;i++){
         helper.push({'value' : data[i], title :data[i] })
        }
      
      console.log(this.source1);
      this.settings = {
        // hideSubHeader: true,
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmCreate: true,
        },
        
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
          confirmSave: true,
        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: true,
        },
        columns: {
          numberOrder: {
            title: "Number Order",
            type: "number",
            filter: false,
          },
       
          date: {
            title: "Date",
            type: 'html',
            //renderComponent: DatepickerComponent,
            editor: {
              type: 'custom',
              component: DatepickerComponent,
            },
            filter: false,
          },
          nameOfTheIntervention: {
            title: "Name Of The Intervention",
            type: "string",
            filter: false,
          },
          typeOfIntervention: {
            title: "Type Of Intervention",
            placeholder:"Select ...",
            filter: false,
            editor: {
              type: 'list',
              config: {
                selectText: 'Select',
               
                list: [
                  {value: "Prevention", title:"Prevention"},
                  {value: "Correction", title:"Correction"},
                       
                 
                ],
              },
            
            }
          },
          state: {
            title: "State",
              placeholder:"Select ...",
        filter: false,
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
           
            list: [
              {value: "Enqueue", title:"Enqueue"},
              {value: "Completed", title:"Completed"},
                   
             
            ],
          },
        
        }
          },
          machine: {
            title: "Machine",
            type: "string",
            filter: false,
          },
          manager: {
            title: "Manager",
            type: "string",
            filter: false,
          },
          duration: {
            title: "Previsionnel Duration",
            type: "number",
            filter: false,
          },  
          effectiveDuration: {
            title: "Effective Duration",
            type: "number",
            filter: false,
          },
          agentName: {
            title: "Agent Name",
            placeholder:"Select ...",
            filter: false,
            editor: {
              type: 'list',
              config: {
                selectText: 'Select',
               
                list: helper,
              },
            
            }
          },
         
          department: {
            title: "Department",
            placeholder:"Select ...",
            filter: false,
            editor: {
              type: 'list',
              config: {
                selectText: 'Select',
               
                list: [
                  {value: 'Production', title:'Production'},
                  {value: 'Commercial', title:'Commercial'},  
                  {value: 'Maintenance', title:'Maintenance'},
                  {value: 'Quality', title:'Quality'},          
                 
                ],
              },
            
            }
            
          },
          equipmentUsed: {
            title: "Equipment Used",
            type: "number",
            filter: false,
          },
          
    
        }
      };
      
  })
 
    
  }

  constructor(private http: HttpClient) {
    //this.source. = 'data';
  }
  onCreateConfirm(event): void {
    var data = {
      date: moment("2020-08-12").format("YYYY-MM-DD"),
      nameOfTheIntervention: event.newData.nameOfTheIntervention,
      typeOfIntervention: event.newData.typeOfIntervention,
      family: event.newData.family,
      state: event.newData.state,
      machine: event.newData.machine,
      manager: event.newData.manager,
      agentId: event.newData.agentId,  
      agentName: event.newData.agentName,
      department: event.newData.department,
      duration: event.newData.duration,
      effectiveDuration: event.newData.effectiveDuration,
      equipmentUsed: event.newData.equipmentUsed,
   
    };


    if (event.newData.state === "Enqueue" && event.newData.effectiveDuration !== "") {
      window.confirm("the intervention is still ongoing");
    } else  if (event.newData.state === "Completed" && event.newData.effectiveDuration === "") {
      window.confirm("please fill the Effective Duration row");
    } else {
    this.http
      .post<Addwork>("http://localhost:8080/api/workOrder", data)
      .subscribe(
        (res) => {
          console.log(res);
          event.confirm.resolve(event.newData);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      );
    }
  }
  onSaveConfirm(event): void {
    
    var data = {
      helper: event.data._id,
      date: moment("2020-11-28").format("YYYY-MM-DD"),
      typeOfIntervention: event.newData.typeOfIntervention,
      nameOfTheIntervention: event.newData.nameOfTheIntervention,
      family: event.newData.family,
      machine: event.newData.machine,
      state: event.newData.state,
      manager: event.newData.manager,
      agentId: event.newData.agentId,
      agentName: event.newData.agentName,
      depertment: event.newData.depertment,
      duration: event.newData.duration,
      effectiveDuration: event.newData.effectiveDuration,
      equipmentUsed: event.newData.equipmentUsed,
    };
   
    if (event.newData.state === "Enqueue" && event.newData.effectiveDuration !== "") {
      window.confirm("the intervention is still ongoing");
    } else  if (event.newData.state === "Completed" && event.newData.effectiveDuration === "") {
      window.confirm("please fill the Effective Duration row");
    } else {
      if (window.confirm("Do you confirm the changes?")) {
        
        this.http
          .post<Addwork>(
            "http://localhost:8080/api/workorderList/updateWork",
            data
          )
          .subscribe(
            (res) => {
              console.log(res);
              event.confirm.resolve(event.newData);
            },
            (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                console.log("Client-side error occured.");
              } else {
                console.log("Server-side error occured.");
              }
            }
          );
        location.reload();
      } else {
        event.confirm.reject();
      }
    }
  }

  onDeleteConfirm(event): void {
    console.log(event.data);
    this.http
      .post<Addwork>("http://localhost:8080/api/deleteWorkorder", event.data)
      .subscribe(
        (res) => {
          console.log(res);
          event.confirm.resolve(event.source.data);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log("Client-side error occured.");
          } else {
            console.log("Server-side error occured.");
          }
        }
      );
  }
}
