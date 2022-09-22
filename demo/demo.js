import { LightningElement, track, api, wire } from 'lwc';
//import getObjectNames from "@salesforce/apex/multicontroller.getObjectNames";
//import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
//import { getPicklistValues } from 'lightning/uiObjectInfoApi';
export default class App extends LightningElement {
    /*@track values = [];
    @wire(getPicklistValues, { recordTypeId: '0125j00000016uz', fieldApiName: INDUSTRY_FIELD })
    propertyOrFunction;
    connectedCallBack() {

        this.getname();

    }
    getname() {
        console.log('values:::', propertyOrFunction.data);
        return this.propertyOrFunction.data;
    }*/
    // @track values = propertyOrFunction.data;
    /*  connectedCallBack() {
          console.log('values:::', values);
          this.getYourPicklist();
  
      }
      @track options;
  */
    /* connectedCallBack() {
         this.getOptions();
     }
 
     getOptions() {
         getObjectNames({})
             .then((result) => {
                 //let values = [];
                 if (result) {
                     result.forEach(r => {
                         values.push({
                             label: r,
                             value: r,
                         });
                     });
                 }
                 this.values = values;
             })
             .catch((error) => {
                 console.log(error);
                 // handle Error
             });
     }
 */
    /*
        getYourPicklist() {
            let theOptions = getObjectNames();
            console.log('theOptions:::', theOptions);
            for (const [i, j] of Object.entries(theOptions)) {
                const option = {
                    label: i,
                    value: j
                };
                //this.values.push({ label: i, value: j });
            }
            this.values = [...this.values, option];
            console.log('values:::', values);
        }
    */
    //This array can be anything as per values
    /* values = [{ label: 'New', value: 'New', selected: false },
     { label: 'In progress', value: 'In Progress', selected: false },
     { label: 'Completed', value: 'Completed' },
     { label: 'Canceled', value: 'Canceled' },
     { label: 'Aborted', value: 'Aborted' }];
 */
    //To get the picklist values in container component
    fetchSelectedValues() {
        let selections = this.template.querySelector('c-mutli-select-picklist');
        console.log(selections.values);
    }
}