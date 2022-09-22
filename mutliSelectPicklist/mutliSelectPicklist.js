import { LightningElement, track, api, wire } from 'lwc';
import getObjectNames from "@salesforce/apex/multicontroller.getObjectNames";

export default class App extends LightningElement {
    @track
    values = [];


    @track
    selectedvalues = [];

    @api
    picklistlabel = 'Status';

    showdropdown;

    handleleave() {

        let sddcheck = this.showdropdown;

        if (sddcheck) {
            this.showdropdown = false;
            this.fetchSelectedValues();
        }
    }

    connectedCallback() {
        this.getOptions();
        console.log(this.values);
        this.values.forEach(element => element.selected
            ? this.selectedvalues.push(element.value) : '');
        console.log(this.selectedvalues);
    }
    getOptions() {
        getObjectNames({})
            .then((result) => {
                console.log(result);
                let valuesnew = [];
                if (result) {
                    result.forEach(r => {
                        valuesnew.push({
                            label: r,
                            value: r,
                        });
                    });
                }
                this.values = valuesnew;
            })
    }
    fetchSelectedValues() {

        this.selectedvalues = [];

        //get all the selected values
        this.template.querySelectorAll('c-picklist-value').forEach(
            element => {
                if (element.selected) {
                    console.log(element.value);
                    this.selectedvalues.push(element.value);
                }
            }
        );

        //refresh original list
        this.refreshOrginalList();
    }

    refreshOrginalList() {
        //update the original value array to shown after close

        const picklistvalues = this.values.map(eachvalue => ({ ...eachvalue }));

        picklistvalues.forEach((element, index) => {
            if (this.selectedvalues.includes(element.value)) {
                picklistvalues[index].selected = true;
            } else {
                picklistvalues[index].selected = false;
            }
        });

        this.values = picklistvalues;
    }

    handleShowdropdown() {
        let sdd = this.showdropdown;
        if (sdd) {
            this.showdropdown = false;
            this.fetchSelectedValues();
        } else {
            this.showdropdown = true;
        }
    }

    closePill(event) {
        console.log(event.target.dataset.value);
        let selection = event.target.dataset.value;
        let selectedpills = this.selectedvalues;
        console.log(selectedpills);
        let pillIndex = selectedpills.indexOf(selection);
        console.log(pillIndex);
        this.selectedvalues.splice(pillIndex, 1);
        this.refreshOrginalList();
    }

    get selectedmessage() {
        return this.selectedvalues.length + ' values are selected';
    }
}
