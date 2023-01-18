import { Injectable} from '@nestjs/common';

import { Logger } from '@nestjs/common';

import * as XLSX from 'xlsx';

import { todo_task } from './models/todo_task';

import { sleepMilliSec } from '../Utils/sleep-util';

//import abi from '../../../2_contracts/artifacts/DealerApplDB_metadata.json';
//import dealerApplDBABI from '../../../2_contracts/artifacts/abiDB.json';
//import '../Utils/envSetter';

@Injectable()
export class XlsService {

  private readonly logger = new Logger(XlsService.name);

  private m_xlsFile = "c:\\dev\\xls_todo_enhancer\\files\\todo.xlsx";

  private m_arrTasks : todo_task[] = [];

  constructor()
  {

  }

  readXls()
  {
    let workbook = XLSX.readFile(this.m_xlsFile);
    let sheet = workbook.Sheets[workbook.SheetNames[0]];
    let json = XLSX.utils.sheet_to_json(sheet);

    for(let row of json){
      let obj = row;
      let strValue = obj['Task'];
      let objTask = new todo_task(strValue, 1);
      this.m_arrTasks.push(objTask);
      //console.log(objTask.toString());
    }
    console.log(this.m_arrTasks);
    console.log(this.m_arrTasks.length);

  }
  toText() : string
  {
    let strBuf :string = "";
    for(let objTask of this.m_arrTasks)
    {
      strBuf = strBuf + objTask.toString();
    }
    return strBuf
  }



  

}
