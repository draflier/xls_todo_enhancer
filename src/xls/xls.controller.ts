import { Body, Controller, Get, Param, Post,Query,Req } from '@nestjs/common';

import {XlsService} from './xls.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiPayloadTooLargeResponse,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery
} from '@nestjs/swagger';
import { Logger } from '@nestjs/common';


@ApiBearerAuth()
@ApiTags('XLS')
@Controller('xls')
export class XlsController {
    private readonly logger = new Logger(XlsController.name);


    constructor(private readonly xlsService: XlsService) {
      
    }



    @Get('/read-xls')
    @ApiOperation({ summary: 'Read Excel', description: 'Reads Excel from a file path' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiQuery({name: 'file_path'})    
    async getAddr(@Query('file_path') strFilePath:string ) : Promise<string>{
      try{
        Logger.debug("Inside inside read-xls controller");
        this.xlsService.readXls();
        return this.xlsService.toText();
      }
      catch (err)
      {
        Logger.debug(err);
      }
    }



}
