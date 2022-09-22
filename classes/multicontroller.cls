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
            System.debug(pickListVal.getLabel() +' '+pickListVal.getValue());
        } 
//system.debug('pickListValuesList'+pickListValuesList);
//List<String> l = new List<String>(fields.keySet()); 
      //  Map<String,Schema.SObjectType> AllObjectMap=new Map<String,Schema.SObjectType>();
      //  AllObjectMap=Schema.getGlobalDescribe();
     //   List<String> l = new List<String>(AllObjectMap.keySet()); 
      return pickListValuesList;
    }
}