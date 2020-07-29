import { BaseTx } from "./baseTx";

///
// Mapping interface of allowable fields for axfer transactions.
///
export interface AssetTransferTx extends BaseTx {
    type: string,               //"axfer"
    assetIndex: number,         //uint64	"xaid"	    The unique ID of the asset to be transferred.
    amount?: number,	        //uint64	"aamt"	    The amount of the asset to be transferred. A zero amount transferred to self allocates that asset in the account's Asset map.
    to: string,	                //Address	"arcv"	    The recipient of the asset transfer.
    assetCloseTo?: string,	    //Address	"aclose"	Specify this field to remove the asset holding from the sender account and reduce the account's minimum balance.
    
    //For clawback the sender of this transaction must be the clawback account specified in the asset configuration
}