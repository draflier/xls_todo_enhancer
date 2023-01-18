import { stringify } from "querystring";
import { todo_task } from "./todo_task";

export class todo_category {

    private m_strCategoryName: string;
    private m_strSupervisor: string;
    private m_objTasks: todo_task[];


    constructor(strCategoryName: string, objTasks: todo_task[]) {
      this.m_strCategoryName = strCategoryName;
      this.m_objTasks = objTasks; 
    }
   
    toString() : string
    {

      let strTask : string = this.m_strCategoryName + "\n" + "============================" + "n";
      for (let objTask of this.m_objTasks)
      {
        strTask = strTask + objTask.toString();
      }

      return strTask;
    }
    
  }