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



    @Get('/get-address')
    @ApiOperation({ summary: 'Get Address', description: 'Get Address' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    //@ApiQuery({name: 'br_num'})    
    async getAddr( ) : Promise<string>{
      try{        
        Logger.debug("Inside getAddress Controller");
        return "";
      }
      catch (err)
      {
        Logger.debug(err);
      }
    }

    @Get('/mint-erc20')
    @ApiOperation({ summary: 'Mint specified erc20', description: 'Mint erc20 of a certain amount' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiQuery({name: 'contract_address'})     
    @ApiQuery({name: 'to_address'}) 
    @ApiQuery({name: 'amount'})   
    async minterc20(@Query('contract_address') strContractAddress : string, @Query('to_address')strToAddr : string , @Query('amount')strAmt : string ) : Promise<string>{
      try{        
        Logger.debug("Minting " + strContractAddress + " to => " + strToAddr);
        
        
        
        return "";
      }
      catch (err)
      {
        Logger.debug(err);
      }
    }


    @Get('/transfer-erc20')
    @ApiOperation({ summary: 'Transfer specified erc20', description: 'Transfer erc20 of a certain amount' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiQuery({name: 'contract_address'})     
    @ApiQuery({name: 'to_address'}) 
    @ApiQuery({name: 'amount'})   
    async transfererc20(@Query('contract_address') strContractAddress : string, @Query('to_address')strToAddr : string , @Query('amount')strAmt : string ) : Promise<string>{
      try{        
        Logger.debug("Transferring " + strContractAddress + " to => " + strToAddr);
        
        
        
        return "";
      }
      catch (err)
      {
        Logger.debug(err);
      }
    }

    @Get('/mint-whitelisted-NFT')
    @ApiOperation({ summary: 'Mint Whitelisted NFT', description: 'For those whom are whitelisted, they are able to mint NFT' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiQuery({name: 'contract_address'})     
    @ApiQuery({name: 'to_address'}) 
    @ApiQuery({name: 'amount'})   
    async mintWlNft(@Query('contract_address') strContractAddress : string, @Query('to_address')strToAddr : string , @Query('amount')strAmt : string ) : Promise<string>{
      try{        
        Logger.debug("Transferring " + strContractAddress + " to => " + strToAddr);
        return "";
      }
      catch (err)
      {
        Logger.debug(err);
      }
    }




}
