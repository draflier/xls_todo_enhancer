import { stringify } from "querystring";

export class todo_task {

    private m_strName: string;
  
    private m_intImportance: number;
  
    private m_intUrgency: number;

    private m_objStartDate: string;
  
    private m_objEndDate: string;
  
    private m_intPercComplete: number;

    private m_strStatus : string;


    constructor(strName: string, intImportance : number) {
      this.m_strName = strName; 
      this.m_intImportance = intImportance; 
    }
   
    toString() : string
    {
      let strTask : string = "";
      return strTask;
    }
    
  }