import { Injectable} from '@nestjs/common';

import { Logger } from '@nestjs/common';



import { sleepMilliSec } from '../Utils/sleep-util';

//import abi from '../../../2_contracts/artifacts/DealerApplDB_metadata.json';
//import dealerApplDBABI from '../../../2_contracts/artifacts/abiDB.json';
//import '../Utils/envSetter';

@Injectable()
export class XlsService {

  private readonly logger = new Logger(XlsService.name);


  constructor()
  {

  }

}
