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

  constructor()
  {

  }




  


  readXls()
  {
    let workbook = XLSX.readFile(this.m_xlsFile);
    let sheet = workbook.Sheets[workbook.SheetNames[0]];
    let json = XLSX.utils.sheet_to_json(sheet);
    console.log(json);

    let task: todo_task[] = []; 
    
    for(let row of json){
      let objTask = new todo_task(row["Task"],1)
      task.push(objTask)
    }
    console.log(task)


  }

}
