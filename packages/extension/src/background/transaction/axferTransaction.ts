import { AssetTransferTx } from "@algosigner/common/interfaces/axfer";
import { FieldType, validate } from "../utils/validator";

///
// Mapping, validation and error checking for transaction axfer transactions prior to sign.
///
export class AxferTransaction implements AssetTransferTx {
    type: string;
    assetIndex: number;
    amount?: number;
    to: string;
    assetCloseTo?: string;
    from?: string;
    fee: number;
    firstRound: number;
    lastRound: number;
    note?: any;
    genesisID: string;
    genesisHash: any;
    group?: any;
    lease?: any;

    constructor(params: AxferTransaction){
        for (let prop in params){
            // Verify there are no additional properties beyond the known property types
            var validProperties = ["type","assetIndex","to","amount","assetCloseTo","from","fee","firstRound","lastRound","note","genesisID","genesisHash","group","lease"];

            if(!(validProperties.includes(prop))){
                throw new Error(`Transaction has additional unknown fields.`);
            }
            
            // Validate the property type
            let propValid = validate(prop, params[prop], FieldType.Any);
            if(!propValid)
            {
                throw Error(`Property ${prop} is not valid with a value of ${params[prop]}.`);
            }

            // Assign the property
            this[prop] = params[prop];
        }
    }
}