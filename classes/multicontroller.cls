public with sharing class multicontroller {
   
    @AuraEnabled
    public static List<string> getObjectNames(){
       List<String> pickListValuesList= new List<String>();
        String objectName = 'Account';
        String fieldName ='Industry';
        Schema.SObjectType s = Schema.getGlobalDescribe().get(objectName) ;
        Schema.DescribeSObjectResult r = s.getDescribe() ;
        Map<String,Schema.SObjectField> fields = r.fields.getMap() ;
        Schema.DescribeFieldResult fieldResult = fields.get(fieldName).getDescribe();
        List<Schema.PicklistEntry> ple = fieldResult.getPicklistValues();
      for( Schema.PicklistEntry pickListVal : ple){
            pickListValuesList.add(pickListVal.getLabel());
        }
      return pickListValuesList;
    }
}